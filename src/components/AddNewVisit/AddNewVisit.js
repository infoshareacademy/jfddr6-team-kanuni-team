//Komponent posiadający logikę dodawania nowej wizyty do firebase

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Button from '../Auxiliary/Button';
import 'react-day-picker/dist/style.css';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../data/db';

const AddNewVisit = (userUid) => {
  const [selectedDayFromDayPicker, setSelectedDay] = useState(''); //dzień wybrany z komponentu DayPicker
  const [timeInput, setTimeInput] = useState(''); //godzina wybrana z "selecta"
  const [packageInput, setPackageInput] = useState(''); //pakiet wybrany z "selecta"
  const [summary, setSummary] = useState(false); //flaga potrzebna do wyświetlenia podsumowania

  const handlerClick = (day) => {
    //klikniecie na dzień w komponencie DayPicker ustawia stan na kliknięty dzień
    setSelectedDay(day);
  };

  const summaryHandler = (e) => {
    //ta funkcja sprawia, że kliknięcie buttona podsumowania ustawia flagę summary na true co pozwala na wyświetlenie podsumowania
    e.preventDefault();
    setSummary(true);
  };

  const sendVisitToFirebase = async () => {
    //ta funkcja sprawia, że kliknięcie buttona wyślij  w podsumowaniu wysyła dane wizyty do firebase

    const timeStampDateSeconds = new Date(selectedDayFromDayPicker).getTime(); // zamiana obj Data na number o wartości -  ilość milisekund od 1 stycznia 1970 00:00:00 UTC

    //poniżej logika dodająca odpowiednią ilość milisekund do wybranego dnia w zależności od wybranej godziny aby można było w firebase zapisać godzinę umówionej wizyty
    const timeStampDatePlusHour = () => {
      if (timeInput === '8:00') {
        console.log(timeStampDateSeconds + 28800000);
        return timeStampDateSeconds + 28800000;
      } else if (timeInput === '11:00') {
        return timeStampDateSeconds + 39600000;
      } else if (timeInput === '14:00') {
        return timeStampDateSeconds + 50400000;
      }
    };

    //poniżej logika wysłania danych do firebase (push obiektu do array w polu visits w dokumencie user)
    await updateDoc(doc(db, 'users', userUid.userUid), {
      visits: arrayUnion({
        date: new Date(timeStampDatePlusHour()), //zmiana z number (milisekundy) na obj Data który zapisze sie jako timestamp w firebase
        package: packageInput,
        isDone: false,
      }),
    });

    //poniżej 'czyszczeni' stanów i przestawienie flagi aby nie wyświetlać podsumowania
    setSelectedDay('');
    setTimeInput('');
    setPackageInput('');
    setSummary(false);
  };

  //zmienna potrzebna do disable`owania dni w komponencie DayPicker
  const disabledDays = [{ from: new Date(2022, 1, 1), to: new Date() }];

  return (
    <>
      <h1>Umów się na czyszczonko</h1>

      {/* Komponent z biblioteki react-day-picker do wyboru dnia*/}
      <DayPicker
        mode="single"
        selected={selectedDayFromDayPicker}
        disabled={disabledDays}
        from={2022}
        toYear={2023}
        onSelect={handlerClick}
        captionLayout="dropdown"
      />

      {/* Jeśli wybierzemy dzień to pojawia się formularz wyboru godziny i pakietu   */}
      {selectedDayFromDayPicker && (
        <>
          <form>
            <label htmlFor="time">Wybierz godzinę</label>
            <select
              name="time"
              id="time"
              onChange={(e) => setTimeInput(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Wybierz godzinę
              </option>
              <option value="8:00">8:00</option>
              <option value="11:00">11:00</option>
              <option value="14:00">14:00</option>
            </select>

            <label htmlFor="package">Wybierz pakiet</label>
            <select
              name="package"
              id="package"
              onChange={(e) => setPackageInput(e.target.value)}
              defaultValue=""
            >
              <option value="" disabled>
                Wybierz pakiet
              </option>
              <option value="Pakiet Platinum">Pakiet Platinum</option>
              <option value="Pakiet Gold">Pakiet Gold</option>
              <option value="Pakiet Silver">Pakiet Silver</option>
              <option value="Pakiet Bronze">Pakiet Bronze</option>
              <option value="Pakiet Wood">Pakiet Wood</option>
              <option value="Pakiet Plastic">Pakiet Plastic</option>
            </select>

            {/* jeśli mamy wybraną godzinę i pakiet to wyświetli się przycisk podsumowanie */}
            {timeInput && packageInput ? (
              <Button buttonText={'Podsumowanie'} onClick={summaryHandler} />
            ) : null}
          </form>

          {/* po kliknięciu na button podsumowania flaga summary przestawi się na true i wyświetli się podsumowanie */}
          {summary && (
            <div>
              <h2>Podsumowanie umówienia wizyty:</h2>
              {/*  poniżej metoda toLocaleDateString() zamienia obj date na stringa np na 11.05.2022 */}
              <p>{`Dzień: ${selectedDayFromDayPicker.toLocaleDateString()}`}</p>
              <p>{`Godzina: ${timeInput}`}</p>
              <p>{`Pakiet: ${packageInput}`}</p>
              <Button buttonText={'Wyślij'} onClick={sendVisitToFirebase} />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AddNewVisit;

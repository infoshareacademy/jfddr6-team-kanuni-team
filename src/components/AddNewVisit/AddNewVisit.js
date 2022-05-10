import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Button from '../Auxiliary/Button';
import 'react-day-picker/dist/style.css';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../data/db';

const AddNewVisit = (userUid) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [timeInput, setTimeInput] = useState('');
  const [packageInput, setPackageInput] = useState('');
  const [summary, setSummary] = useState(false);

  const handlerClick = (day) => {
    setSelectedDay(day);
    console.log(day.toLocaleDateString());
  };

  const summaryHandler = (e) => {
    e.preventDefault();
    setSummary(true);
    // console.log(timeInput, packageInput, selectedDay);
  };

  const sendVisitToFirebase = async () => {
    const timeStampDateSeconds = new Date(selectedDay).getTime();
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

    await updateDoc(doc(db, 'users', userUid.userUid), {
      visits: arrayUnion({
        date: new Date(timeStampDatePlusHour()),
        package: packageInput,
        isDone: false,
      }),
    });
    setSelectedDay('');
    setTimeInput('');
    setPackageInput('');
    setSummary(false);
  };

  const disabledDays = [{ from: new Date(2022, 1, 1), to: new Date() }];

  return (
    <>
      <h1>Umów się na czyszczonko</h1>

      <DayPicker
        mode="single"
        selected={selectedDay}
        disabled={disabledDays}
        from={2022}
        toYear={2023}
        onSelect={handlerClick}
        captionLayout="dropdown"
      />

      {selectedDay && (
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

            {timeInput && packageInput ? (
              <Button buttonText={'Podsumowanie'} onClick={summaryHandler} />
            ) : null}
          </form>
          {summary && (
            <div>
              <h2>Podsumowanie umówienia wizyty:</h2>
              <p>{`Dzień: ${selectedDay.toLocaleDateString()}`}</p>
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

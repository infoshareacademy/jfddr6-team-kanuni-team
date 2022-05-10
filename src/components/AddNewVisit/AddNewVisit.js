import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../data/db';

const AddNewVisit = () => {
  const [selectedDay, setSelectedDay] = useState('');

  const disabledDays = [{ from: new Date(2022, 1, 1), to: new Date() }];

  const handlerClick = (day) => {
    setSelectedDay(day.toDateString());
    console.log(selectedDay);
  };

  const getVisitByDay = (day) => {
    const visitsRef = collection(db, 'visits');
    const visitQuery = query(visitsRef, where('day', '==', day));

    // const visits = await getDocs(visitQuery);

    // visits.forEach((doc) => {
    //   console.log(doc.id, ' => ', doc.data());
    // });

    return getDocs(visitQuery).then((visit) => {
      console.log({ visit });
      const visitFromDb = visit.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return visitFromDb;
    });
  };
  return (
    <>
      <h1>Umów wizytę</h1>

      <DayPicker
        mode="single"
        selected={selectedDay}
        disabled={disabledDays}
        from={2022}
        toYear={2023}
        onSelect={handlerClick}
        captionLayout="dropdown"
      />
      <form>
        {selectedDay && (
          <>
            <p>{`Selected day ${selectedDay}`}</p>
            <p>Select Time:</p>
            {getVisitByDay(selectedDay).then((visit) => {
              console.log({ visit });
            })}
            <select name="time"></select>
          </>
        )}
      </form>
    </>
  );
};

export default AddNewVisit;

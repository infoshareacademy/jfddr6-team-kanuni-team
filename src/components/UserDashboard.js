import { NavLink } from 'react-router-dom';
import Button from './Auxiliary/Button.js';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  deleteField,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../data/db.js';

const UserDashboard = ({ id, user }) => {
  const [visits, setVisits] = useState([]);

  const getVisits = async () => {
    const visitsCollection = collection(db, 'users');
    const q = query(visitsCollection, where('mail', '==', user));
    const visitsDocuments = await getDocs(q);

    const [currentUser] = visitsDocuments.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVisits(currentUser.visits);
  };

  useEffect(() => {
    getVisits();
  }, []);

  // const deleteVisit = async () => {
  //   // const visitRef = doc(db, `users/${id}/visits/${index}`);
  //   // await deleteDoc(visitRef);
  //   const visitRef = doc(db, 'users', id);
  //   await updateDoc (visitRef, {
  //     visits: deleteField()
  //   })
  //   // getVisits();
  // };

  // const handleDelete = (index) => {
  //   deleteVisit(index);
  // };
  return (
    <>
      <Header />
      <div>
        <Button>
          <NavLink to="/userdashboard/addnewvisit">Umów kolejną wizytę</NavLink>
        </Button>
        <div>
          <h3>Twoje wizyty:</h3>
          <div>
            {visits.map((visit) => {
              let timestamp = visit.date.seconds;
              let serviceDate = new Date(timestamp * 1000);
              return (
                <div key={visit.date.seconds}>
                  <div>
                    <p>
                      Data: {serviceDate.getFullYear()}/0{serviceDate.getMonth() + 1}/
                      {serviceDate.getDate()}
                    </p>
                    <p>
                      Godzina: {serviceDate.getHours()}:{serviceDate.getMinutes()}0
                    </p>
                    <p>Pakiet: {visit.package}</p>
                    <Button>Anuluj wizytę</Button>
                    <hr />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;

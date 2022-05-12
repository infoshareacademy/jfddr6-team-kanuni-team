import { NavLink } from 'react-router-dom';
import Button from './Auxiliary/Button.js';
import { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../data/db.js';

const UserDashboard = ({ id, user }) => {
  console.log('ID:', id);
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

  const deleteVisit = async (index) => {
    const visitRef = doc(db, 'users', id);
    const filteredVisits = visits.filter((_, i) => {
      console.log('ID, index', id, index);
      return i !== index;
    });
    await updateDoc(visitRef, {
      visits: filteredVisits,
    });

    getVisits();
  };

  return (
    <>
      <div>
        <Button>
          <NavLink to="/userdashboard/addnewvisit">Umów kolejną wizytę</NavLink>
        </Button>
        <div>
          <h3>Twoje wizyty:</h3>
          <div>
            {visits.map((visit, i) => {
              let timestamp = visit.date.seconds;
              let serviceDate = new Date(timestamp * 1000);
              return (
                <div key={Math.random(timestamp)}>
                  <div>
                    <p>
                      Data: {serviceDate.getFullYear()}/0{serviceDate.getMonth() + 1}/
                      {serviceDate.getDate()}
                    </p>
                    <p>
                      Godzina: {serviceDate.getHours()}:{serviceDate.getMinutes()}0
                    </p>
                    <p>Pakiet: {visit.package}</p>
                    <Button onClick={() => deleteVisit(i)}>Anuluj wizytę</Button>
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

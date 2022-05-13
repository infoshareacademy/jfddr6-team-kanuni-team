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
import './UserDashboard.css';

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

  const deleteVisit = async (index) => {
    const visitRef = doc(db, 'users', id);
    const filteredVisits = visits.filter((_, i) => {
      return i !== index;
    });
    await updateDoc(visitRef, {
      visits: filteredVisits,
    });
    getVisits();
  };

  return (
    <>
      <div className='dashboard'>
        <div>
          <h3 className='yourVisits'>Twoje wizyty:</h3>
          <div className='visits'>
            {visits.map((visit, i) => {
              let timestamp = visit.date.seconds;
              let serviceDate = new Date(timestamp * 1000);
              return (
                <div className='singleVisit' key={Math.random(timestamp)}>
                  <div>
                    <p>
                      Data: {serviceDate.getFullYear()}/0{serviceDate.getMonth() + 1}/
                      {serviceDate.getDate()}
                    </p>
                    <p>
                      Godzina: {serviceDate.getHours()}:{serviceDate.getMinutes()}0
                    </p>
                    <p>Pakiet: {visit.package}</p>
                    <Button className='cancelButton' onClick={() => deleteVisit(i)}>Anuluj wizytę</Button>
                  </div>
                </div>

              );
            })}
            <Button className='visitButton'>
              <NavLink to="/userdashboard/addnewvisit" className='visitText'>Umów kolejną wizytę</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;

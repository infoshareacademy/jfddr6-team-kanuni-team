import { NavLink } from 'react-router-dom';
import Button from './Auxiliary/Button';
import Header from './Header/Header';
import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../data/db.js';

const UserDashboard = ({ user }) => {
  const [visits, setVisits] = useState([]);

  const getVisits = async () => {
    const visitsCollection = collection(db, 'users');
    const q = query(visitsCollection, where('mail', '==', user));
    const visitsDocuments = await getDocs(q);

    const [currentUser] = visitsDocuments.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log('Ewa', new Date(currentUser.visits[0].date.seconds * 1000).getDate());
    //  console.log("Ewa 2", visitsDocuments.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // })))
    setVisits(currentUser.visits);
  };

  useEffect(() => {
    getVisits();
  }, []);

  const deleteVisit = () => {};

  return (
    <>
      <Header />
      <div>
        <div>
          <h3>Twoje wizyty:</h3>
          <div>
            {visits.map((visit) => {
              let timestamp = visit.date.seconds;
              let serviceDate = new Date(timestamp * 1000);
              console.log(serviceDate);
              return (
                <div key={visit.date.seconds}>
                  <div>
                    <p>
                      Data: {serviceDate.getFullYear()}/0{serviceDate.getMonth() + 1}/
                      {serviceDate.getDate()}
                    </p>
                    <p>Godzina: {serviceDate.getHours()}:{serviceDate.getMinutes()}0</p>
                    <p>Pakiet: {visit.package}</p>
                    <hr/>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Button>
          <NavLink to="/userdashboard/addnewvisit">Umów wizytę</NavLink>
        </Button>
      </div>
    </>
  );
};
export default UserDashboard;

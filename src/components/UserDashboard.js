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
    setVisits(currentUser.visits);
  };

  useEffect(() => {
    getVisits();
  }, []);

  return (
    <>
      <Header />
      <div>
        <div>
          <h3>Zaplanowane wizyty dla {user} </h3>
          <div>
            {visits.map((visit) => {
              let timestamp = visit.date.seconds;
              let serviceDate = new Date(timestamp);
              console.log(serviceDate);
              return (
                <div key={visit.date.seconds}>
                  <p>
                    Twoja wizyta: {visit.package} {visit.date.seconds}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Button>
          <NavLink to="/userdashboard/addnewvisit">Umów wizytę</NavLink>
        </Button>
        <div>
          <h3>Twoje zrealizowane wizyty:</h3>
          <div>00/00/00 NazwaPakietu</div>
        </div>
      </div>
    </>
  );
};
export default UserDashboard;

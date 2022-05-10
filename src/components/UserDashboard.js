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

    console.log(user)

    const visitsList = visitsDocuments.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setVisits(visitsList);
    console.log(visitsList)
  };

  console.log(visits)

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
            {visits.map((visit) => (
              <div key={visit.id} className={'Ewa'}>
                {console.log("Ewa", visit.data.visits[0].package, visit.data.visits[0].date.seconds)}
                <p>Twoja wizyta: {visit.data.mail}</p>
                <p>{visit.data.visits[0].package} {visit.data.visits[0].date.seconds}</p>
              </div>
            ))}
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

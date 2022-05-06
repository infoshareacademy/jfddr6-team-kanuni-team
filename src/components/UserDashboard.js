import Header from "./Header/Header";

const UserDashboard = () => {
  return (
    <>
      <Header />
      <div>
        <div>
          <h3>Twoje zaplanowane wizyty:</h3>
          <div> wizyta/brak wizyt <button>Anuluj</button> </div>
        </div>
        <button>Umów Wizytę</button>
        <div>
          <h3>Twoje zrealizowane wizyty:</h3>
          <div>00/00/00 NazwaPakietu</div>
        </div>

      </div>
    </>

  );

};

export default UserDashboard;

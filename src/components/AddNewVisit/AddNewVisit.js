import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AddNewVisit = () => {
  return (
    <>
      <h1>Umów wizytę</h1>
      <form>
        <DayPicker />
        <select name="packages" id=""></select>
      </form>
    </>
  );
};

export default AddNewVisit;

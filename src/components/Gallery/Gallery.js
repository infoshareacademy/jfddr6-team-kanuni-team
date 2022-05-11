import './Gallery.css';
import LoremMini from '../Auxiliary/LoremMini';

export const Gallery = () => {
  return (
    <div className="GalleryCnt">
      <div className="container">
        <div className="div1 rtd">
          <img src="./zdj1.jpg"></img>
          <div class="tekst-div">
            <div className="niewiem">
              <h3>Woskowanie</h3>
              <LoremMini />
            </div>
          </div>
        </div>
        <div className="div2 rtd">
          <img src="./zdj2.jpg"></img>
          <div class="tekst-div">
            <div className="niewiem">
              <h3>Mycie środka</h3>
              <LoremMini />
            </div>
          </div>
        </div>
        <div className="div3 rtd">
          <img src="./zdj3.jpg"></img>
          <div class="tekst-div">
            <div className="niewiem">
              <h3>Mycie</h3>
              <LoremMini />
            </div>
          </div>
        </div>
        <div className="div4 rtd">
          <img src="./zdj4.jpg"></img>
          <div class="tekst-div">
            <div className="niewiem">
              <h3>Nabłyszczanie</h3>
              <LoremMini />
            </div>
          </div>
        </div>
        <div className="tire">
          <img src="./kierownica.png"></img>
        </div>
      </div>
    </div>
  );
};

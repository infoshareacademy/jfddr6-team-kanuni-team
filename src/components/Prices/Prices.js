import './Prices.css';

export const Prices = () => {
  return (
    <div className="pricing-table" id="prices">
      <div className="ptable-item">
        <div className="ptable-single">
          <div className="ptable-header">
            <div className="ptable-title">
              <h2>Silver</h2>
            </div>
            <div className="ptable-price">
              <h2>
                99<small>zł</small>
              </h2>
            </div>
          </div>
          <div className="ptable-body">
            <div className="ptable-description">
              <ul>
                <li>mycie </li>
                <li>mycie felg</li>
              </ul>
            </div>
          </div>
          <div className="ptable-footer">
            <div className="ptable-action">
              <a href="">umów się</a>
            </div>
          </div>
        </div>
      </div>

      <div className="ptable-item featured-item">
        <div className="ptable-single">
          <div className="ptable-header">
            <div className="ptable-status">
              <span>Hot</span>
            </div>
            <div className="ptable-title">
              <h2>Gold</h2>
            </div>
            <div className="ptable-price">
              <h2>
                249 <small>zł</small>
              </h2>
            </div>
          </div>
          <div className="ptable-body">
            <div className="ptable-description">
              <ul>
                <li>mycie </li>
                <li>mycie felg</li>
                <li>polerowanie</li>
                <li>Niewidzialne wycieraczki</li>
              </ul>
            </div>
          </div>
          <div className="ptable-footer">
            <div className="ptable-action">
              <a href="">Umów się</a>
            </div>
          </div>
        </div>
      </div>

      <div className="ptable-item">
        <div className="ptable-single">
          <div className="ptable-header">
            <div className="ptable-title">
              <h2>Platinum</h2>
            </div>
            <div className="ptable-price">
              <h2>
                399<small>zł</small>
              </h2>
            </div>
          </div>
          <div className="ptable-body">
            <div className="ptable-description">
              <ul>
                <li>mycie</li>
                <li>mycie felg</li>
                <li>polerowanie</li>
                <li>niewidzialna wycieraczka</li>
                <li>odkurzanie środka</li>
              </ul>
            </div>
          </div>
          <div className="ptable-footer">
            <div className="ptable-action">
              <a href="">umów się</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ptable-item">
        <div className="ptable-single">
          <div className="ptable-header">
            <div className="ptable-title">
              <h2>Master</h2>
            </div>
            <div className="ptable-price">
              <h2>
                499<small>zł</small>
              </h2>
            </div>
          </div>
          <div className="ptable-body">
            <div className="ptable-description">
              <ul>
                <li>mycie</li>
                <li>mycie felg</li>
                <li>polerowanie</li>
                <li>niewidzialna wycieraczka</li>
                <li>odkurzanie środka</li>
                <li>plastik</li>
              </ul>
            </div>
          </div>
          <div className="ptable-footer">
            <div className="ptable-action">
              <a href="">umów się</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

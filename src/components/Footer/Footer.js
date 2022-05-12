import './Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <p>© Kanuni Team 2022</p>
      <div className="socialLinks">
        <a href="https://github.com/skjoeldkrona">
          <span className="logoGitHub">
            <i class="fa-brands fa-github icon"></i>
            <i class="circle">skjoeldkrona</i>
          </span>
        </a>
        <a href="https://github.com/trohda">
          <span className="logoGitHub">
            <i class="fa-brands fa-github icon"></i>
            <i class="circle">trohda</i>
          </span>
        </a>
        <a href="https://github.com/wejjafly">
          <span className="logoGitHub">
            <i class="fa-brands fa-github icon"></i>
            <i class="circle">Wejjafly</i>
          </span>
        </a>
        <a href="https://github.com/jakub-biernacik">
          <span className="logoGitHub">
            <i class="fa-brands fa-github icon"></i>
            <i class="circle">jakub-biernacik</i>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Footer;

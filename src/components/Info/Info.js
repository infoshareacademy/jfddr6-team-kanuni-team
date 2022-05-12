import './Info.css';

const Info = () => {
  return (
    <div className="contactInfo">
      <div class="contactbox">
        <div class="contact1">
          <p>
            Godziny otwarcia:
            <br />
            pon-pt - <br />
            09:00 - 19:00 <br />
            sob-nd -<br /> 10:00-14:00
          </p>
        </div>
        <div class="contact2">
          <p>
            <span>🏠</span>
            <br />
            Adres:
            <br /> ul. Czysta 11
            <br /> 17-256 Czyścioszkowo
          </p>
        </div>
        <div class="contact3">
          <p>Czekamy na was</p>
        </div>
        <div class="contact4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481105.2287504637!2d-7.514715872822137!3d61.898934230765576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48bc1593762df9eb%3A0x3fb0314864f71b24!2sWyspy%20Owcze!5e0!3m2!1spl!2spl!4v1652183395782!5m2!1spl!2spl"
            title="googleMaps"
            width="300"
            height="300"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;

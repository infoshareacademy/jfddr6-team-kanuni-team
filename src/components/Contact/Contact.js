import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <form name="contact" method="POST" data-netlify="true">
        <section className="contact_wrapper">
          <div className="contact_info">
            <h3 className="titleleft">kontakt</h3>

            <div className="callUs">
              <p>Lub zadzoń do nas!</p>
              <p> +72 828 828 828</p>
            </div>
          </div>

          <div className="contact_msg">
            <h3 className="title">napisz do nas</h3>

            <div className="form_fild">
              <div className="input_group">
                <input name="name" type="text" className="input" required />
                <label className="placeholder">twoje imie</label>
              </div>

              <div className="input_group">
                <input name="email" type="text" className="input" required />
                <label className="placeholder">twój adres email</label>
              </div>

              <div className="input_group">
                <textarea
                  name="message"
                  className="input input_textarea "
                  rows="6"
                  required
                ></textarea>
                <label className="placeholder textarea">napisz do nas wiadomość</label>
              </div>

              <div className="input_group">
                <button type="submit" className="btn">
                  Wyślij
                </button>
                {/* <input type="submit" className="btn" value="Wyślij" /> */}
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;

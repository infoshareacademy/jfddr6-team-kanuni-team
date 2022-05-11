import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <section className="contact_wrapper">
        <div className="contact_info">
          <h3 className="titleleft">kontakt</h3>

          <div className="callUs">
            <p>Lub zadzoń do nas!</p>
            <p> +72 828 828 828</p>
          </div>
        </div>

        <div class="contact_msg">
          <h3 class="title">napisz do nas</h3>

          <div class="form_fild">
            <div class="input_group w_50">
              <input type="text" class="input" required />
              <label class="placeholder">twoje imie</label>
            </div>

            <div class="input_group w_50">
              <input type="text" class="input" required />
              <label class="placeholder">twój adres email</label>
            </div>

            <div class="input_group w_100">
              <textarea class="input input_textarea " rows="6" required></textarea>
              <label class="placeholder textarea">napisz do nas wiadomość</label>
            </div>

            <div class="input_group">
              <input type="submit" class="btn" value="Wyślij" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

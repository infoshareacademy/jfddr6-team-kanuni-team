import './Contact.css';

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <form netlify>
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
              <div class="input_group">
                <input name="name" type="text" class="input" required />
                <label class="placeholder">twoje imie</label>
              </div>

              <div class="input_group">
                <input name="email" type="text" class="input" required />
                <label class="placeholder">twój adres email</label>
              </div>

              <div class="input_group">
                <textarea name="message" class="input input_textarea " rows="6" required></textarea>
                <label class="placeholder textarea">napisz do nas wiadomość</label>
              </div>

              <div class="input_group">
                <input type="submit" class="btn" value="Wyślij" />
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;

import './Contact.css';

const Contact = () => {
  return (
    <div className="contentContact">
      <form>
        <h2 className="head">Kontakt</h2>
        <input className="mailArea" type="text" placeholder="twójemail@op.pl" />

        <textarea
          rows="10"
          cols="50"
          className="questionArea"
          placeholder="Masz pytanie? Napisz do nas"
        />
        <button className="sendBtn">Wyślij</button>
      </form>
      <div className="callUs">
        <p>Lub zadzoń do nas!</p>
        <p> +72 828 828 828</p>
      </div>
    </div>
  );
};

export default Contact;

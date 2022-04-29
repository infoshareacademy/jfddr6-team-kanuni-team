import './Contact.css';

const Contact = () => {
  return (
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
  );
};

export default Contact;

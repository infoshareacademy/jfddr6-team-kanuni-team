import "./Contact.css"

const Contact = () => {

    return (
        <form>
            <label className="head">Kontakt</label>
            <input className="mailArea" type="text" placeholder="twójemail@op.pl" />

            <textarea rows="10" cols="50" className="questionArea" placeholder="Masz pytanie? Napisz do nas" />
            <input className="sendBtn" type="submit" value="wyślij" />
        </form>
       
    );
    
};

export default Contact;
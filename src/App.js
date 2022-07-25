import "./styles.css";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

export default function App() {
  return (
    <div className="App">
      <div className="text-wrapper">
        <h1 className="heading-text">
          Trying to decide is this Platform right for you ?
        </h1>
        <p className="subheading-text">
          For any product related queries please reach out to us to know better
          about functionality of product and its features.{" "}
        </p>
        <div className="email">
          <div>
            <EmailIcon />
          </div>
          <div>
            <p>priyanka@coffeebeans.io</p>
            <p>kevin@coffeebeans.io</p>
          </div>
        </div>
        <div className="phone">
          <PhoneIcon />
          <div>
            <p>+91-9876543225</p>
            <p>+91-9876543225</p>
          </div>
        </div>
      </div>
      <div className="form-wrapper">
        <h1>Leave a message</h1>
        <input type="text" placeholder="Name*" className="input-field" />
        <input type="email" placeholder="Email*" className="input-field" />
        <input
          type="text"
          placeholder="Phone Number*"
          className="input-field"
        />
        <input
          type="text"
          placeholder="Message"
          className="input-field-textarea"
        />
        <button className="send-btn">
          SEND MESSAGE <span> &rarr;</span>
        </button>
      </div>
    </div>
  );
}

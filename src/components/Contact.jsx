import "./Contact.css"; // Import CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>Have a question or feedback? Feel free to reach out!</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;

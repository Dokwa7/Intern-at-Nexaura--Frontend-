import { contact } from "../../data/contact";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <span className="eyebrow">Let's talk</span>
      <h2 className="footer-title">
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </h2>
      <p className="footer-line">{contact.closingLine}</p>

      <div className="footer-socials">
        {contact.socials.map((social) => (
          <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
            {social.label}
          </a>
        ))}
      </div>

      <div className="footer-bottom">
        <span>© {year}</span>
      </div>
    </footer>
  );
}

export default Footer;

import React, { useState } from "react";
import { footer } from "../../data/Data";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubscribe = () => {
    if (email.trim() === "") {
      setMessage("Please input your email.");
      setIsError(true);
    } else if (!validateEmail(email)) {
      setMessage("Please enter a valid email address.");
      setIsError(true);
    } else {
      setMessage("✅ Subscribed Successfully!");
      setIsError(false);
      setEmail("");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <a
              href="https://wa.me/+2348067395318"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn5">Contact Us Today</button>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="../images/logo-light.png" alt="Logo" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straight
                to your inbox every month
              </p>

              <div className="input flex">
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
              </div>

              {message && (
                <div className={`popup ${isError ? "error" : "success"}`}>
                  {message}
                </div>
              )}
            </div>
          </div>

          {footer.map((val, index) => (
            <div className="box" key={index}>
              <h3>{val.title}</h3>
              {/* <ul>
                {val.text.map((item, i) => (
                  <li key={i}>{item.list}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </footer>

      <div className="legal">
        <span>© 2025 Ngozika. Designed By The Great Eagle Praanda Team.</span>
      </div>
    </>
  );
};

export default Footer;

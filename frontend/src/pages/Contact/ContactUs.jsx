import React, { useEffect } from "react";

export default function ContactUs() {

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, i * 200);
    });
  }, []);

  return (
    <div style={styles.page}>

      {/* HERO */}
      <div style={styles.hero}>
        <h1 style={styles.title} className="fade-in">Contact Us</h1>
        <p style={styles.subtitle} className="fade-in">
          We would love to hear from you
        </p>
      </div>

      {/* FORM */}
      <div style={styles.container}>
        <form style={styles.form} className="fade-in">

          <div style={styles.row}>
            <input type="text" placeholder="Enter Name" style={styles.input} />
            <input type="text" placeholder="Enter Mobile" style={styles.input} />
            <input type="email" placeholder="Enter Email" style={styles.input} />
          </div>

          <div style={styles.row}>
            <input type="text" placeholder="Enter Location" style={styles.input} />
            <textarea placeholder="Your Message" style={styles.textarea}></textarea>
          </div>

          <button style={styles.button}>Submit</button>
        </form>
      </div>

      {/* MAP */}
      <div style={styles.map} className="fade-in">
        <iframe
          title="Temple Location"
          src="https://www.google.com/maps?q=tirupati%20temple&output=embed"
          style={styles.iframe}
        />
      </div>

      {/* ANIMATIONS */}
      <style>{`
        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        input:hover, textarea:hover {
          border-color: #c9a646;
          box-shadow: 0 0 10px rgba(201,166,70,0.3);
        }

        button:hover {
          background: #b8952f;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          form {
            width: 95% !important;
          }
        }
      `}</style>

    </div>
  );
}

/* 🎨 NEW LIGHT PREMIUM THEME */
const styles = {
  page: {
    fontFamily: "Poppins, sans-serif",
    background: "#f8f5ef", // light cream
    minHeight: "100vh",
  },

  hero: {
    textAlign: "center",
    padding: "60px 20px 30px",
  },

  title: {
    fontSize: "42px",
    color: "#2c2c2c",
    fontWeight: "600",
    letterSpacing: "1px",
  },

  subtitle: {
    color: "#9c8b6b",
    marginTop: "10px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
  },

  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "15px",
    width: "80%",
    maxWidth: "900px",
    boxShadow: "0 5px 25px rgba(0,0,0,0.05)",
    border: "1px solid #eee",
  },

  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "15px",
    flexWrap: "wrap",
  },

  input: {
    flex: "1 1 250px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    outline: "none",
    background: "#fafafa",
  },

  textarea: {
    flex: "1 1 250px",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    height: "100px",
    background: "#fafafa",
    outline: "none",
  },

  button: {
    marginTop: "20px",
    padding: "12px 30px",
    borderRadius: "25px",
    border: "none",
    background: "#d4af37", // gold
    color: "#fff",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },

  map: {
    marginTop: "40px",
  },

  iframe: {
    width: "100%",
    height: "300px",
    border: "none",
  },
};
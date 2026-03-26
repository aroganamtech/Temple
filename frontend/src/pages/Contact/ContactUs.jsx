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

      {/* GOOGLE FONTS */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@600&family=Inter:wght@400&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />

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
          border-color: #c9a227;
          box-shadow: 0 0 10px rgba(201,162,39,0.3);
        }

        button:hover {
          background: #b8952f;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 30px !important;
          }

          p {
            font-size: 14px !important;
          }

          form {
            width: 95% !important;
          }
        }
      `}</style>

    </div>
  );
}

/* 🎨 CREAM THEME STYLES */
const styles = {
  page: {
    fontFamily: "Inter, sans-serif",
    background: "#F8F5EC", // cream background
    minHeight: "100vh",
    color: "#4B3F2F",
  },

  hero: {
    textAlign: "center",
    padding: "70px 20px 40px",
  },

  title: {
    fontFamily: "Playfair Display, serif",
    fontSize: "44px",
    fontWeight: "700",
    color: "#8B6B2E", // soft gold brown
  },

  subtitle: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "18px",
    fontWeight: "600",
    color: "#A68A3F",
    marginTop: "10px",
  },

  container: {
    display: "flex",
    justifyContent: "center",
  },

  form: {
    background: "#FFFDF7", // light cream card
    padding: "35px",
    borderRadius: "18px",
    width: "80%",
    maxWidth: "900px",
    border: "1px solid #E8DFC8",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },

  row: {
    display: "flex",
    gap: "15px",
    marginBottom: "18px",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },

  input: {
    flex: "1 1 250px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #D6C7A1",
    outline: "none",
    background: "#FFF",
    color: "#4B3F2F",
    fontFamily: "Inter",
    fontSize: "14px",
  },

  textarea: {
    flex: "1 1 250px",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #D6C7A1",
    height: "110px",
    background: "#FFF",
    outline: "none",
    color: "#4B3F2F",
    fontFamily: "Inter",
    fontSize: "14px",
    lineHeight: "1.4",
    display: "block",
    resize: "none",
  },

  button: {
    marginTop: "20px",
    padding: "12px 35px",
    borderRadius: "30px",
    border: "none",
    background: "#C9A227",
    color: "#fff",
    fontWeight: "600",
    fontFamily: "Poppins",
    cursor: "pointer",
  },

  map: {
    marginTop: "50px",
  },

  iframe: {
    width: "100%",
    height: "320px",
    border: "none",
    filter: "sepia(20%) brightness(95%)",
  },
};

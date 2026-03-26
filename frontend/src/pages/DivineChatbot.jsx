import React, { useState } from "react";

export default function DivineChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const temples = [
    {
      name: "Tirupati",
      data: {
        history:
          "Ancient temple over 1000 years old. Supported by Pallavas, Cholas & Vijayanagara kings.",
        significance:
          "One of the richest temples. Lord Vishnu appeared here in Kali Yuga.",
        highlights: "Tirupati Laddu prasadam, Hair offering ritual",
        bestTime: "Sep – Feb",
      },
    },
    {
      name: "Madurai Meenakshi",
      data: {
        history: "Built in 6th century, expanded by Nayak rulers.",
        significance: "Dedicated to Goddess Meenakshi & Lord Shiva.",
        highlights: "14 towers, 1000 pillar hall",
        bestTime: "Oct – Mar",
      },
    },
    {
      name: "Kashi Vishwanath",
      data: {
        history: "Rebuilt multiple times, current temple built in 1780.",
        significance: "One of 12 Jyotirlingas of Shiva.",
        highlights: "Located near Ganga river, spiritual center",
        bestTime: "Oct – Mar",
      },
    },
    {
      name: "Rameshwaram",
      data: {
        history: "Linked with Ramayana. Lord Rama worshipped Shiva here.",
        significance: "Part of Char Dham & Jyotirlinga.",
        highlights: "Longest corridor, 22 holy wells",
        bestTime: "Oct – Apr",
      },
    },
    {
      name: "Golden Temple",
      data: {
        history: "Founded in 1577 by Guru Ram Das.",
        significance: "Holiest Sikh temple.",
        highlights: "Free Langar for all, symbol of equality",
        bestTime: "Nov – Mar",
      },
    },
  ];

  const [messages, setMessages] = useState([
    {
      text: "🙏 Select a temple below:",
      sender: "bot",
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };

    let foundTemple = temples.find((t) =>
      input.toLowerCase().includes(t.name.toLowerCase())
    );

    let botMsg;

    if (foundTemple) {
      botMsg = {
        text: `🛕 ${foundTemple.name}\nChoose what you want to know:`,
        sender: "bot",
        options: foundTemple,
      };

      // 🔥 Clear previous messages except first
      setMessages([messages[0], userMsg, botMsg]);
    } else {
      botMsg = {
        text: "🙏 Please select a temple from above.",
        sender: "bot",
      };

      setMessages((prev) => [...prev, userMsg, botMsg]);
    }

    setInput("");
  };

  // 🔥 CLICK TEMPLE → RESET CHAT (except header)
  const handleTempleClick = (temple) => {
    const botReply = {
      text: `🛕 ${temple.name}\nChoose what you want to know:`,
      sender: "bot",
      options: temple,
    };

    setMessages([messages[0], botReply]); // keep only header + new temple
  };

  const handleOptionClick = (temple, type) => {
    const responseMap = {
      history: `📜 History:\n${temple.data.history}`,
      significance: `✨ Significance:\n${temple.data.significance}`,
      highlights: `🏛️ Highlights:\n${temple.data.highlights}`,
      bestTime: `🕒 Best Time:\n${temple.data.bestTime}`,
    };

    const botReply = {
      text: responseMap[type],
      sender: "bot",
    };

    setMessages((prev) => [...prev, botReply]);
  };

  return (
    <>
      {/* FLOAT BUTTON */}
      <div style={styles.fab} onClick={() => setOpen(!open)}>
        🛕
      </div>

      {open && (
        <div style={styles.chatbox}>
          <div style={styles.header}>🙏 Divine Assistant</div>

          {/* 🔥 STATIC TEMPLE LIST */}
          <div style={styles.staticSuggestions}>
            {temples.map((temple, idx) => (
              <button
                key={idx}
                style={styles.suggestionBtn}
                onClick={() => handleTempleClick(temple)}
              >
                {temple.name}
              </button>
            ))}
          </div>

          <div style={styles.messages}>
            {messages.map((msg, i) => (
              <div key={i}>
                <div
                  style={{
                    ...styles.message,
                    alignSelf:
                      msg.sender === "user" ? "flex-end" : "flex-start",
                    background:
                      msg.sender === "user"
                        ? "linear-gradient(45deg,#E6C97A,#C9A227)"
                        : "#FFFDF7",
                  }}
                >
                  {msg.text}
                </div>

                {/* OPTIONS */}
                {msg.options && (
                  <div style={styles.suggestionBox}>
                    {["history", "significance", "highlights", "bestTime"].map(
                      (type) => (
                        <button
                          key={type}
                          style={styles.suggestionBtn}
                          onClick={() =>
                            handleOptionClick(msg.options, type)
                          }
                        >
                          {type === "history" && "📜 History"}
                          {type === "significance" && "✨ Significance"}
                          {type === "highlights" && "🏛️ Highlights"}
                          {type === "bestTime" && "🕒 Best Time"}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* INPUT */}
          <div style={styles.inputBox}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about temples..."
              style={styles.input}
            />
            <button onClick={handleSend} style={styles.sendBtn}>
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* 🎨 STYLES */
const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "linear-gradient(45deg,#E6C97A,#C9A227)",
    padding: "16px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "22px",
  },

  chatbox: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "340px",
    height: "480px",
    background: "#F8F5EC",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    background: "linear-gradient(45deg,#E6C97A,#C9A227)",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },

  staticSuggestions: {
    padding: "8px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },

  messages: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },

  message: {
    padding: "8px",
    borderRadius: "10px",
    marginBottom: "6px",
    maxWidth: "80%",
    whiteSpace: "pre-line",
  },

  suggestionBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  },

  suggestionBtn: {
    background: "#FFF",
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "12px",
  },

  inputBox: {
    display: "flex",
    borderTop: "1px solid #ddd",
  },

  input: {
    flex: 1,
    padding: "10px",
    border: "none",
    outline: "none",
  },

  sendBtn: {
    padding: "10px",
    cursor: "pointer",
    background: "#E6C97A",
    border: "none",
  },
};
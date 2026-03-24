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
      text: "🙏 Welcome! Explore divine places below:",
      sender: "bot",
      suggestions: temples,
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
    } else {
      botMsg = {
        text: "🙏 Here are some divine places:",
        sender: "bot",
        suggestions: temples,
      };
    }

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleTempleClick = (temple) => {
    const botReply = {
      text: `🛕 ${temple.name}\nChoose what you want to know:`,
      sender: "bot",
      options: temple,
    };

    setMessages((prev) => [...prev, botReply]);
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

      {/* CHATBOX */}
      {open && (
        <div style={styles.chatbox}>
          <div style={styles.header}>🙏 Divine Assistant</div>

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
                        ? "linear-gradient(45deg,#FFD700,#FFA500)"
                        : "#ffffff",
                    color: msg.sender === "user" ? "#000" : "#333",
                  }}
                >
                  {msg.text}
                </div>

                {/* Suggestions */}
                {msg.suggestions && (
                  <div style={styles.suggestionBox}>
                    {msg.suggestions.map((temple, idx) => (
                      <button
                        key={idx}
                        style={styles.suggestionBtn}
                        onClick={() => handleTempleClick(temple)}
                      >
                        {temple.name}
                      </button>
                    ))}
                  </div>
                )}

                {/* Options */}
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

/* 🤍 OFF-WHITE + GOLD THEME */
const styles = {
  fab: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "linear-gradient(45deg,#FFD700,#FF8C00)",
    padding: "16px",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "22px",
    boxShadow: "0 0 15px gold",
    zIndex: 999,
  },

  chatbox: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "340px",
    height: "460px",
    background: "#FAF9F6", // off white
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "0 0 20px rgba(0,0,0,0.1)",
    border: "1px solid #eee",
    overflow: "hidden",
  },

  header: {
    background: "linear-gradient(45deg,#FFD700,#FF8C00)",
    color: "#000",
    padding: "12px",
    textAlign: "center",
    fontWeight: "bold",
  },

  messages: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
  },

  message: {
    padding: "8px 12px",
    borderRadius: "10px",
    maxWidth: "80%",
    marginBottom: "6px",
    whiteSpace: "pre-line",
  },

  suggestionBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "10px",
  },

  suggestionBtn: {
    background: "#ffffff",
    color: "#8B7500",
    border: "1px solid #FFD700",
    borderRadius: "20px",
    padding: "6px 12px",
    cursor: "pointer",
    fontSize: "12px",
    transition: "0.3s",
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
    background: "#ffffff",
    color: "#333",
  },

  sendBtn: {
    background: "linear-gradient(45deg,#FFD700,#FF8C00)",
    color: "#000",
    border: "none",
    padding: "10px",
    cursor: "pointer",
  },
};
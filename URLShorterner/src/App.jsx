
import React, { useState } from "react";

function App() {
  const [urlInput, setUrlInput] = useState("");
  const [urlRecords, setUrlRecords] = useState([
    { original: "https://openai.com", shortened: "http://localhost/x1y2z3", hits: 1 },
    { original: "https://react.dev", shortened: "http://localhost/a7b9c2", hits: 2 }
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      original: urlInput,
      shortened: "http://localhost/" + Math.random().toString(36).slice(2, 8),
      hits: 0,
    };

    setUrlRecords([newEntry, ...urlRecords]);
    setUrlInput("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>URL Shortener</h2>

      <form style={styles.form} onSubmit={handleFormSubmit}>
        <input
          type="url"
          placeholder="Enter your URL..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Shorten
        </button>
      </form>

      <table style={styles.table}>
        <thead>
          <tr style={styles.tableHeader}>
            <th style={styles.th}>Original URL</th>
            <th style={styles.th}>Shortened</th>
            <th style={styles.th}>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urlRecords.map((record, idx) => (
            <tr key={idx} style={styles.tr}>
              <td style={styles.td}>
                <a href={record.original} target="_blank" rel="noopener noreferrer">
                  {record.original}
                </a>
              </td>
              <td style={styles.td}>
                <a href={record.shortened} target="_blank" rel="noopener noreferrer">
                  {record.shortened}
                </a>
              </td>
              <td style={styles.td}>{record.hits}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  },
  tableHeader: {
    backgroundColor: "#f4f4f4",
    textAlign: "left",
  },
  th: {
    border: "1px solid #ddd",
    padding: "10px",
  },
  tr: {
    borderBottom: "1px solid #ddd",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
  },
};

export default App;


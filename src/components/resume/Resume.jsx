import React from "react";

function Resume() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>My Resume</h2>
      <iframe
        src="/MadhuMernJan25(edited1).pdf#toolbar=0" // Hides the Adobe/Browser toolbar
        width="80%"
        height="600px"
        style={{ border: "none" }}
        title="Resume"
      ></iframe>
    </div>
  );
}

export default Resume;

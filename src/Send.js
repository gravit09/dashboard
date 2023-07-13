import React from "react";
import "./index.css";

function Send() {
  return (
    <div className="mint">
      <h1>Send to UserName</h1>
      <form className="form">
        <div className="form-row">
          <label htmlFor="username">UserName:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-row">
          <label htmlFor="amount">Amount:</label>
          <input type="number" id="amount" />
        </div>
        <div className="form-row">
          <label htmlFor="note">Note:</label>
          <input type="text" id="note" />
        </div>
        <br />
        <button type="submit">Send Ticket</button>
      </form>
    </div>
  );
}

export default Send;

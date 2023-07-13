import React from "react";
import "./index.css";

function Manual() {
  return (
    <div className="mint">
      <h1>Add Tournament Manually</h1>
      <form className="form">
        <div className="form-row">
          <label htmlFor="tournamentName">Tournament Name:</label>
          <input type="text" id="tournamentName" />
        </div>
        <div className="form-row">
          <label htmlFor="type">Type:</label>
          <select id="type">
            <option value="32 player lobby">Standard 32 player</option>
            <option value="18 player lobby">18 player knockout</option>
            <option value="12 player lobby">12 player knockout</option>
            <option value="8 player lobby">8 player knockout</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="dealerUserName">Dealer UserName:</label>
          <input type="text" id="dealerUserName" />
        </div>
        <div className="form-row">
          <label htmlFor="startingTime">Starting Time:</label>
          <input type="date" id="startingTime" />
        </div>
        <br />
        <button type="submit">Add Tournament</button>
      </form>
    </div>
  );
}

export default Manual;

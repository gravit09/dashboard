import React from "react";
import "./index.css";

function FilterUser() {
  return (
    <div className="mint">
      <h1>Filter User</h1>
      <form className="form">
        <div className="form-row">
          <label htmlFor="filteringParam">Filtering Parameter:</label>
          <input type="text" id="filteringParam" />
        </div>
        <div className="form-row">
          <label htmlFor="password">Enter your Password:</label>
          <input type="number" id="password" />
        </div>
        <div className="form-row">
          <label htmlFor="ticketCount">Ticket Count:</label>
          <input type="number" id="ticketCount" />
        </div>
        <div className="form-row">
          <label htmlFor="tournamentWins">Tournament Wins:</label>
          <input type="number" id="tournamentWins" />
        </div>
        <div className="form-row">
          <label htmlFor="noOfPlayers">Match Played Less Than:</label>
          <input type="number" id="noOfPlayers" name="noOfPlayers" />
        </div>
        <br />
        <button type="submit">Filter User</button>
      </form>
    </div>
  );
}

export default FilterUser;

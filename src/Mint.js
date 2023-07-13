import React, { Fragment } from "react";
import "./index.css";

function Mint() {
  return (
    <Fragment>
      <div className="mint">
        <h1>Mint Doodie Ticket</h1>
        <form className="form">
          <div className="form-row">
            <label htmlFor="numberOfTickets">
              Number of tickets to be Minted:
            </label>
            <input type="number" id="numberOfTickets" />
          </div>
          <br />
          <button type="submit">Mint Ticket</button>
        </form>
      </div>
    </Fragment>
  );
}

export default Mint;

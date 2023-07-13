import React, { useState } from "react";
import "./index.css";

function Tournament() {
  const [tournamentData, setTournamentData] = useState({
    type: "",
    visibility: "",
    ticketPrice: 1,
    winnersShare: 0,
    additionalPrice: 0,
    rewardShareType: "",
    addAlgo: "",
    approxFillTime: 1,
    noOfPlayers: 0,
  });

  const [isValidEntry, setIsValidEntry] = useState(true); // State variable for entry validity

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;

    if (name === "type") {
      let maxPlayers;
      if (value === "32 player lobby") {
        updatedValue = "32";
        maxPlayers = 32;
      } else if (value === "18 player lobby") {
        updatedValue = "18";
        maxPlayers = 18;
      } else if (value === "12 player lobby") {
        updatedValue = "12";
        maxPlayers = 12;
      } else if (value === "10 player lobby") {
        updatedValue = "10";
        maxPlayers = 10;
      } else if (value === "8 player lobby") {
        updatedValue = "8";
        maxPlayers = 8;
      }
      setTournamentData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
        noOfPlayers: updatedValue,
        maxPlayers: maxPlayers,
      }));
    } else if (name === "rewardShareType") {
      const values = updatedValue.split("#").map(Number);
      const sum = values.reduce((a, b) => a + b, 0);

      if (sum !== 100) {
        setIsValidEntry(false);
      } else {
        setIsValidEntry(true);
        setTournamentData((prevData) => ({
          ...prevData,
          [name]: updatedValue,
        }));
      }
    } else {
      setTournamentData((prevData) => ({
        ...prevData,
        [name]: updatedValue,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { winnersShare, additionalPrice, noOfPlayers, ticketPrice } =
      tournamentData;
    const totalPrice = ticketPrice * noOfPlayers;

    if (parseFloat(winnersShare) + parseFloat(additionalPrice) >= totalPrice) {
      setIsValidEntry(false); // Set validity to false if condition not met
      return;
    }

    setIsValidEntry(true); // Set validity to true if condition met
    console.log(tournamentData);
  };

  return (
    <div className="mint">
      <h1>Add Tournament</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="matches">Type:</label>
          <select
            name="type"
            id="matches"
            onChange={handleInputChange}
            value={tournamentData.type}
          >
            <option value="32 player lobby">Standard 32 player</option>
            <option value="18 player lobby">18 player knockout</option>
            <option value="12 player lobby">12 player knockout</option>
            <option value="8 player lobby">8 player knockout</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="visibility">Visibility:</label>
          <select
            name="visibility"
            id="visibility"
            onChange={handleInputChange}
            value={tournamentData.visibility}
          >
            <option value="Public">Public</option>
            <option value="Private">Private</option>
          </select>
        </div>
        <div className="form-row">
          <label htmlFor="ticketPrice">Ticket price:</label>
          <input
            type="number"
            name="ticketPrice"
            min="1"
            value={tournamentData.ticketPrice}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="noOfPlayers">No of players:</label>
          <input
            type="number"
            name="noOfPlayers"
            value={tournamentData.noOfPlayers}
            onChange={handleInputChange}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="totalAmount">Total Price:</label>
          <input
            type="number"
            name="totalAmount"
            value={tournamentData.ticketPrice * tournamentData.noOfPlayers}
            readOnly
          />
        </div>
        <div className="form-row">
          <label htmlFor="winnersShare">Winner's Share:</label>
          <input
            type="number"
            name="winnersShare"
            onChange={handleInputChange}
            min="1"
          />
        </div>
        <div className="form-row">
          <label htmlFor="additionalPrice">Additional Price:</label>
          <input
            type="number"
            name="additionalPrice"
            onChange={handleInputChange}
            min="0"
          />
        </div>
        <div className="form-row">
          <label htmlFor="rewardShareType">Reward Share type:</label>
          <input
            type="text"
            name="rewardShareType"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="addAlgo">Add Algo:</label>
          <input type="text" name="addAlgo" onChange={handleInputChange} />
        </div>
        <div className="form-row">
          <label htmlFor="approxFillTime">Approx Fill time:</label>
          <input
            type="number"
            name="approxFillTime"
            onChange={handleInputChange}
            min="1"
            value={tournamentData.approxFillTime}
          />
        </div>
        <br />
        {!isValidEntry && (
          <p>
            Warning: Winners' share plus additional price is greater or equal to
            the total price. Please select the correct values or not valid share
            type.
          </p>
        )}
        <button type="submit">Add Tournament</button>
      </form>
    </div>
  );
}

export default Tournament;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Mint from "./Mint";
import FilterUser from "./FilterUser";
import Send from "./Send";
import Manual from "./Manual";
import Tournament from "./Tournament";
import Dashboard from "./Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Mint" element={<Mint />} />
            <Route path="/Filter" element={<FilterUser />} />
            <Route path="/Send" element={<Send />} />
            <Route path="/Manual" element={<Manual />} />
            <Route path="/Tournament" element={<Tournament />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

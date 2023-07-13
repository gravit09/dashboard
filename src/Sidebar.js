import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "115vh", overflow: "scroll initial" }}
    >
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Doodie Dashboard
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Mint" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Mint</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Send" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Send Token</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Manual" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Manual Tournament</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Filter" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Filter User</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Tournament" activeClassName="activeClicked">
              <CDBSidebarMenuItem>Validated Tournament</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div style={{ padding: "20px 5px" }}>doodie</div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;

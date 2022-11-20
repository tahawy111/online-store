import "./style.css";
import personImg from "../../images/person.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import { useState } from "react";
import { Avatar } from "@mui/material";

const Sidebar = () => {
  const { name } = useSelector((state) => state.user.userData.user);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className="main">
      <div className="personal-info">
        <div className="person-image">
          <Avatar src={personImg} />
        </div>
        <h5>{name}</h5>
      </div>
      <hr />
      <div className="sidebar-items">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/product" end>
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/category" end>
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

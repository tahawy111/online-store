import "./style.css";
import personImg from "../../images/person.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Avatar, Divider } from "@mui/material";
import { AiFillHome, AiFillAppstore } from "react-icons/ai";
import { BsCart } from "react-icons/bs";

const Sidebar = () => {
  const { name } = useSelector((state) => state.user.userData.user);
  const sidebarLinks = [
    { path: "/", item: `Home`, icon: <AiFillHome /> },
    { path: "/product", item: `Products`, icon: <BsCart /> },
    { path: "/category", item: `Categories`, icon: <AiFillAppstore /> },
  ];

  return (
    <div className="main">
      <div className="personal-info">
        <div className="person-image">
          <Avatar src={personImg} />
        </div>
        <h5>{name}</h5>
      </div>
      <Divider>Quick Links</Divider>
      <div className="sidebar-items">
        <ul>
          {sidebarLinks.map((ele, index) => (
            <li key={index}>
              <NavLink
                to={ele.path}
                end
                style={{
                  display: "flex",
                  alignItems: "center",
                  lineHeight: "0",
                }}
              >
                <span className="me-2">{ele.icon}</span> <span>{ele.item}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

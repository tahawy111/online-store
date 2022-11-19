import "./style.css";
import personImg from "../../images/person.png";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { name } = useSelector((state) => state.user.userData.user);
  return (
    <div className="main">
      <div className="personal-info">
        <div className="person-image">
          <img src={personImg} alt="" className="rounded" />
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

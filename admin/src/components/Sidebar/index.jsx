import { useSelector } from "react-redux";
import personImg from "../../images/person.png";
import "./style.css";

const Sidebar = () => {
  const { menuOpenState } = useSelector((state) => state.main);
  return (
    <div
      className="main"
      style={{
        transform: menuOpenState ? `translateX(0)` : `translateX(-250px)`,
      }}
    >
      <div className="personal-info">
        <div className="person-image">
          <img src={personImg} alt="" className="rounded" />
        </div>
        <h5>Amer Tahawy</h5>
      </div>
      <hr />
      <div className="sidebar-items">
        <ul>
          <li className="active">Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
          <li>Link</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

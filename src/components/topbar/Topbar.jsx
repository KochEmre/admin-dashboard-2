import "./topbar.css";
import logo from "../../images/logo.png";
import me from "../../images/me.png";

import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topbarLeft">
          <Link exact activeClassName="active" to="/" className="link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="topbarRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline style={{ fontSize: "30px" }} />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <FiSettings style={{ fontSize: "25px" }} />
          </div>
          <div className="topbarIconContainer">
            <img src={me} alt="ProfilePhoto" className="profilePic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

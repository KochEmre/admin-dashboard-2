import "./sidebar.css";
import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdAttachMoney,
  MdMailOutline,
  MdFeedback,
  MdProductionQuantityLimits,
  MdOutlineMessage,
  MdReport,
} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFillFileEarmarkBarGraphFill, BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link exact activeClassName="active" to="/" className="link">
              <li className="sidebarListItem">
                <MdLineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
            <Link to="/empty" className="link">
              <li className="sidebarListItem">
                <MdTimeline className="sidebarIcon" />
                Analytics
              </li>

              <li className="sidebarListItem">
                <MdTrendingUp className="sidebarIcon" />
                Sales
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <FaUsers className="sidebarIcon" />
                Users
              </li>
            </Link>

            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <MdProductionQuantityLimits className="sidebarIcon" />
                Products
              </li>
            </Link>
            <Link to="/empty" className="link">
              <li className="sidebarListItem">
                <MdAttachMoney className="sidebarIcon" />
                Transactions
              </li>
              <li className="sidebarListItem">
                <BsFillFileEarmarkBarGraphFill className="sidebarIcon" />
                Reports
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MdMailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <MdFeedback className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MdOutlineMessage className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BsBag className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

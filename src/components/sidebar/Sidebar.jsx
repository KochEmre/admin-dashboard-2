import "./sidebar.css";
import { MdLineStyle, MdTimeline, MdTrendingUp, MdAttachMoney, MdMailOutline,
    MdFeedback, MdProductionQuantityLimits, MdOutlineMessage, MdReport} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsFillFileEarmarkBarGraphFill, BsBag } from "react-icons/bs";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaUsers className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <MdProductionQuantityLimits className="sidebarIcon" />
              Product
            </li>
            <li className="sidebarListItem">
              <MdAttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BsFillFileEarmarkBarGraphFill className="sidebarIcon" />
              Reports
            </li>
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

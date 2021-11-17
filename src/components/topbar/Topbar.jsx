import "./topbar.css"
import logo from "../../images/logo.png"
import {IoMdNotificationsOutline} from 'react-icons/io';
import {FiSettings} from 'react-icons/fi';

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <img src={logo} alt="Logo" className="logo"/>
                </div>
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <IoMdNotificationsOutline style={{fontSize: "30px"}}/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <FiSettings style={{fontSize: "25px"}}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Topbar

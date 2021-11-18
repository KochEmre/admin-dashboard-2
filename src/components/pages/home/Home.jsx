import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../../dummyData.js";
import WidgetSm from "../../widgetSm/WidgetSm";
import WidgetLg from "../../widgetLg/WidgetLg";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} dataKey="Active User" title="User Analytics" grid />
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}



export default Home

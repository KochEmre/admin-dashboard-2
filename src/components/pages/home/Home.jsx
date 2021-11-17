import Chart from "../../chart/Chart"
import FeaturedInfo from "../../featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../../dummyData.js";

function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart data={userData} dataKey="Active User" title="User Analytics" grid />
        </div>
    )
}



export default Home

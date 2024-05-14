import React from "react";

import { TraficLight } from "./TrafficLight";


//create your first component
const Home = () => {
	return (
		<>
		<div className="mainDiv">
		<div id="trafficTop"></div>
        <div>
			<TraficLight/>	
		</div>
			
		</div>
		</>
	);
};

export default Home;

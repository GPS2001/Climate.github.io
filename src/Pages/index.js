import React, { useEffect } from "react";
import { BackHeader, Headername, BackOfPage, MyLine, MyContainerHome, Textbox } from "./PageElements";
import "./animations/index.css";
import vid from './photos/earth.mp4';

function Home() {

  return (
    <div>
      <video className='videoTag' autoPlay loop muted>
                 <source src={vid} type='video/mp4' />
      </video>
      <MyLine />
      <BackHeader>
        <Headername> Home </Headername>
      </BackHeader>
      <BackOfPage style={{ height: "30rem" }} />
      <MyContainerHome style={{ backgroundColor: "#8BB990", height: "25rem", marginTop: '25rem', width: '68%'}} />
      <MyContainerHome style={{ backgroundColor: "#466552", height: "23rem", width: "66%", marginTop: '26rem', borderRadius: '8%'}} > 
        Climate change is one of the greatest crises of our time, and as not enough action is being taken to prevent the current issues from worsening, we will need to learn to accommodate for the consequences. With the death tolls on a rise as a result of climate change, we noticed that an alarming number of deaths and injuries can be avoided by providing specific weather updates. Research has shown that climate change can impact weather factors such as heat waves and severe storms! These storms can increase water levels, causing floods which lead to over 1000 fatalities every year in just the US. To inspire the next generation by spreading awareness about current situations, we hope to educate the audience and help them reduce their carbon footprint and improve the economy. <br/>
        <br/>
     Our website provides live and interactive graphs for the users to manipulate and view at their specific location, so they are able to adjust their plans. The information is presented after analyzing the NOAA flood advisories, Canadian government websites, and other datasets which provide accurate weather reports and send alerts. It also helps to prepare cities for extreme heat events and provides users with a better understanding of heat risks. In some cases, we provide very specific information based on the province they enter with recommended water levels and current levels. Our integrated chatbot also provides live weather alerts and notifies the users whenever they should be cautious about the weather. <br/>
     <br/>
    Only together can we ensure our country stays clean, green and environmentally friendly. After all, your life and the life of your loved ones depend on it. 
</MyContainerHome>
        
    </div>
  );
}
export default Home;
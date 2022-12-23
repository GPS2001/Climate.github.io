import React, { useState } from 'react';
import { BackHeader, Headername, Box, MyLine, BackOfPage, myPic, MyContainer, Textbox, TextContainerwater } from './PageElements';
import './animations/raining.css';
import img from './photos/stormypic.jpg';
import Forms from './form';


function Floodalert() {
    const [curState, setcurState] = useState("NoS");
    const handleStateChange = (val) => {
      setcurState(val);
    }
    var Current = curState;
    return (
        <div>
            { Current }
            {/* the rain effect */}
            <Box className = "rain" />
            <MyLine />
            <BackHeader style={{ backgroundImage: `url(${img})` }}> 
                <Headername> Flood Alert </Headername>
            </BackHeader>
            <Forms className="myform" handleStateChange={handleStateChange} curState={curState} style={{ paddingTop: "100px" }}/>
            <img src={process.env.PUBLIC_URL + '/Graphs/' + Current + '.jpg'} className="mypicss"></img>
            <MyContainer style={{ height: "32.5rem", backgroundColor: "#8AA0B6"}} />
            <BackOfPage style= {{ height: "60rem" }} />
            <MyContainer style={{ backgroundColor: "#8AA0B6", height: "21.5rem", marginTop: '58.8rem'}} />
        <TextContainerwater>
            <Textbox style={{ backgroundColor: "#385B7F", boxShadow:"5px 10px #2C4D6E"}} > Water levels shown are still-water surface elevations over the entire lake surface. Water levels at specific locations may differ substantially due to meteorological influences. Official records are based on monthly average water levels and not daily water levels. Users of the Great Lakes, connecting channels and the St. Lawrence River should keep informed of current conditions before undertaking any activities that could be affected by changing water levels. Mariners should utilize navigation charts and refer to current water level readings. High water levels are expected to persist for at least the next six months, so flood prone areas are expected to remain vulnerable. </Textbox>
            <Textbox style={{ backgroundColor: "#385B7F", boxShadow:"5px 10px #2C4D6E"}} > In case of a flood, Evacuate immediately, if told to evacuate. Never drive around barricades. Local responders use them to safely direct traffic out of flooded areas. Contact your healthcare provider If you are sick and need medical attention. Wait for further care instructions and shelter in place, if possible. Do not walk, swim or drive through flood waters. Stay off bridges over fast-moving water- fast-moving water can wash bridges away without warning. Stay inside in you're trapped in rapidly moving water. Get on the roof if water is rising inside the car. Get to the highest level if trapped in a building. Only get on the roof if necessary and once there signal for help. Do not climb into a closed attic to avoid getting trapped by rising flood water. </Textbox>
        </TextContainerwater>
        </div>
    )
}

export default Floodalert

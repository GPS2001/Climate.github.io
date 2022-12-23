import React from 'react'
import { BackHeader, Headername, MyLine, BackOfPage, MyContainer, TextContainerfire, Textbox } from './PageElements';
import img from './photos/BCCAQv2_85_annual_plus30_2021-2050.png'
import firee from './photos/fireee.mp4'
import './animations/heat.css'


function Heatrisk() {
    return (
        <div>
            <video className='videoTag' autoPlay loop muted>
                 <source src={firee} type='video/mp4' />
            </video>
            < BackOfPage style={{ height: "62rem" }} />
            < MyLine />
            <BackHeader > 
                <Headername> HEAT RISK </Headername>
            </BackHeader>
            <img src={img} className="fireboi"></img>
            <MyContainer style={{ backgroundColor: "orange", height: "36.3rem" }} />
            <MyContainer style={{ backgroundColor: "orange", height: "21.5rem", marginTop: '62.4rem'}} />
        <TextContainerfire>
            <Textbox style={{ backgroundColor: "#B54A01", boxShadow:"5px 10px #89362A"}} > Many places in Canada have a high number of extreme heat events, often called "heat waves." Extreme heat can put your health at risk, causing illnesses like heat stroke and even death. It is important to take steps to protect yourself and your family. Extreme heat events involve high temperatures and sometimes high humidity. Although the level of temperature extremes may vary between regions, unusually high heat can have negative impacts on your health. Over the next 30 years, the number of extremely hot days in a year is expected to more than double in some parts of Canada. </Textbox>
            <Textbox style={{ backgroundColor: "#B54A01", boxShadow:"5px 10px #89362A"}} > Safety tips: Heat illnesses are preventable thus during extreme heat, the most important thing is to keep cool and hydrated. Follow these five steps to protect yourself and your family in very hot weather. Firstly, prepare for the heat, pay close attention to how you - and those around you - feel, stay hydrated, stay cool and avoid exposure to extreme heat when outdoors. Remember that heat stroke is a medical emergency so call 911 or your local emergency number immediately if you are caring for someone who has a high body temperature and is either unconscious, confused or has stopped sweating. </Textbox>
        </TextContainerfire>
        </div>
    )
}

export default Heatrisk

import React, { useEffect } from 'react'
import smoke from './photos/smoke.mp4'
import { BackHeader, Headername, BackOfPage, MyLine, MyContainer, TextContainer, Textbox } from './PageElements';
import './animations/clouds.css';

function Pollutionlevel() {

    useEffect(() => {
        const script = document.createElement('script');      
        script.src = "https://www.climatelevels.org/graphs/js/co2.php?theme=default&pid=2degreesinstitute%22%3E";
        script.async = true;
        document.getElementById("co2-widget-container").appendChild(script);

        const script2 = document.createElement('iframe');
        script2.src = "https://ourworldindata.org/grapher/annual-co-emissions-by-region";
        script2.async = true;
        script2.width = "1000px";
        script2.height = "400px";
        document.getElementById("average-total-co2").appendChild(script2);
      }, []);

    return (
        <div>
        <video className='videoTag' autoPlay loop muted>
            <source src={smoke} type='video/mp4' />
        </video>
        < MyLine />
        <BackHeader> 
            <Headername> Pollution Levels  </Headername>
        </BackHeader>
        <BackOfPage style={{ height: '80rem' }} />
        <div className='CO2thing' id="co2-widget-container" />
        <div className='CO2thing2' id="average-total-co2" /> 
        <MyContainer style={{ height: '26.7rem'}} />
        <MyContainer style={{ height: '26.7rem', marginTop: '52.9rem'}} />
        <MyContainer style={{ height: '21.6rem', marginTop: '80.4rem'}} />
        <TextContainer>
            <Textbox style={{ boxShadow:"5px 10px #353539" }} > Areas can become polluted by emissions from burning fossils, smoking and cooking. Some of these chemicals, when released into the air, contribute to smog and acid rain. Short term exposure to air pollution can irritate the eyes, nose and throat and cause upper respiratory infections, headaches, nausea and allergic reactions. Long-term exposures also can lead to significant climatic changes that can have far reaching negative impacts on food, water and ecosystems which can interun cause chronic respiratory disease, lung cancer, and heart disease. </Textbox>
            <Textbox style={{ boxShadow:"5px 10px #353539" }} > Smoke less, reduce your carbon-footprint, and use public transportation or carpool. Try exercising during off hours and avoid exercising outdoors during the most pollutant-heavy times of the day. Furthermore,  avoid eating out, especially junk and fast food. When dealing with the harmful effects of smog, oily & fatty foods can create additional levels of stress in your body. Take responsibility for your own trash; avoid using plastic bags and instead opt for brown paper packaging or your own bags for carrying groceries. Finally, invest in a good quality air purifier and more importantly, try cleaning in on a regular basis. </Textbox>
        </TextContainer>
        </div>
    )
}

export default Pollutionlevel

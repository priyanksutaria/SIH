import React, { useState } from "react";
import './Simulation.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import JobSim from "../assets/images/JobSimulation.jpeg"
import CourseSim from '../assets/images/CourseWorkSimulation.jpg'
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import data from '../utils/Accordian';
import data2 from '../utils/Accordian2'

const Simulation = () => {
    const [expandedItem, setExpandedItem] = useState(0);

    return (
        <div>
        <section className='v-wrapper'>
            <div className='paddings innerWidth flexCenter v-container'>
                <div className='v-left mar-right'>
                    <div className='image-container'>
                        <img src={CourseSim} alt="" width={"600px"} height={"500px"}/>
                    </div>
                </div>
                <div className='v-right flexColStart mar-left'>
                    <span className='orangeText'>Simulation</span>
                    <span className='primaryText'><span className="blue-text">Coursework</span> Simulation</span>
                    <span className='secondaryText'>
                    Our coursework simulation gives you a hands-on preview of the core subjects you'll tackle in your chosen career path.
                    </span>

                    <Accordion
                        className='accordion'
                        style={{ border: "none" }}
                        allowMultipleExpanded={false}
                        preExpanded={[expandedItem]} 
                    >
                        {data.map((item, i) => (
                            <AccordionItem key={i} uuid={i} className={`accordionItem ${i === expandedItem ? 'expanded' : 'collapsed'}`}>
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className='accordionButton flexCenter'
                                        onClick={() => setExpandedItem(i)} 
                                    >
                                        <div className='flexCenter icon'>{item.icon}</div>
                                        <span className='primaryText'>{item.heading}</span>
                                        <div className='flexCenter icon'>
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
        <section className='v-wrapper'>
        <div className='paddings innerWidth flexCenter v-container'>
            <div className='v-right flexColStart mar-right'>
                <span className='orangeText'>Simulation</span>
                <span className='primaryText'><span className="blue-text">Job </span>Simulation</span>
                <span className='secondaryText'>
                Our job simulation gives you a hands-on preview of the kind of tasks you'll face in the workplace, tailored to your chosen career path.
                </span>

                <Accordion
                    className='accordion'
                    style={{ border: "none" }}
                    allowMultipleExpanded={false}
                    preExpanded={[expandedItem]} 
                >
                    {data2.map((item, i) => (
                        <AccordionItem key={i} uuid={i} className={`accordionItem ${i === expandedItem ? 'expanded' : 'collapsed'}`}>
                            <AccordionItemHeading>
                                <AccordionItemButton
                                    className='accordionButton flexCenter'
                                    onClick={() => setExpandedItem(i)} 
                                >
                                    <div className='flexCenter icon'>{item.icon}</div>
                                    <span className='primaryText'>{item.heading}</span>
                                    <div className='flexCenter icon'>
                                        <MdOutlineArrowDropDown size={20} />
                                    </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <p className="secondaryText">
                                    {item.detail}
                                </p>
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className='v-left mar-left'>
                <div className='image-container'>
                    <img src={JobSim} alt=""  width={"600px"}/>
                </div>
            </div>
        </div>
    </section>
    </div>
    );
}

export default Simulation;

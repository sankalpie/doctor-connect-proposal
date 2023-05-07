import React from 'react';
import '../stylesheets/Schedule.css';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Schedule() {

    function displayPopup() {
        $(".biggerSch1").css('display', 'flex');
    }
    function closePopup() {
        $(".bigger").css('display', 'none');
    }
    function showTimeline1() {
        $(".timeline2").css('display', 'none');
        $(".timeline").css('display', 'block');
        // $(".popupButton1").css('color','black');
        // $('popupButton1').css('background-color','yellow')
        $(".popupButton1").css('background-color', 'rgb(120,204,236)');
        $(".popupButton2").css('background-color', 'white');
    }
    function showTimeline2() {
        $(".timeline").css('display', 'none');
        $(".timeline2").css('display', 'block');
        $(".popupButton2").css('color', 'black');
        $(".popupButton2").css('background-color', 'rgb(120,204,236)');
        $(".popupButton1").css('color', 'black');
        $(".popupButton1").css('background-color', 'white');
    }

    // const mode={
    //     mode_schedule:{
    //     backgroundColor:'white',
    //     color:'black',
    //     },
    //     mode_overview:{
    //         backgroundColor:'rgb(245, 119, 22)',
    //         color:'white'
    //     }
    // };

    return (
        <div>
            
            <div id="navbar">
                <ul>
                    <li style={{ flexGrow: 1 }}><a href="#logo"><img src={goqiicolorLogo} alt="LOGO" id="navlogo" /></a></li>
                    <li id="name" style={{ flexGrow: 18 }}>Doctor Connect</li>
                    <li style={{ float: 'right', flexGrow: 1 }}><a href="#logo" ><img src={personnav} alt="PIC" id="docpic" />Dr. As*** &#8964;</a></li>
                    <li style={{ float: 'right', flexGrow: 1 }}></li>
                </ul>
            </div>

            <div id="tabSelect">
                <Link  to='/' className="tabs tab1">Schedule</Link>
                <Link  to='/Overview' className="tabs tab2">Overview</Link>
                <Link to='/Patients' className="tabs tab3">Patients</Link>
            </div>
            

            <div id="mainContent">
                <div id="status">
                    <a id="sch" className="status">Scheduled...</a>
                    <a id="com" className="status">Completed</a>
                    <a id="mis" className="status">Missed</a>
                    <a id="can" className="status">Cancelled/Unsuccessful</a>
                    <a id="uns" className="status">Unsubscribed</a>
                    {/* <div id="planButton"> */}
                    <button className="work" onClick={displayPopup}>Working Plan & Breaks</button>
                    {/* </div> */}
                </div>
                <br />
                <div id="midButtons">
                    <div id="item1">
                        <button className="lNrButtons">&#60;</button>
                        <button className="lNrButtons">&#62;</button>
                        <button className="work">Today</button>
                    </div>
                    <div id="item2">
                        <h2 style={{ display: 'inline', color: 'gray' }}>February 3, 2023</h2>
                    </div>
                    <div id="item3">
                        <button className="work dateSelectors">day</button>
                        <button className="work dateSelectors">week</button>
                        <button className="work dateSelectors">month</button>
                    </div>
                </div>
                <div id="timeTable">
                    <table className="timeTable">
                        <tr>
                            <th id="addBorder">.</th>
                            <th>FRIDAY</th>
                        </tr>
                        <tr>
                            <td className="data1">all-day</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="data1">12am</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="data1">1am</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="data1">2am</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="data1">3am</td>
                            <td></td>
                        </tr>
                    </table>
                </div>
            </div>


            {/* popup on clicking the Working Plan and Breaks button */}
            <div className="bigger biggerSch1">
                <div className="popup">
                    <div className="topBar">
                        <h1 id="header1">Working Plan and Breaks <FontAwesomeIcon className="crossIcon" icon={faXmarkCircle} onClick={closePopup}/></h1>
                    </div>
                    {/* <br> */}
                    <div className="subButtons">
                        <button className="popupButtons work popupButton1" onClick={showTimeline1}>Working Plan</button>
                        <button className="popupButtons work popupButton2" onClick={showTimeline2}>Breaks</button>
                    </div>
                    <br />
                    <div className="timeline">
                        This will be your availablility for every day of the week (every Monday, Tuesday,... Sunday).
                        <br />
                        You can set your unavailability of any particular date in 'Breaks' section.

                        <div className="weekList">
                            <ol className="daysList">
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Monday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Tuesday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Wednesday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Thursday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Friday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Saturday</li> <br /> <br />
                                <li className="days"> <FontAwesomeIcon icon={faCirclePlus}/> Sunday</li> <br /> <br />
                            </ol>
                        </div>

                        Each time slot is fixed for 30 minutes. Ensure to have some time to prepare before your first time slot begins. <br />
                        Eg. If your appointment time slot is 12:30PM - 1:00PM, you will have to make the call at 12:30PM. Ensure to make necessary preparations for your call before 12:30PM
                        <br />
                    </div>

                    <div className="timeline2">
                        Set your unavailability of any particular date here.
                        <br />
                        Eg. If you had set your availablility on Fridays from 5:00PM to 8:00PM and can't be available on say, 13th March, 2015, from 7:15PM to 8:00PM, you can set it here.
                        <br />
                        <br />
                        <div className="inputs" style={{ display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', paddingBottom: '10px' }}>

                            <div className="entry1">
                                <label for="date"><b>Date:</b></label>
                                <br />
                                <input type="date" id="date" />
                            </div>

                            <div className="entry2">
                                <label for="start"><b>Break Starts From:</b></label>
                                <br />
                                <input type="time" id="start" />
                            </div>

                            <div className="entry3">
                                <label for="end"><b>Break Ends At:</b></label>
                                <br />
                                <input type="time" id="end" />
                            </div>


                        </div>
                    </div>
                    <button className="work closeButton" onClick={closePopup}>Close</button>
                </div>
            </div>
        </div>

    )
}

export default Schedule
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../stylesheets/GoalsHabits.css';
import '../stylesheets/Profile.css';
import '../stylesheets/AllExceptGoalsHabits.css';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';

function HeartRate() {
    let i = 0;
    function showCoachStatus() {

        if (i % 2 == 0) {
            $('.coachStatus').css('display', '');
            $('.coachChat').css('display', 'none');
            i++;
        }
        else {
            $('.coachStatus').css('display', 'none');
            $('.coachChat').css('display', '');
            i++;
        }
    }
    {/** */ }
    const options_HEART =
    {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height:300,

        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2 to 27'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2
            }

        },

        series: [
            {
                name: '',
                data: [24, 37, 29, 29, 32, 30,
                    38, 36, 33, 34, 31]
            },
            // {
            //     name: 'Sales & Distribution',
            //     data: [11744, 30000, 16005, 19771, 20185, 24377,
            //         32147, 30912, 29243, 29213, 25663]
            // }, 
            // {
            //     name: 'Operations & Maintenance',
            //     data: [null, null, null, null, null, null, null,
            //         null, 11164, 11218, 10077]
            // }, 
            // {
            //     name: 'Other',
            //     data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
            //         17300, 13053, 11906, 10073]
            // }
        ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500,

                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }

                }
            }]
        }
    }
    {/** */ }

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
                <Link to='/' className="tabs tab1 schSch2">Schedule</Link>
                <Link to='/Overview' className="tabs tab2">Overview</Link>
                <Link to='/Patients' className="tabs tab3 patSch2">Patients</Link>
            </div>

            <div id="numberAndTest">
                <p style={{ fontSize: '15px' }}><b>XXXXXXXX</b></p>
                <button id="thyrocareButton"><b>Thyrocare Test</b></button>
            </div>

            <div id="tabsContainer" className='tabsContainer'>
                <div id="appopintmentTabs" className='appointmentTabs'>
                    <Link to='/AppointmentInfo' className="appointmentButtons currentAppointmentInfo appointmentTab">Current Appointment Info</Link>
                    <Link to='/GoalsHabits' className="appointmentButtons profileInfo" style={{backgroundColor:'white',borderTop:'2px solid orange'}}>Profile</Link>
                    <Link to='/Insights' className="appointmentButtons insightsInfo">Insights</Link>
                    <a href="#" className="appointmentButtons coachNotesInfo">Coach Notes</a>
                    <a href="#" className="appointmentButtons questionnaireInfo">Questionnaire</a>
                    <a href="#" className="appointmentButtons goalsNHabitsInfo">Goals & Habits</a>
                    <a href="#" className="appointmentButtons lastAppointmentButton healthTestsInfo">Health Tests</a>
                </div>
            </div>

            {/*<div id="tabsContainer" className='tabsContainer'>
                <div id="appopintmentTabs" className='appointmentTabs'>
                    <a href="./profile_goals_habits.html" className="appointmentButtons subGoalsNHabitsInfo" style={{ color: 'black', backgroundColor: 'white', borderTop: '2px solid orange' }}>Goals & Habits</a>
                    <a href="./profile_activity_logs.html" className="appointmentButtons subAcivityInfo">Activity Logs</a>
                    <a href="./profile_hydration.html" className="appointmentButtons subHydrationLogsInfo">Hydration & Nutrition Logs</a>
                    <a href="./profile_sleep_monitoring.html" className="appointmentButtons subSleepInfo">Sleep Monitoring</a>
                    <a href="./profile_heartrate.html" className="appointmentButtons subHeartRateInfo">Heart Rate</a>
                    <a href="./profile_spoTwo.html" className="appointmentButtons subSPO2Info">SPO2</a>
                    <a href="./profile_ECG.html" className="appointmentButtons lastAppointmentButton subECGInfo">ECG</a>
                </div>
            </div>*/}

            <div id="mainContent" className='mainGoal' style={{ backgroundColor: 'white', }}>

                <div className="photoNstats" style={{ display: 'flex', flexDirection: 'row' }}>
                    <img id="profilePic" src={personnav} alt="Profile Photo" />
                    <ol className='bioData'>
                        <li> DOB: 30 July 1974</li> <br />
                        <li>Gender: male</li> <br />
                        <li>H:165 W:85</li> <br />
                        <li>City:Bengaluru</li> <br />
                        <li>Country:India</li> <br />
                        <li><b>Goals</b>:1 <b>Habits</b>:11</li>
                    </ol>
                </div>

                <hr />

                <div id="wrapper">
                    <div id="tabsContainer" className='tabsContainer'>
                        <div id="appopintmentTabs" className='appointmentTabs'>
                            <Link to='/GoalsHabits' className="appointmentButtons currentAppointmentInfo goalsTab" >Goals & Habits</Link>
                            <Link to='/ActivityLogs' className="appointmentButtons profileInfo">Activity Logs</Link>
                            <Link to='/HydrationNutrition' className="appointmentButtons insightsInfo">Hydration & Nutrition Logs</Link>
                            <Link to='/SleepMonitoring' className="appointmentButtons coachNotesInfo">Sleep Monitoring</Link>
                            <Link to='/HeartRate' className="appointmentButtons questionnaireInfo" style={{backgroundColor:'white',borderTop:'2px solid orange'}}>Heart Rate</Link>
                            <Link to='/SPO2' className="appointmentButtons goalsNHabitsInfo">SPO2</Link>
                            <Link to='/ECG' className="appointmentButtons lastAppointmentButton healthTestsInfo">ECG</Link>
                        </div>
                    </div>
                </div>

                <div id="subContent">
                    <div id="leftContent">
                        <HighchartsReact highcharts={Highcharts} options={options_HEART} />
                    </div>
                    <div id="rightContent">
                        <div className="testing" style={{ justifySelf: 'center', alignSelf: 'center', }}>
                            <button id="interactionButton" onClick={showCoachStatus} ><b>Coach Interaction</b></button>
                        </div>

                        <div className="coachChat">

                            <h4 style={{ TextAlign: 'center' }}>Load more before 4 March, 2023</h4>
                            <p style={{ marginLeft: '10px' }}>March 3, 2023</p>

                            <table id="rightTable">
                                <tr>
                                    <td className="sentBy">Coach</td>
                                    <td className="chatContent">Hello Prashant, I have spoken to my team and we can offer you a discount of Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam fugit sapiente molestias. Vel, esse repellat? Laudantium dolorum sapiente magni!
                                        <br /><p style={{ FontSize: '15px', float: 'right', margin: '0px', padding: '0px' }}>Sent:2:51pm Read:2:51pm</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Coach</td>
                                    <td className="chatContent">Hello Prashant, I have spoken to my team and we can offer you a discount of Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores aperiam fugit sapiente molestias. Vel, esse repellat? Laudantium dolorum sapiente magni!
                                        <br /><p style={{ fontSize: '15px', float: 'right', margin: '0px', padding: '0px' }}>Sent:2:51pm Read:2:51pm</p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div className="coachStatus" style={{ display: 'none' }}>
                            <br />
                            <select name="filter" id="filter" style={{ float: 'right', width: '300px' }}>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                            <h4 style={{ textAlign: 'left', marginLeft: '20px' }}>4 March, 2023</h4>
                            <p style={{ marginLeft: '20px' }}>3 Logs</p>
                            <ol style={{ fontSize: '16px' }}>
                                <li>
                                    <FontAwesomeIcon className="fa-solid fa-droplet" icon={faDroplet}></FontAwesomeIcon> ****anth had 3 glasses of water
                                </li> <br />
                                <li>
                                    <FontAwesomeIcon className="fa-solid fa-droplet" icon={faDroplet}></FontAwesomeIcon> ****anth had 3 glasses of water
                                </li> <br />
                                <li>
                                    <FontAwesomeIcon className="fa-solid fa-droplet" icon={faDroplet}></FontAwesomeIcon> ****anth had 3 glasses of water
                                </li> <br />
                            </ol>
                            <br />
                            <h4 style={{ textAlign: 'left', marginLeft: '20px' }}>4 March, 2023</h4>
                            <p style={{ marginLeft: '20px' }}>3 Logs</p>
                            <ol style={{ fontSize: '16px' }}>
                                <li>
                                    <i className="fa-solid fa-droplet"></i> ****anth had 3 glasses of water
                                </li> <br />
                                <li>
                                    <i className="fa-solid fa-droplet"></i> ****anth had 3 glasses of water
                                </li> <br />
                                <li>
                                    <i className="fa-solid fa-droplet"></i> ****anth had 3 glasses of water
                                </li> <br />
                            </ol>
                        </div>
                    </div>
                </div>

                <br /><br />
            </div>
        </div>
    )
}

export default HeartRate
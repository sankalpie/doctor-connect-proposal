import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import '../stylesheets/Schedule2.css';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVcard } from '@fortawesome/free-regular-svg-icons';
// import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Link } from 'react-router-dom';
// getting the width if the screen
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}


function Schedule2() {

    const { height, width } = useWindowDimensions();

    function closePopup() {
        $(".bigger").css('display', 'none');
        // console.log("Close is working");
    }
    function showPopup() {
        // $(".bigger").css('display', 'flex');
        // console.log("Show is working");
        $(".bigSch2").css('display', 'flex');
        // console.log(typeof width);
    }
    {/** */ }

    {/** */ }
    {/** */ }
    const options_HRA = {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height: 250,
            // width:290,
        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        //     align: 'left'
        // },

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
            // {
            //     name: 'Installation & Developers',
            //     data: [43934, 48656, 65165, 81827, 112143, 142383,
            //         171533, 165174, 155157, 161454, 154610]
            // }, 
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

    };
    {/** */ }
    const options_HBA1C = {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height: 250,
            width:290
        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        //     align: 'left'
        // },

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
            // {
            //     name: 'Installation & Developers',
            //     data: [43934, 48656, 65165, 81827, 112143, 142383,
            //         171533, 165174, 155157, 161454, 154610]
            // }, 
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
    const options_GLUCOSE = {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height: 250,
            width:290
        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        //     align: 'left'
        // },

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
            // {
            //     name: 'Installation & Developers',
            //     data: [43934, 48656, 65165, 81827, 112143, 142383,
            //         171533, 165174, 155157, 161454, 154610]
            // }, 
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
    const options_STEPS = {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height: 250,
            width:290
        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        //     align: 'left'
        // },

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
            // {
            //     name: 'Installation & Developers',
            //     data: [43934, 48656, 65165, 81827, 112143, 142383,
            //         171533, 165174, 155157, 161454, 154610]
            // }, 
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
    var options_SLEEP = {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height: 250,
            width:290
        },

        title: {
            text: 'HRA',
            align: 'left',
            style: {
                fontSize: '10px',
                fontWeight: 'bold'
            }
        },

        // subtitle: {
        //     text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        //     align: 'left'
        // },

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
            // {
            //     name: 'Installation & Developers',
            //     data: [43934, 48656, 65165, 81827, 112143, 142383,
            //         171533, 165174, 155157, 161454, 154610]
            // }, 
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

            <div id="tabsContainer">
                <div id="appopintmentTabs">
                    <Link to='/AppointmentInfo' className="appointmentButtons currentAppointmentInfo">Current Appointment Info</Link>
                    <Link to='/GoalsHabits' className="appointmentButtons profileInfo">Profile</Link>
                    <Link to='/Insights' className="appointmentButtons insightsInfo">Insights</Link>
                    <a href="#" className="appointmentButtons coachNotesInfo">Coach Notes</a>
                    <a href="#" className="appointmentButtons questionnaireInfo">Questionnaire</a>
                    <a href="#" className="appointmentButtons goalsNHabitsInfo">Goals & Habits</a>
                    <a href="#" className="appointmentButtons lastAppointmentButton healthTestsInfo">Health Tests</a>
                </div>
            </div>

            <div id="mainContent mainSch2" className='masterBox' style={{}}>
                <div className="LeftHalf" style={{}}>
                    <div className="doctorWrapper">
                        <div id="doctorProfile" style={{ paddingBottom: '30px', width: '90%' }}>
                            <p><img src={personnav} alt="Profile Pic" className="profilePic" /></p>
                            <br />
                            <p className="number"><b>XXXXXXXX</b></p>
                            <p><FontAwesomeIcon className="fa-solid fa-phone" icon={faPhone} style={{ color: 'rgb(24, 153, 24)', fontSize: '25px' }}></FontAwesomeIcon></p>
                            <p style={{ marginTop: '0px' }}>&#x2304;</p>
                            <p><button id="joinMeeting">Join Using Microsoft Teams</button></p>
                            <p className="number">Disposition</p>
                            <div id="optionsContainer">
                                <select id="options" name="dispositions">
                                    <option value="Option1">Option1</option>
                                    <option value="Option2">Option2</option>
                                    <option value="Option3">Option3</option>
                                    <option value="Option4">Option4</option>
                                </select>
                            </div>
                            <br />

                            <input type="text" name="text" id="text" className="textSpace" cols="72" rows="5" style={{ height: '40px' }} />


                            <p><button id="joinMeeting">Save and Activate Profile</button></p>

                            <div className="coachExpert" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', lineHeight: '2px', textAlign: 'center', backgroundColor: 'rgb(248,244,244)' }}>
                                <div className="coach">
                                    <p><b>Coach</b></p>
                                    <br />
                                    <p>Sharavai Ghanekar</p>
                                    <br />
                                    <FontAwesomeIcon className="fa-solid fa-phone" icon={faPhone} style={{ color: 'rgb(24, 153, 24)' }}></FontAwesomeIcon>
                                </div>

                                <div className="expert">
                                    <p><b>Expert</b></p>
                                    <br />
                                    <p>Ridhi Dhawan</p>
                                    <br />
                                    <FontAwesomeIcon className="fa-solid fa-phone" icon={faPhone} style={{ color: 'rgb(24, 153, 24)' }}></FontAwesomeIcon>
                                </div>
                            </div>
                            <br />
                            <div className="charts">
                                <div >
                                    <HighchartsReact highcharts={Highcharts} options={options_HRA} id="HRA" />
                                </div>

                                <div id="goals">
                                    <p><b>GOALS</b></p>
                                    <ol style={{ listStyleType: 'none', textAlign: 'left', lineHeight: '30px' }}>
                                        <li><FontAwesomeIcon className="fa-solid fa-circle-right" icon={faCircleArrowRight}></FontAwesomeIcon>Prevent/Control Illness</li> <br />
                                        <li><FontAwesomeIcon className="fa-solid fa-circle-right" icon={faCircleArrowRight}></FontAwesomeIcon>Prevent/Control Illness</li>

                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="upcomingAppointment" style={{ width: '90%' }}>
                        <p className="header"><FontAwesomeIcon className="fa-regular fa-calendar" icon={faCalendar} style={{ marginRight: '5px' }}></FontAwesomeIcon>Upcoming Appointments</p>
                        <p className="header">Not Available</p>
                        <hr id="horizontalRule" />
                        <p className="header" style={{ textAlign: 'left' }}><i className="fa-solid fa-phone" style={{ color: 'rgb(24, 153, 24)', marginRight: '5px' }}></i>Concern</p>
                        <ol style={{ listStyleType: 'disc', marginLeft: '20px' }}>
                            <li>Need some advice as to how I can keep upto date with my Vitamin D levels</li>
                        </ol>
                        <br />
                    </div>

                </div>

                <div className="rightHalf" style={{}}>
                    <div id="lastAppointAndStats" style={{ width: '100%' }}>
                        <br />
                        <p className="header"><FontAwesomeIcon className="fa-regular fa-calendar" icon={faCalendar} style={{ marginRight: '5px' }}></FontAwesomeIcon>Last Appointments</p>
                        <div id="appointmentTable">
                            <table className="lastAppointments" style={{ width: '100%' }}>
                                <tr id="firstRow">
                                    <th>DATE</th>
                                    <th>APPOINTMENT REASON</th>
                                    <th>APPOINTMENT STATUS</th>
                                    <th>RECOMMENDATIONS</th>
                                </tr>
                                <tr>
                                    <td>06 Dec 2022 9:25pm</td>
                                    <td>Weakened immune system</td>
                                    <td>Unsuccessful</td>
                                    <td>-Dr. As**** </td>
                                </tr>

                            </table>
                            <button id="joinMeeting" className="showTrends" style={{ marginTop: '30px' }} onClick={showPopup}>Show Trends</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bigger bigSch2">
                <div id="popup" className='popSch2'>
                    <div id="stats">
                        <button className="statsButton statsButtonFirst"><b>Last HbA1c<br />6.3<br />08 Aug 2023</b></button>
                        <button className="statsButton"><b>BMI<br />23.1<br />14 Dec 2022</b></button>
                        <button className="statsButton"><b>Steps<br />2648<br />03 Feb 2023</b></button>
                        <button className="statsButton statsButtonLast"><b>Sleep<br />7<br />03 Feb 2023</b></button>
                    </div>


                    <div id="TREND" style={{ marginLeft: '10px', marginRight: '10px' }}>
                        <br />
                        <div id="TREND1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', flexWrap: 'wrap' }}>
                            <div >
                                <HighchartsReact highcharts={Highcharts} options={options_HBA1C} id="HBA1C" />
                            </div>
                            <div >
                                <HighchartsReact highcharts={Highcharts} options={options_GLUCOSE} id="GLUCOSE" />
                            </div>
                        </div>
                        <br />
                        <div id="TREND2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', flexWrap: 'wrap' }}>
                            <div >
                                <HighchartsReact highcharts={Highcharts} options={options_STEPS} id="STEPS" />
                            </div>
                            <div>
                                <HighchartsReact highcharts={Highcharts} options={options_SLEEP} id="SLEEP" />
                            </div>
                        </div>
                        <br />
                    </div>
                    <button id="joinMeeting" className="closeTrends" style={{ float: 'right', backgroundColor: 'red' }} onClick={closePopup}>Close</button>
                </div>

            </div>
        </div>
    )
}

export default Schedule2
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import '../stylesheets/Schedule2.css';
import '../stylesheets/Insights.css';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
import { Link } from 'react-router-dom';


function Insights() {

    const options_leftTop=
    {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'column',
            height:300,
        },

        title: {
            text: 'HRA',
            align: 'left',
            style:{
                fontSize:'10px',
                fontWeight:'bold'
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

    const options_rightTop=
    {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'line',
            height:300,
        },

        title: {
            text: 'HRA',
            align: 'left',
            style:{
                fontSize:'10px',
                fontWeight:'bold'
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

    const options_leftBottom=
    {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'bar',
            height:300,
        },

        title: {
            text: 'HRA',
            align: 'left',
            style:{
                fontSize:'10px',
                fontWeight:'bold'
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

    const options_rightBottom=
    {
        chart: {
            backgroundColor: 'rgb(248,244,244)',
            type: 'column',
            height:300,
        },

        title: {
            text: 'HRA',
            align: 'left',
            style:{
                fontSize:'10px',
                fontWeight:'bold'
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
                    <Link to='/AppointmentInfo' className="appointmentButtons currentAppointmentInfo appointmentTab">Current Appointment Info</Link>
                    <Link to='/GoalsHabits' className="appointmentButtons profileInfo">Profile</Link>
                    <Link to='/Insights' className="appointmentButtons insightsInfo" style={{ backgroundColor: 'white', borderTop: '2px solid orange' }}>Insights</Link>
                    <a href="#" className="appointmentButtons coachNotesInfo">Coach Notes</a>
                    <a href="#" className="appointmentButtons questionnaireInfo">Questionnaire</a>
                    <a href="#" className="appointmentButtons goalsNHabitsInfo">Goals & Habits</a>
                    <a href="#" className="appointmentButtons lastAppointmentButton healthTestsInfo">Health Tests</a>
                </div>
            </div>

            <div id="TREND" style={{ marginLeft: '10px', marginRight: '10px', backgroundColor: 'white' }}>
                <br />
                <div id="TREND1" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', flexWrap: 'wrap' }}>
                    <div id="leftTop" style={{ marginBottom: '12px', marginLeft: '5px', marginRight: '5px' }}>
                        <HighchartsReact highcharts={Highcharts} options={options_leftTop} />
                    </div>
                    <div id="rightTop" style={{ marginLeft: '5px', marginRight: '5px' }}>
                        <HighchartsReact highcharts={Highcharts} options={options_rightTop} />
                    </div>
                </div>
                <br />
                <div id="TREND2" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', flexWrap: 'wrap' }}>
                    <div id="leftBottom" style={{ marginBottom: '12px', marginLeft: '5px', marginRight: '5px' }}>
                        <HighchartsReact highcharts={Highcharts} options={options_leftBottom} />
                    </div>
                    <div id="rightBottom" style={{ marginLeft: '5px', marginRight: '5px' }}>
                        <HighchartsReact highcharts={Highcharts} options={options_rightBottom} />
                    </div>
                </div>
                <br />
            </div>
        </div>
    )
}

export default Insights
import React from 'react';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
// import $ from 'jquery';
import '../stylesheets/Overview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Overview() {
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
                <Link  to='/' className="tabs tab1 sch">Schedule</Link>
                <Link to='/Overview' className="tabs tab2 ovw">Overview</Link>
                <Link to='/Patients' className="tabs tab3">Patients</Link>
            </div>
            
            

            <div id="mainContent" style={{paddingBottom:'0px',}}>

                <div id="heading">
                    <h2 className="left-margin">Appointment Reports</h2>
                </div>

                <div id="totals">
                    <button className="twoButtons"> <FontAwesomeIcon className='phoneIcon' icon={faPhone}/> <div><div className="twoButtonsContainer"><b>325</b></div><div className="twoButtonsText">Total Patients</div></div></button>
                    <button className="twoButtons"> <FontAwesomeIcon className='phoneIcon' icon={faPhone}/> <div><div className="twoButtonsContainer"><b>254</b></div><div className="twoButtonsText">Total Appointments</div></div></button>
                </div>

                <div id="appopintmentTabs">
                    <a href="#" className="appointmentButtons">Upcoming Appointments</a>
                    <a href="#" className="appointmentButtons">Completed Appointments</a>
                    <a href="#" className="appointmentButtons">Missed Appointments</a>
                    <a href="#" className="appointmentButtons lastAppointmentButton">All Appointments</a>
                </div>

            </div>

            <div id="entriesSearch">
                <table style={{ width: '100%', borderCollapse: 'collapse' }} className='overviewTable'>
                    <tr>
                        <td className="SearchTableData">
                            <label className="labels" for="search" style={{ width: '5%' }}><b>Search: </b></label><br />
                            <input type="text" id="search" name="search" style={{ width: '100%', marginBottom: '10px' }} />
                        </td>
                        <td className="SearchTableData">
                            <label className="labels" for="search" style={{ width: '5%' }}><b>Start Date: </b></label><br />
                            <input type="text" id="search" name="search" style={{ width: '100%', marginBottom: '10px' }} />
                        </td>
                        <td className="SearchTableData">
                            <label className="labels" for="search" style={{ width: '5%' }}><b>End Date: </b></label><br />
                            <input type="text" id="search" name="search" style={{ width: '100%', marginBottom: '10px' }} />
                        </td>
                        <td className="SearchTableData"><button className="searchButton">Search</button></td>
                        <td className="SearchTableData"><button className="exportButton">Export</button></td>
                    </tr>
                </table>
            </div>

            <div id="mainTable">
                <table className="playerTable">
                    <tr className="firstRow">
                        <th>SR. NO.</th>
                        <th>PLAYER NAME</th>
                        <th>PLAYER ID</th>
                        <th>APPOINTMENT ON</th>
                        <th>STATUS</th>
                        <th>RATING</th>
                    </tr>
                    <tr>
                        <td className="mainData">1</td>
                        <td className="mainData">********rana</td>
                        <td className="mainData">5546009</td>
                        <td className="mainData">23 Jan 2023</td>
                        <td className="mainData">completed</td>
                        <td className="mainData">0</td>
                    </tr>
                    <tr>
                        <td className="mainData">1</td>
                        <td className="mainData">********rana</td>
                        <td className="mainData">5546009</td>
                        <td className="mainData">23 Jan 2023</td>
                        <td className="mainData">completed</td>
                        <td className="mainData">0</td>
                    </tr>
                    <tr>
                        <td className="mainData">1</td>
                        <td className="mainData">********rana</td>
                        <td className="mainData">5546009</td>
                        <td className="mainData">23 Jan 2023</td>
                        <td className="mainData">completed</td>
                        <td className="mainData">0</td>
                    </tr>
                    <tr>
                        <td className="mainData">1</td>
                        <td className="mainData">********rana</td>
                        <td className="mainData">5546009</td>
                        <td className="mainData">23 Jan 2023</td>
                        <td className="mainData">completed</td>
                        <td className="mainData">0</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Overview
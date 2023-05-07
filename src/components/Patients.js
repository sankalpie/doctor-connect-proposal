import React from 'react';
import goqiicolorLogo from '../assets/goqiicolorLogo.png';
import personnav from '../assets/personnav.png';
// import $ from 'jquery';
import '../stylesheets/Patients.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Patients() {
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
                <Link to='/' className="tabs tab1 sch">Schedule</Link>
                <Link to='/Overview' className="tabs tab2 ovw2">Overview</Link>
                <Link to='/Patients' className="tabs tab3 pat">Patients</Link>
            </div>


            <div id="heading">
                <h2 className="left-margin">Patient List</h2>
            </div>

            <div id="entries_search" style={{ marginLeft: '20px', marginRight: '20px', backgroundColor: 'white', marginBottom: '0px' }}>
                <table style={{ width: '100%' }}>
                    <tr>
                        <td style={{ width: '50%' }}><label htmlFor="size"><b>Show</b></label>
                            <select name="size" id="size">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                            <b>entries</b>
                        </td>
                        <td style={{ width: '25%', backgroundColor: 'white' }}>
                            <label htmlFor="search" style={{ width: '5%' }}><b>Search: </b></label><br />
                            <input type="text" id="search" name="search" style={{ width: '75%', marginBottom: '5px' }} />
                        </td>
                    </tr>
                </table>
    </div> 

            {/*<!-- <br> -->*/ }

            <div id="patientTable">
                <table className="maintable tabletag patientTable">
                    <tr className="maintable firstrow">
                        <th style={{width:'24%'}} id="thead1">Patient Name</th>
                        <th style={{width:'20%'}} id="thead2">Last Appointment Date</th>
                        <th id="thead3">Coached By</th>
                        <th id="thead4">Health Goal</th>
                    </tr>
                    <tr className="maintable">
                        <td style={{cursor:'pointer'}}><img src={personnav} alt="PIC" className="personpic"/><Link to='/AppointmentInfo' style={{textDecoration: 'none',color:'black'}}> **************stha</Link> </td>
                        <td>Feb 03,2023</td>
                        <td>Riddhi Shah</td>
                        <td>fat loss, reduce stress</td>
                    </tr>
                    <tr className="maintable">
                        <td style={{cursor:'pointer'}}><img src={personnav} alt="PIC" className="personpic"/><Link to='/AppointmentInfo' style={{textDecoration: 'none',color:'black'}}> **************stha </Link> </td>
                        <td>Feb 03,2023</td>
                        <td>Riddhi Shah</td>
                        <td>fat loss, reduce stress</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Patients
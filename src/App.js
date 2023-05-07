import './App.css';
import Schedule from './components/Schedule';
import Overview from './components/Overview';
import Patients from './components/Patients';
import Schedule2 from './components/Schedule2';
import GoalsHabits from './components/GoalsHabits';
import ActivityLogs from './components/ActivityLogs';
import HydrationNutrition from './components/HydrationNutrition';
import SleepMonitoring from './components/SleepMonitoring';
import HeartRate from './components/HeartRate';
import SPO2 from './components/SPO2';
import ECG from './components/ECG';
import Insights from './components/Insights';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      
      <Routes>
        <Route path='/' element={<Schedule/>} />
        <Route path='/Overview' element={<Overview />} />
        <Route path='/Patients' element={<Patients />}/>
        <Route path='/AppointmentInfo' element={<Schedule2 />}/>
        <Route path='/GoalsHabits' element={<GoalsHabits />}/>
        <Route path='/ActivityLogs' element={<ActivityLogs />}/>
        <Route path='/HydrationNutrition' element={<HydrationNutrition />}/>
        <Route path='/SleepMonitoring' element={<SleepMonitoring />}/>
        <Route path='/HeartRate' element={<HeartRate />}/>
        <Route path='/SPO2' element={<SPO2 />}/>
        <Route path='/ECG' element={<ECG />}/>
        <Route path='/Insights' element={<Insights/>}/>
      </Routes>


    </div>
  );
}

export default App;

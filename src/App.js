import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Skill from './components/Skill';
import Education from './components/Education';
import Experience from './components/Experience';
import Award from './components/Award';
import Volunteer from './components/Volunteer';
import Certification from './components/Certification';
import ActivitiesAndTraining from './components/ActivitiesAndTraining';
import Projects from './components/Projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <div className='content' style={{ padding: '0 20px',  backgroundColor: '#f9f9f9',}}>
   <Header/>
      <Skill/>
      <Education/>
      <Experience/>
      <Award/>
      <Volunteer/>
    <Certification/>
<ActivitiesAndTraining/>
<Projects/>
   </div>
     
    </div>
  );
}

export default App;

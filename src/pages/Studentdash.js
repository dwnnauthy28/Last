// import './App.css';
import { Dashstudent } from '../components/Dashstudent';
import  Header  from '../components/Header';
import BasicTable2 from '../components/BasicTable2';

function Student() {
  return (
    <div className="App">
      <Header />
      <Dashstudent/>
      <BasicTable2 />
    </div>
  )
}

export default Student;
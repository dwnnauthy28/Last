import './App.css';
import { Dashstudent } from './components/Dashstudent';
import { Header } from './components/Header';
import BasicTable from './components/BasicTable';

function Studentdash() {
  return (
    <div className="App">
      <Header />
      <Dashstudent />
      <BasicTable />
    </div>
  )
}

export default Studentdash;

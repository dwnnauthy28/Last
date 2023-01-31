
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Dashadminn } from '../components/Dashadmin';
import BasicTable from '../components/BasicTable';

const Admindash = () => {
    return(
        <div >
            <Header />
            <Dashadminn/>
            <BasicTable/>
            <Footer />
        </div>
    )
}

export default Admindash;
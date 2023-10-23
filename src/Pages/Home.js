import Navbar from '../Components/Navbar.js';
import Header from '../Components/Header.js';
import './Home.css';
import Featured from '../Components/Featured.js';
import PropertyList from '../Components/PropertyList.js';
import FeaturedProperties from '../Components/FeaturedProperties.js';
import MailList from '../Components/MailList.js';
import Footer from '../Components/Footer.js';
function Home()
{
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <div className='homeContainer'>
               <Featured/>
               <h1 className='homeTitle'>Browse By Property Type</h1>
               <PropertyList/>
               <h1 className='homeTitle'>Home guests love</h1>
               <FeaturedProperties/>
               <MailList/>
               <Footer/>
            </div>
        </div>
    )
}

export default Home;
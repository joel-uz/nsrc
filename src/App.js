import './App.css';
import PartPage from './part';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import InfoIcon from '@mui/icons-material/Info';
import Fab from "@mui/material/Fab";
import Venue from './venue';
import Footer from './footer';
import DetailsPage from './details';
import Navbar from './navbar';
import TimeLine from './timeline';
import Hero from './hero';
import Glimpse from './short_para';

function App() {

  const handleClick = () => {
    window.scrollTo(0, 0);   
  }

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Glimpse/>
      <TimeLine/>
      <DetailsPage/>
      <Venue/>
      <PartPage />
      <div className='floating' onClick={handleClick}>
        <Fab style={{color:"#79f23f"}}>
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </div>
      <div className='floating-left'>
        <Fab style={{color:"black", fontSize:"5px"}} >
          <InfoIcon />
        </Fab>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

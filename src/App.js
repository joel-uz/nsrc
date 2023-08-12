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

function App() {
  return (
    <div className="App">
      <TimeLine/>
      <DetailsPage/>
      <Venue/>
      <PartPage />
      <div className='floating'>
        <Fab style={{color:"#79f23f"}} >
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

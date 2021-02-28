import logo from './logo.svg';
import './App.css';
import cardone from './components/card1.jpg'
import cardtwo from './components/card2.jpg'
import cardthree from './components/card3.jpg'
import cardfour from './components/card4.jpg'
import cardfive from './components/card5.jpg'
import cardsix from './components/card6.jpg'
import Heading from './components/heading';
import Cont from './components/cont'
import Itemcard from './components/itemcard'
import Secone from './components/secone';
import Sectwo from './components/sectwo';
import Quote from './components/quote'
import Footersec from "./components/footersec";
import Centerimg from "./components/centerimg.jpeg"
function App() {
  return (
    <div className="App" style={{overflowX:"hidden",backgroundColor:"#fffef2"}}>
      <Heading />
      <Cont />
      <div class="row align-items-center justify-content-center" 
      style={{backgroundColor:"#fffef2",marginTop:"30px", alignContent:"center"}}>
      <Itemcard
      ftext="Tacit Eau de Parfum"
      stext="Crisp ,green ,citrus fragrance"
      imgsrc={cardone} />
      <Itemcard 
      ftext="Rōzu Eau de Parfum"
      stext="Floral, green and woody"
      imgsrc={cardtwo}/>
      <Itemcard 
      ftext="Hwyl Eau de Parfum"
      stext="An intriguing scent; a hint of eccentricity"
      imgsrc={cardthree}/>
      </div>
      <br></br>
      <img src={Centerimg} style={{width:"1349px",margin:"30px 0"}}></img>
      <div class="row align-items-center justify-content-center" 
      style={{backgroundColor:"#fffef2",marginTop:"30px", marginLeft:"75px"}}>
      <Itemcard
      ftext="Shine Hair & Beard Oil"
      stext="Imparts lustre without oily residue"
      imgsrc={cardfour} />
      <Itemcard 
      ftext="Rose Hair & Scalp Moisturizing Masque"
      stext="Maintain scalp and hair in peak condition"
      imgsrc={cardfive}/>
      <Itemcard 
      ftext="Violet Leaf Hair Balm"
      stext="Creamy shaping and conditioning balm"
      imgsrc={cardsix}/>
      <hr></hr>
      </div>  
      <Secone />
      <Sectwo />
      <Quote />
      <Footersec />
    </div>
    
  );
}

export default App;

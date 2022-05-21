import './App.css';
import nft from "./images/image-equilibrium.jpg"
import eth from "./images/icon-ethereum.svg"
import clock from "./images/icon-clock.svg"
import creator from "./images/image-avatar.png"

function App() {
  return (
    <div className="App">
        <div className="Card">
        <img className="nft" src={nft} alt="nft"/>
        <div className="CardHover">
        <div className="fondoImg"></div>
        </div>
        

        <h1 className="hovertextos">Equilibrium #3429</h1>
        
        <p className="Description">Our Equilibrium collection promotes balance and calm.</p>
      
      <div className="Stats">
        <div className="eth">
          <img src={eth} alt="eth"/>
          <p className="Quantity">0.041 ETH</p>
        </div>
        <div className="clock">
          <img src={clock} alt="clock"/>
          <p className="TimeLeft">3 days left</p>
        </div>
      </div>
        
        <div className="Creator">
          <img src={creator} alt="Jules Wyvern"/>
          <p>Creation of </p><p className="hovertextos" id="name">Jules Wyvern</p>
        </div>
      </div>
      <div className="attribution">
      Challenge by <a rel="noreferrer" href="https://www.frontendmentor.io/profile/speedbuild98" target="_blank">Frontend Mentor</a>. 
      Coded by <a rel="noreferrer" href="https://devgallardo.netlify.app/">GALLARDO</a>.
      </div>
    </div>
  );
}

export default App;

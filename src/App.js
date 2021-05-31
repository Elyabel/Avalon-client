import { Game } from './Menu/Game';
import './StyleSheets/style.css';
import './Menu/Componants/Game/Client/Core';

function App() {
  return (
    <div className="App" >
      <div id="overlays" style={{display: "none"}}>
        <Game />
      </div>

      <div id="div_lb">
							<div className="header">Leaderboard</div>
							<div id="lb_detail"></div>
			</div>

      <div className="chat">

        <div className="chat-content">

          <b><div className="chat-messages"></div></b>

        </div>

        <input className="chat-input" id="chat_textbox" maxLength="200" placeholder="Press enter to chat..."></input>

      </div>


      <div className="stats">

      <div className="stats-column">

        <b><li className="stats-row stats-mass"></li></b>

      </div>

    </div>

      <div id="connecting">
        <div id="connecting-content">
          <h2>Connecting...</h2>
          <p> If you cannot connect to the servers, come in the discord server or dm Yellow#3562.</p>
        </div>
      </div>

      <canvas id="canvas" moz-opaque="true"></canvas>
    </div>
  );
}



export default App;

import 'bootstrap';
import '../StyleSheets/style.css';
import './Componants/Game/Client/Quadtree'
import './Componants/Game/Client/Core'
import { MainPanel } from './Panels/MainPanel';
import { RightPanel } from './Panels/RightPanel';
import { LeftPanel } from './Panels/LeftPanel';
// import swal from 'sweetalert2';

/*function showAlert() {
    new swal(
        "Sweetalert Alert",
        "This is a test",
        "success"
    );
}*/


export const Game = () => {
      return (
        <div className="allMenu">
            <MainPanel />
            <RightPanel />
            <LeftPanel />
        </div>
      );
    }
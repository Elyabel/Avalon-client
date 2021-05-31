import {Maininput} from '../Componants/MainPanel/Maininput';
import {Mainbuttons} from '../Componants/MainPanel/Mainbuttons';

const MainPanel = () => {
    return (
            <div className="mainPanel">
                <div className="central-panel">
                <Maininput />
                <Mainbuttons />
                </div>
            </div>
    )
}

export { MainPanel };
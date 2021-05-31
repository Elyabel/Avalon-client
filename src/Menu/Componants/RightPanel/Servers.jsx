import $ from 'jquery';
import '../Game/API/MainServers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad  } from '@fortawesome/free-solid-svg-icons'


function loadingServer() {
    $(".spinner").hide();
    $("#Servers-list").show();
}

setTimeout(function() {
    loadingServer();
}, 3000);

export const Servers = () => {
    return (
        <div className="Servers">
                <div className="Servers-title">
                    <center>
                        <h2>Servers <FontAwesomeIcon icon={faGamepad } /></h2>
                    </center>
                </div>

                <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                </div>

                <div id="Servers-list" style={{display: "none"}}>

                </div>
        </div>
    );
}
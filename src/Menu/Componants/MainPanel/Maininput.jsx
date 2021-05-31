export const Maininput = () => {
    return (
        <div className="name-input">
            <input type="text" id="nick" className="input nick" placeholder="Nickname"></input>
            <input id="skin" style={{display: "none"}}></input>
        </div>
    );
}
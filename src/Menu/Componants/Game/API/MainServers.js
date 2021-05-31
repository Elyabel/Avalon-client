fetch("http://localhost:2000/api/servers")
.then(response => {
    return response.json();
})
.then(data => {
    for (let i = 0; i < data.length; i++) {

        let button = document.createElement("BUTTON");
        let name = document.createElement("p");
        button.setAttribute("class", "servers-button");
        name.innerHTML = data[i].name;
        button.setAttribute("onclick", `setserver('${data[i].server}/')`)
        name.setAttribute("class", "gamemode-name");
        button.appendChild(name);

        let element = document.getElementById("Servers-list");
        element.appendChild(button);
    };
});
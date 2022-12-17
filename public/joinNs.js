function joinNs(endpoint){
    if (nsSocket){
        nsSocket.close();
        document.querySelector(".input").removeEventListener("submit", formSubmission);
    }
    nsSocket = io(`http://localhost:3000${endpoint}`);
    nsSocket.on("roomLoad",(rooms)=>{
        let list = document.getElementById("rooms");
        list.innerHTML = "";
        // console.log(rooms);
        rooms.forEach(ele=>{
            // console.log(ele);
            list.innerHTML += `<li class=${ele.roomTitle}>${ele.roomTitle}</li>`;
        })

        Array.from(list.children).map(ele=>{
            ele.addEventListener("click",(evt)=>{
                joinRoom(ele.getAttribute("class"));
            })
        })
    });

    document.querySelector(".input").addEventListener("submit",formSubmission);
}

function formSubmission(evt){
    evt.preventDefault();
    const input = document.getElementById("input");
        nsSocket.emit("messageToServer", input.value);
        input.value = "";
}
function joinRoom(roomName){
    nsSocket.emit("joinRoom", roomName);
    let list = document.getElementById("messages");
    // console.log("room called");
    nsSocket.on("floodMessages", msgs=>{
        list.innerHTML = "";
        console.log(msgs);
        msgs.map(msg=>{
            list.innerHTML += `<li>${msg}</li>`;
        })
    })
}
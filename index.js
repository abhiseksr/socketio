const express = require("express");
const app = express();
const path = require("path");
const nsList = require("./data/namespaces");
const socketio = require("socket.io");
const server = app.listen(3000, ()=>{
    console.log('Serving on port',3000);
});

app.use(express.static(__dirname+"/public"));

const io = socketio(server);

io.on("connection",socket=>{
    let nsData = nsList.map(ns=>{
        return {
            endpoint: ns.nsEndpoint,
            title: ns.nsTitle
        }
    })
    socket.emit("loadNs", nsData);
    console.log("connection established")
})


nsList.map(ns=>{
    io.of(ns.nsEndpoint).on("connection",(nsSocket)=>{
        // console.log(ns);
        nsSocket.emit("roomLoad", ns.rooms);
        nsSocket.on("joinRoom", roomToJoin=>{
            // console.log("this is iiimmmpp");
            let data;
            const roomToLeave = Array.from(nsSocket.rooms)[1];
            if (roomToLeave)
            nsSocket.leave(roomToLeave);
            nsSocket.join(roomToJoin);
            // console.log(nsSocket.rooms);
            // console.log(Array.from(nsSocket.rooms));
            // nsSocket.leave()
            data = ns.rooms.find(k=>{
                // console.log(k);
                return k.roomTitle==roomToJoin;
            })
            // console.log(data);
            nsSocket.emit("floodMessages", data.messages);
        })
        nsSocket.on("messageToServer", msg=>{
            // console.log(msg);
            const nsRoom = ns.rooms.find(k=>{
                // console.log(k, Object.keys(nsSocket.rooms));
                return k.roomTitle==Array.from(nsSocket.rooms)[1];
            })
            if (!nsRoom) return;
            // console.log(nsRoom);
            nsRoom.addMessage(msg);
            io.of(ns.nsEndpoint).to(nsRoom.roomTitle).emit("floodMessages", nsRoom.messages);
        })
    })
})
class Room{
    constructor(roomID, roomTitle){
        this.roomID = roomID;
        this.roomTitle = roomTitle;
        this.messages = [];
    }
    addMessage(msg){
        this.messages.push(msg);
    }
}

module.exports = Room;
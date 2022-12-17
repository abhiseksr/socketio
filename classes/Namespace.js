class Namespace{
    constructor(nsID,nsTitle,nsEndpoint){
        this.nsID = nsID;
        this.nsTitle = nsTitle;
        this.nsEndpoint = nsEndpoint;
        this.rooms = [];
    }
    addRoom(roomObj){
        this.rooms.push(roomObj);
    }
}

module.exports = Namespace;
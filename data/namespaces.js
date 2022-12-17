const Namespace  = require("../classes/Namespace");
const Room  = require("../classes/Room");

let namespaces = [];
let nsp1 = new Namespace(0,"Wiki","/wiki");
let nsp2 = new Namespace(1,"Cats","/cats");
let nsp3 = new Namespace(2,"Linux","/linux");

nsp1.addRoom(new Room(0,"Article"));
nsp1.addRoom(new Room(1,"FAQ"));
nsp1.addRoom(new Room(2,"Help"));

nsp2.addRoom(new Room(0,"Billota"));
nsp2.addRoom(new Room(1,"Husky"));


nsp3.addRoom(new Room(0,"Ubuntu"));
nsp3.addRoom(new Room(0,"Fedora"));
nsp3.addRoom(new Room(0,"Kali"));

nsp2.rooms[0].addMessage("Hi i am billota");
nsp1.rooms[0].addMessage("Let write an article");
nsp2.rooms[1].addMessage("i am the most furtila cat");
nsp3.rooms[0].addMessage("Ubuntu is best");
namespaces.push(nsp1, nsp2, nsp3);

module.exports = namespaces;
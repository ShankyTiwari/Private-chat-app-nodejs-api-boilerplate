/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/


'use strict';

const path = require('path');
const helper = require('./../handlers/query-handler');
const CONSTANTS = require('./../config/constants');

class Socket{

	constructor(socket){
		this.io = socket;
	}
	
	socketEvents(){

		this.io.on('connection', (socket) => {

		});

	}
	
	socketConfig(){
		this.io.use( async (socket, next) => {
          	// Some code will go here
        });

        this.socketEvents();
	}
}
module.exports = Socket;
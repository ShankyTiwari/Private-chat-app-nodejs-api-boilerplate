/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/
const helper = require('./../handlers/query-handler');
const CONSTANTS = require('./../config/constants');
const passwordHash = require('./../utils/password-hash');

'use strict';
class RouteHandler{

	routeNotFoundHandler(request, response){
		response.status(CONSTANTS.SERVER_NOT_FOUND_HTTP_CODE).json({
			error : true,
			message : CONSTANTS.ROUTE_NOT_FOUND
		});
	}
}

module.exports = new RouteHandler();

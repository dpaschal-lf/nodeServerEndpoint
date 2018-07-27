
const express = require('express');

const server = express();

//middleware
server.use( 
	express.static(__dirname + '/html' )
);

server.get('/getData', (request, response)=>{
	var data = {
		name: 'Dan',
		favoritePicture: 'http://www.hastingschess.com/wp-content/uploads/2015/12/Lego_Chess_4-465x348-300x225.jpg'
	}
	response.send( JSON.stringify(data));
})

server.listen(3001, function(){
	console.log('server is listening at port 3001')
});

/*
scratchpad
 |
 ----- webserver
       | 
       ----html
       |	|
       		---index.html
       |
       ----server.js
*/
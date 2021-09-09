const express = require('express');
const routes = require('./routes/routes');
const port = 8000;
const router = express.Router();
//
const app = express();
routes(app);
//
app.listen(port, function(){
	console.log("Listening " + port);
});

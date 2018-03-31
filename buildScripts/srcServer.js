// Importing Necessary modules
import express from 'express';
import open from 'open';
import path from'path';
import webpack from 'webpack';
// The Configuration File for the webPack Bundler
import config from '../webpack.config.dev';

/* eslint-disable no-console */

// Intializes the port number
var port = 3000;
// Creating an object from express
var app = express();
// Creating an object from WebPack Bundler
const compiler = webpack(config);

// Make the application uses webPack to bundle our js file in the browser
app.use(require('webpack-dev-middleware')(compiler,{
  // Turning the information displays in the CMD off
    noInfo: true,
    publicPath: config.output.publicPath
}))

// Rendering the index.html file when runing the localhost path below
app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Starting the application on the localhost with port intialized up
app.listen(port, function(err){
  if(err){
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});

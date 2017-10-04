var http = require("http");
var fs = require("fs");
var server = http.createServer(function(request, response){
    if (request.url === "/"){
        fs.readFile("./views/index.html", "utf8", function(errors, contents){
            console.log("index");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents)
            response.end();
        })
    } else if (request.url === "/cars"){
        fs.readFile("./views/cars.html", "utf8", function(errors, contents){
            console.log("cars");
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/Car_Faces_3-465x293.jpg"){
        console.log("image1 ran");
        fs.readFile("./images/Car_Faces_3-465x293.jpg", function(errors, contents){
            console.log("car image1");
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/interestingcars6.jpg"){
        console.log("cars image2");
        fs.readFile("./images/interestingcars6.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/interestingcars7.jpg"){
        fs.readFile("./images/interestingcars7.jpg", function(errors, contents){
            console.log("cars image3");
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/cats") {
        fs.readFile("./views/cats.html", "utf8", function(errors, contents){
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/cat2.jpg"){
        fs.readFile("./images/cat2.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/download1.jpg"){
        fs.readFile("./images/download1.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } else if (request.url === "/images/01catwantstotellyoulaptop.jpg"){
        fs.readFile("./images/01catwantstotellyoulaptop.jpg", function(errors, contents){
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        })
    } 
});
server.listen(7077);


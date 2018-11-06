const http = require("http");
const fs = require("fs");
let body="";
  const options = {
    hostname: "broken-links-api.herokuapp.com",
    path: "/",
    method: "GET"
  }
  const req = http.request(options, function (res) {
    
    res.on("data", function (data) {  
      body+=data;  
      console.log(res.statusCode);
    });
    res.on("end", function () {
      // fs.writeFile("pets.js", interests, err => {
        // if (err) throw err;
      });
    });
  // });
  req.end();
 


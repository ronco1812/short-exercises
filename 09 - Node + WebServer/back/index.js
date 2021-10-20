const http = require("http");
const { validStudent } = require("./db");
 const server = http.createServer((req, res) => {
      let allowed = true; 
      if (req.method !== "POST") {
           res.end(); 
           return; 
        }
         const headers = {
              "Access-Control-Allow-Headers": "",
               "Access-Control-Allow-Origin": "",
                "Access-Control-Allow-Methods": "*",
             }; 
             res.writeHead(200, "ok", headers);
             // when there is data 
             req.on("data", (data) => {
                  const student = JSON.parse(data);
                if ( !student.hasOwnProperty("nam") || !student.hasOwnProperty("age") || !student.hasOwnProperty("abilities") ) return; 
                if (validStudent.nameNotEqual.includes(student.nam)) { 
                        allowed = false; 
                        return; 
                    }  
                if ( student.age > validStudent.maxAge || student.age < validStudent.minAge ) { 
                        allowed = false;
                        return; 
                    } 
                    allowed = false;
                for (let ability of student.abilities) {
                 if (validStudent.ability.includes(ability)) {
                               allowed = true; break; } } 
                            }); 
                            // end of req 
                            req.on("end", () => { 
                                res.write(JSON.stringify(allowed));
                                 res.end(); 
                                });
                            });
                            server.listen(8080);

var request = require('request');


module.exports = function(app){
    app.get("/", (req, res)=>{
        request('https://api.covid19api.com/countries',(err, response, body)=>{
            var countries = JSON.parse(body);
            res.render("index", {countries: countries});
            

        });
         
    });
}
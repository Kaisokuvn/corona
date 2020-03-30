var request = require('request');

module.exports =  function(app){
    app.get("/country", function(req, res){
        var country = req.query.country;

        var url_confirmed = `https://api.covid19api.com/country/${country}/status/confirmed`;
        var url_deaths = `https://api.covid19api.com/country/${country}/status/deaths`;
        var url_recovered = `https://api.covid19api.com/country/${country}/status/recovered`;
        
        var casesConfirmed = [];
        var casesDeath =[];
        var casesRecov = [];

        request(url_confirmed, function(err, response, body){

            casesConfirmed = JSON.parse(body);
            request(url_deaths, function(err, response, body){
                casesDeath = JSON.parse(body);
                
                request(url_recovered, function(err, response, body){
                    casesRecov = JSON.parse(body);
                    res.render('resul', {confir: casesConfirmed, death: casesDeath, recov: casesRecov});


                });
            });
            
        });
       








    });

}
    
        

    
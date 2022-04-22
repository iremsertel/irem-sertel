const request = require('request')

const forecast = (latitude, longitude,  callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=&query=' + latitude + ',' + longitude + '&units=m'
   
    request({ url: url, json:true}, (error, response) => {
       
        if (error) {
          
            callback('Unable', undefined)
        }else if (response.body.error){
        
            callback('Unable', undefined)
        }else{
      
        callback(undefined, 'Hava ' + response.body.current.weather_descriptions[0] + 
           ' hava sıcaklığı ' + response.body.current.temperature + 
           ' hissedilen ' + response.body.current.feelslike + 
           ' derece' )
    
        }
       
    })
}



module.exports = forecast
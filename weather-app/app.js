
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {

 return geocode(address, (error, {latitude, longitude, location}) => {
        if(error) {
            return console.log(error);
        }
        
        forecast(latitude, longitude,(error, {curTemp, rainChance, daySum}) => {
            if(error) {
                return console.log(error)
            }
            console.log(location);
            console.log('Current temperature: ' + curTemp)
            console.log('Raining chance: '+ rainChance)
            console.log('Daily summary: '+ daySum)
        });
    }) 
} else {
    console.log('Please provide the location');
}










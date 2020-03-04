module.exports = {
	name: 'send',
	description: 'generates coordinates if they do not already exist, and saves them',
	execute(message, args) {
    const {prefix, token, geoToken } = require('C:/Users/ifhm2/Autosys/config.json');
    //gets the data from the coordinate file
    const coordinates = require('./coordinates.json');
    console.log(args)
    //checks if there are arguments, if not asks for them
    if (!args.length) {
        return message.channel.send(`${message.author}//send [location], [year], [planet], [timeline]`);
    }
    else if (args.length === 1) { 
        //checks to see if the coordinates have been generated already, sends them and terminates the program
        for (var namesl in coordinates.locations) {
            if (args[0] === coordinates.locations[namesl].name)
                message.channel.send(`coordinates are ${coordinates.locations[namesl].coordinate}`)
            }
        }
    else if (args.length === 4) { 
        //check to see if a specified timeline exists 
        for (var namest in coordinates.timelines) {
            if (args[3] === coordinates.timelines[namest].name)
                var timeline = coordinates.timelines[namest].coordinate
                //generates and saves a new timeline, with coordinate
            } if (args[3] !== coordinates.timelines[namest].name) {
                //generates the timeline number                
                var timeline = Math.floor(Math.random() * 4001);
                //makes the timeline number + name into a JSON object
                let coordinate = {
                    name: args[3],
                    coordinate: timeline
                }
                //stringifys the object
                let timelineN = JSON.stringify(coordinate, null, 2);
                //places the object into the JSONarray
                coordinates.timelines += timelineN
                console.log(coordinates.timelines)
            }

        //generate planet code
        var plIDarray = args[2].split("");

        //adjusts year
        var year = args[1] + 6000

        //checks for earth, if earth use real coords
        if (args[2] === "earth") {
            
            const https = require('https');
            //get the json file from the API
            https.get(`https://us1.locationiq.com/v1/search.php?key=${geoToken}&q=${args[0]}&format=json`, (resp) => {
                let data = '';
            })
            //data in chunks
            resp.on('data', (chunk) => {
                data += chunk;
              });

            resp.on('end', () => {
                var longlat = JSON.parse(data).explanation
            });
            //converts lat/lon to an all positive system
            var lat = longlat[0].lat + 90
            var long = longlat[0].lon + 180

            var lati = lat * 10
            var longi = long * 10

            var latir = Math.round(lati)
            var longir = Math.round(longi)
             
            //generates lat/lon for non-earth planets and places that fail the search
            }
        }
        else {
            var latir = Math.floor(Math.random() * 1800);
            var longir = Math.floor(Math.random() * 3600);
        }

        var FinalCoord = `${latir}${plIDarray[0]}-${longir}${plIDarray[1]}-${year}${plIDarray[2]}-${timeline}`

        message.channel.send(`coordinates are ${FinalCoord}`)
        console.log('generation complete')

        let location = {
            name: args[3],
            coordinate: finalCoord
        }

        let locationN = JSON.stringify(location, null, 2);

        coordinates.locations += timelineN
        console.log(coordinates.locations)

        }
    }
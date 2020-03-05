module.exports = {
	name: 'send',
	description: 'generates coordinates if they do not already exist, and saves them',
	execute(message, args) {
    const {prefix, token, geoToken } = require('C:/Users/ifhm2/Autosys/config.json');
    //gets the data from the coordinate file
    const fs = require('fs');
    
    let rawcoordinates = fs.readFileSync('C:/Users/ifhm2/Autosys/commands/coordinates.json');
    let coordinates = JSON.parse(rawcoordinates);
    console.log(args)
    //checks if there are arguments, if not asks for them
    if (!args.length) {
        return message.channel.send(`${message.author}//send [location], [year], [planet], [timeline]`);
    }
    else { 
        //checks to see if the coordinates have been generated already, sends them and terminates the program
        for (var nameslo in coordinates.locations) {
		var cont = true;
		
            if (args[0] === coordinates.locations[nameslo].name) {
		    cont = false;
                message.channel.send(`coordinates are ${coordinates.locations[nameslo].coordinate}`);
            }
        }
       
    if (cont === true && args.length === 3) {

        var timeline = coordinates.timelines[0].coordinate

        //generate planet code
        var argsCap = args[2].toUpperCase();
        var plIDarray = argsCap.split("");

        //adjusts year
        var yearadj = 6000;
        typeof (yearadj - 0);

        var a = `${args[1]}`
            b = `6000`


        var year = ((a - 0) + (b - 0));

        //generates first 2 coordinates
        var latir = Math.floor(Math.random() * 1800);
        var longir = Math.floor(Math.random() * 3600);
            
            var finalCoord = `${latir}${plIDarray[0]}-${longir}${plIDarray[1]}-${year}${plIDarray[2]}-${timeline}${plIDarray[4]}`
    
            message.channel.send(`coordinates are ${finalCoord}`)
            console.log('generation complete')

           coordinates['locations'].push({
            name: args[0],
            coordinate: finalCoord
        })
            console.log(coordinates);
            coordinateFINALstring = JSON.stringify(coordinates, null, 2);

            fs.writeFileSync('C:/Users/ifhm2/Autosys/commands/coordinates.json', coordinateFINALstring);


    }
    else if (cont === true && args.length === 4)
    { 
        //check to see if a specified timeline exists 
        for (var namesti in coordinates.timelines) {

            var cont2 = true;
            if (args[3] === coordinates.timelines[namesti].name) {
                var timeline = coordinates.timelines[namesti].coordinate
                cont2 = false;
            } else if (args[3] === undefined) {
                var timeline = coordinates.timelines[0].coordinate
                cont2 = false;
            }                   
        }  
            //generates and saves a new timeline, with coordinate
        if (cont2 === true) {
                //generates the timeline number                
                var timeline = Math.random() * (4000 - 0000) + 0000;
                timeline = Math.round(timeline);
                //makes the timeline number + name into a JSON object and pushes it to the array
                
                coordinates['timelines'].push({
                    name: args[3],
                    coordinate: timeline
                })
                console.log(coordinates)
            } 

        //generate planet code
        var argsCap = args[2].toUpperCase();
        var plIDarray = argsCap.split("");

        //adjusts year
        var yearadj = 6000;
        typeof (yearadj - 0);

        var a = `${args[1]}`
            b = `6000`


        var year = ((a - 0) + (b - 0));

        var latir = Math.floor(Math.random() * 1800);
        var longir = Math.floor(Math.random() * 3600);
            
            var finalCoord = `${latir}${plIDarray[0]}-${longir}${plIDarray[1]}-${year}${plIDarray[2]}-${timeline}${plIDarray[4]}`
    
            message.channel.send(`coordinates are ${finalCoord}`)
            console.log('generation complete')

           coordinates['locations'].push({
            name: args[0],
            coordinate: finalCoord
        })
            console.log(coordinates);
            coordinateFINALstring = JSON.stringify(coordinates, null, 2);

            fs.writeFileSync('C:/Users/ifhm2/Autosys/commands/coordinates.json', coordinateFINALstring);
        }
      
        }
    }
}
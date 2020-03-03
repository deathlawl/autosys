module.exports = {
	name: 'send',
	description: 'generates coordinates if they do not already exist, and saves them',
	execute(message, args) {
       
    //gets the data from the coordinate file
    fs.readFile('./coordinates.json', (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err)
            message.channel.send(`Whoops, can't seem to find any of the coordinates, ${message.author}`)
            return
        }
        console.log('File data:', jsonString)
    })
}
}

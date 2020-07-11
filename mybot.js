const Discord = require('discord.js');
const { DH_CHECK_P_NOT_PRIME } = require('constants');
const client = new Discord.Client()

client.on('ready',()=>{
    console.log(' connect as ' + client.user.tag);

    client.user.setActivity("Youtube", {type: "WATCHING" });

    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);
        guild.channels.cache.forEach((channel)=>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id} `);
        })
        // general text 731384503288856669

    })

    let generalChannel = client.channels.cache.get("731384503288856669");

    generalChannel.send('Hello Everyone !', { files: ['https://www.devdungeon.com/sites/all/themes/devdungeon2/logo.png'] })


})

//  message event

 client.on('message',(receivedMessage) =>{
        if (receivedMessage.author ==  client.user){
            return;
        }

        receivedMessage.channel.send("Message Received, "+ receivedMessage.author.toString()+": " + receivedMessage.content);
        receivedMessage.react("😀");
        
        if(receivedMessage.content.startsWith("!")){
            processCommand("received Message ");
        }
 })

client.login("NzMxMzg4MTQ2MTAwNDY5NzYy.XwlinA.gvfAGtWpw8Wq5nbqiBopQg27-N4");

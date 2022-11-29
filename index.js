require("dotenv").config();
const axios = require("axios");
const { count } = require("console");
const Discord = require("discord.js");
const { Client, Intents } = require("discord.js");
const fs = require("fs");
const { MessageAttachment, MessageEmbed } = require("discord.js");

// Client startup

const client = new Discord.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//make sure this line is the last line
client.login(process.env.CLIENT_TOKEN);

// directory init.
const dir = "./images";

// get file number in image folder

const fileCount = 3;

console.log(fileCount);

// random number function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

console.log(typeof getRandomInt(fileCount));

client.on("messageCreate", (messageCreate) => {
  if (messageCreate.author.id === client.user.id) return;
  if (getRandomInt(99) === 0) {
    let fileNumber = getRandomInt(fileCount);
    let fileName = fileNumber.toString() + ".png";

    let msg = messageCreate.content;

    messageCreate.channel.send({ files: [`./images/${fileName}`] });
  }
});

const fs = require('fs');
const discord = require('freeze-selfbot');
const client = new discord.Client();
const express = require('express');
const console = require("./utils/logger");
const app = express();
const PORT = process.env.PORT || 3000;

// Read the token from the data.txt file
const TOKEN = fs.readFileSync('data.txt', 'utf-8').trim();

if (!TOKEN) {
  console.exit("No token provided");
}

const MODE = process.env.MODE || 'default';

module.exports = client;

client.login(TOKEN);

console.logger.info(`
   ██████╗ ██╗███████╗ ██████╗ ██████╗ ██████╗ ██████╗       ██████╗ ██████╗  ██████╗
   ██╔══██╗██║██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔══██╗      ██╔══██╗██╔══██╗██╔════╝
   ██║  ██║██║███████╗██║     ██║   ██║██████╔╝██║  ██║█████╗██████╔╝██████╔╝██║     
   ██║  ██║██║╚════██║██║     ██║   ██║██╔══██╗██║  ██║╚════╝██╔══██╗██╔═══╝ ██║     
   ██████╔╝██║███████║╚██████╗╚██████╔╝██║  ██║██████╔╝      ██║  ██║██║     ╚██████╗
   ╚═════╝ ╚═╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═════╝       ╚═╝  ╚═╝╚═╝      ╚═════╝                                                                                
`);

app.get('/', (_, res) => {
  res.send('Presence is ready!');
});

app.listen(PORT, () => {
  console.logger.info(`Web server is running on port ${PORT}`);
});

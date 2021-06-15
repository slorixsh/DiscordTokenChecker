const Bot = require('./bot.js');
const fs = require('fs');

const config = require('./config.json');

fs.writeFileSync('checked/invalid.txt', '');
fs.writeFileSync('checked/verified.txt', '');
fs.writeFileSync('checked/unverified.txt', '');

const tokens = fs.readFileSync('tokens.txt', 'utf-8').replace(/\r/gi, '').split("\n");

var i = 0;
setInterval(() => {
    if (i >= tokens.length) {
        console.log("T0kens Checked! | hyprexbtw");
        process.exit(1);
    }
    Bot.check(tokens[i]);
    i++;
}, config.timeout);
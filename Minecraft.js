'use strict';

const client = require('.')('740162138361954364');

client.on('join', (secret) => {
  console.log('we should join with', secret);
});

client.on('spectate', (secret) => {
  console.log('we should spectate with', secret);
});

client.on('joinRequest', (user) => {
  if (user.discriminator === '0001') {
    client.reply(user, 'YES');
  } else {
    client.reply(user, 'IGNORE');
  }
});

client.on('connected', () => {
  console.log('connected!');

  client.updatePresence({
    state: 'Being Noob',
    details: 'Minecraft',
    startTimestamp: new Date(),
    largeImageKey: 'minecraft',
    smallImageKey: 'reddit',
    partyId: 'craft_party',
    partySize: 1,
    partyMax: 5,
    matchSecret: 'slithers',
    joinSecret: 'craftplay',
    spectateSecret: 'craftwatch',
	smallImageText: 'r/HyperLS',
	largeImageText: 'Minecraft',
  });
});

process.on('unhandledRejection', console.error);

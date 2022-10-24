# How to connect to GenesysGo Premium RPC

How to connect to Solana's first and only highly performant decentralized RPC network powered by independent Shadow Operators in a trustless environment.

First, go to [https://portal.genesysgo.net/#](portal.genesysgo.net) and register an RPC. You'll get card showing various details, most importantly the "Account ID" and the RPC URL". Take these and rename the `.env.example` to `.env` and add them in,

Then add your wallet private key to this file. Don't worry, it won't be seen by anyone else.

Finally, install all dependencies and run `node getjwt.js` to acquire the JWT. It will be written to `jwt.txt`. You'll have to do this periodically as it expires in 24 hours. 

Next, run `node index.js` to test it out and voila, you're using the first and only decentralized, permissionless RPC network in the world. Congratulations.

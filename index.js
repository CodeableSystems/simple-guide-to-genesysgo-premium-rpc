import dotenv from "dotenv";
dotenv.config();
import web3 from "@solana/web3.js";
import Fs from "@supercharge/fs";

async function getConnection(url) {
  try {
    const jwt = await Fs.content("jwt.txt");
    return new web3.Connection(url, {
      commitment: "finalized",
      httpHeaders: {
        header: process.env.APP_IDENTIFIER,
        Authorization: `Bearer ${jwt}`,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

(async () => {
  // Connect to cluster
  console.log("Connecting to GenesysGo premium RPC");
  const connection = await getConnection(process.env.RPC_URL);

  // A couple of demo calls
  let version = await connection.getVersion();
  console.log(version);

  let balance = await connection.getBalance(
    new web3.PublicKey("9WzDXwBbmkg8ZTbNMqUxvQRAyrZzDsGYdLVL9zYtAWWM")
  );
  console.log(balance);
})();

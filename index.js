const express = require("express");
const app = express();
const NodeRSA = require("node-rsa");
const fs = require("fs");

const private_key = fs.readFileSync("./private.pem", "utf8");
// console.log(private_key);
const key = new NodeRSA(private_key, "pkcs1");
const data = {
  temp: 88,
};
const encrypt = key.encrypt(JSON.stringify(data), "base64");
console.log(encrypt);
const decrypt = key.decrypt(encrypt, "json");
console.log(decrypt);
const x = key.exportKey("pkcs1");
const y = key.exportKey("pkcs1-public-pem");
// console.log(x);
// console.log(y);

app.listen(3000, () => console.log("Listening"));

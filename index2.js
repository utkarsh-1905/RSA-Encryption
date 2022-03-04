const crypto = require("crypto");

const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
});

const data = {
  temp: 88,
};

const encrypted = crypto.publicEncrypt(
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  Buffer.from(JSON.stringify(data))
);

const decrypted = crypto.privateDecrypt(
  {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    oaepHash: "sha256",
  },
  encrypted
);

console.log(encrypted.toString("base64"));
console.log(decrypted.toString("utf8"));

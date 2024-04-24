let passalphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
let randomstring = "";
let length = 5;
for (let i = 0; i < length; i++) {
    randomstring += passalphabet[Math.floor(Math.random() * passalphabet.length)];
}
console.log(randomstring);
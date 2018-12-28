const gulp = require('gulp');
var fs = require('fs');
var nJwt = require('njwt');

function generateJwt(cb) {
  var signingKey = fs.readFileSync('output/server.key');
  var claims = JSON.parse(fs.readFileSync('config/jwt.config.json'));

  var jwt = nJwt.create(claims, signingKey, "RS256");
  jwt.setNotBefore();

  var token = jwt.compact();
  console.log(process.argv);
  console.log(token);
  fs.writeFileSync('output/token.jwt', token);
  cb();
}

function generatePrivateKey(cb) {
  openssl.generateRSAPrivateKey({}, function (err, key, cmd) {
    console.log(cmd);
    console.log(key);
    fs.writeFile("./private.key", key, {});
  });
  cb();
}

exports.generatePrivateKey = generatePrivateKey;
exports.generateJwt = generateJwt;
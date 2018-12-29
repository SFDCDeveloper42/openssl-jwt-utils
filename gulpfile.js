const gulp = require('gulp');
var fs = require('fs');
var nJwt = require('njwt');

function generateJwt(cb) {
  var signingKey = fs.readFileSync(process.env.npm_package_config_pkey_path);
  var claims = {
    "iss" : process.env.npm_package_config_jwt_iss,
    "aud" : process.env.npm_package_config_jwt_aud,
    "sub" : process.env.npm_package_config_jwt_sub,
  };

  var jwt = nJwt.create(claims, signingKey,process.env.npm_package_config_jwt_alg);
  jwt.setNotBefore();
  var token = jwt.compact();
  fs.writeFileSync(process.env.npm_package_config_jwt_path, token);
  console.log(token);
  cb();
}

// function generatePrivateKey(cb) {
//   openssl.generateRSAPrivateKey({}, function (err, key, cmd) {
//     console.log(cmd);
//     console.log(key);
//     fs.writeFile("./private.key", key, {});
//   });
//   cb();
// }

// exports.generatePrivateKey = generatePrivateKey;
exports.generateJwt = generateJwt;
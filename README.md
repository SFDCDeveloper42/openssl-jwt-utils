# openssl-jwt-utils

To install the package:
* clone it, remove .git
* run npm install
* update ./package.json config variables
* update ./config/certificate.config with your organization details

Here is the list of available scripts with their description:

* **preinstall** : Will run automatically after npm install to create output directory where files will be created
* **generate-encrypted-pkey-des3** : Run this to generate an encrypted private key
* **convert-encrypted-key** : Run this to convert the encrypted private key to a non encrypted format
* **generate-private-key** : Run this to generate a private key (unencrypted)
* **generate-public-key** : Run this to extract the public key from previously created private key
* **generate-cert-sign-request** : Run this to generate a certificate signing request
* **self-sign-cert** : Run this to selfsign the generated certificate
* **generate-jwt** : Run this to generate a JWT signed with the current generated private key
* **generate-all** : Run this to generate all keys + certs + jwt
* **clean-all** : Run this to remove generated files
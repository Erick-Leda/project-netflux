require ('dotenv').config({path:'var.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const firebaseAdmin = require('firebase-admin');
// const { v4: uuidv4 } = require('uuid');

// const admin = firebaseAdmin.initializeApp({
//     credential: firebaseAdmin.credential.cert(serviceAccount),
// });

// const storageRef = admin.storage().bucket(`gs://react-netflux-1c36d.appspot.com`);

// async function uploadFile(path, filename) {
//     return storageRef.upload(path, {
//         public: true,
//         destination: `/uploads/hashnode/${filename}`,
//         metadata: {
//             firebaseStorageDownloadTokens: uuidv4(),
//         }
//     });
// }

// (async() => {
//     await uploadFile('./images/morning-4411421__480.jpg', "my-image.png");
// })();


const routes = require('./routes.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:true}));

server.use('/api', routes);

server.listen(process.env.PORT, () => {
    console.log(`Server connected: http://localhost:${process.env.PORT}`);
});
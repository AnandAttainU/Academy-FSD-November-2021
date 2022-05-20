const express = require('express');
const app = express();

const cloudinary = require('cloudinary').v2;

const fs = require('fs');

const jsonData = require('./FORMData.json');

cloudinary.config({ 
    cloud_name: 'dtx1pez4d', 
    api_key: '933722588754538', 
    api_secret: '14cadtiviUAfwT1jqU_nK8vkkQM'
  });

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './files')
    }
  });
  
const uploads = multer({storage: storage});

app.use(express.urlencoded());

// app.use(express.json());

app.get('/', (req, res)=>{
    // console.log(__filename);
    // console.log(__dirname);
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/product', uploads.single('imageFile'), (req, res)=>{
    // console.log(req.body);
    const fileData = req.file;
    if(fileData){
        cloudinary.uploader.upload(`${__dirname}/files/${fileData.filename}`,
        function (error, result) {
            // console.log(result, error);
            if(result){
                fs.unlink(`${__dirname}/files/${fileData.filename}`, (err)=>{console.log(err);});
            }
            jsonData.productName = req.body.productName;
            jsonData.productDescription = req.body.productDescription;
            jsonData.imageUrl = result.secure_url;
            // console.log(jsonData);
            fs.writeFile(`${__dirname}/FORMData.json`, JSON.stringify(jsonData), err => console.log(err));
        });
        
    }
    
    res.send("Data posted successfully");
})

app.listen(8081);

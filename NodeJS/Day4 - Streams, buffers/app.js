const { createReadStream, createWriteStream }  = require('fs');

const readStream = createReadStream('./temp.txt', {encoding: 'utf-8', highWaterMark: 5000});

readStream.on('open', ()=>{
    console.log('File opened');
})

readStream.on('close', ()=>{
    console.log("File Closed");
})

readStream.on('data', (content)=> {
    console.log(content);
})

// How to call a method after some time?
setTimeout(()=> {
    readStream.pause();
    setTimeout(() => {
        // readStream.resume();
        readStream.read();
        readStream.read();
        readStream.read();
        readStream.on('end',()=>{
            setTimeout(() => {
                console.log("Reading is ended");
            }, 2000);
        })
    }, 4000);
}, 1000)


const writeStream = createWriteStream('./writeStream.txt', {encoding: 'utf-8'});

const data = "This is some thing new I want to weite\n";
setInterval(()=>{
    writeStream.write(data, (err)=>{
        if(err){
            console.log(err);
        }
        console.log("Write is successful");
    })
}, 1000)






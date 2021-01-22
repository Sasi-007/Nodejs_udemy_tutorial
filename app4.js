const fs=require('fs')
const readStream=fs.createReadStream('streamfile.txt',{encoding:'utf-8'});
const writeStream=fs.createWriteStream('writestreamfile.txt');
// readStream.on('data',chunk=>{
//     console.log("###new chunk")
//     console.log(chunk)

//     writeStream.write("###new chunk written from line 8")
//     writeStream.write(chunk);
// })
readStream.pipe(writeStream)
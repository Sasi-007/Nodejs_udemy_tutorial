const fs=require('fs')
//read
fs.readFile('readme.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
//write
fs.writeFile('readme.txt','Here I written text will be replaced by app3.js',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Modified String')
    }
})
//read
fs.readFile('readme.txt',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})
//Append
fs.appendFile('readme.txt','Here I append the text will be replaced by app3.js',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Modified String by Append')
    }
})
//CreateFolder
if(!fs.existsSync('output')){
    fs.mkdir('output',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log('Success to create folder')
        }
    })
}else{
    console.log("Already name created")
}
//DeleteFolder
if(!fs.existsSync('output')){
    fs.rmdir('output',(err,data)=>{
        if(err){
            console.log(err)
        }else{
            console.log("Folder Deleted")
        }
    })
}else{
    console.log("Already folder deleted")
}
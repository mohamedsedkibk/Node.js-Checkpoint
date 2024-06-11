const fs=require('fs')
fs.writeFile("welcome.txt","hello node!",(err)=>{
    err? console.log(err):console.log('file created')
})
fs.readFile("hello.txt","utf-8",(err,data)=>{
    err? console.log(err):console.log(data)
}) 
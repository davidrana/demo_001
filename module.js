//(function(exports,module,require,_dirname,_filename))
//1-- npm module

//2--this mathod use module

//const color = require('cli-color')
//console.log(color.yellow('Hellow David')) 

 
//3--local module self how we use
// const auth = require('./auth.js')


// auth.register('codersGyan')
// auth.login('codersGyan','secret')

//4--core modules

const { fstat } = require('fs')
const path = require('path')

//1--dirname
//console.log('Folder name:',path.dirname(__filename))

//2--filename
//console.log('File  name:',path.basename(__filename))

//3--Extension
//console.log('Ext name:',path.extname(__filename))

//4--parse
//console.log('Parse name:',path.parse(__filename))

//5--Join (important modules)
//console.log('Join:',path.join(__dirname,'order','app.js'))

//6--File system

 const fs = require('fs')

// //make adirection

// fs.mkdir(path.join(__dirname,'/test'),(err) =>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('Folder created....')
// })

//7--Create a file
// const fs = require('fs')

// fs.writeFile(path.join(__dirname,'test','test.js'),'Hello Node\n',(err) => {
//     if(err){
//         throw err

//     } 

//     //inshart data in file


//     fs.appendFile(path.join(__dirname,'test','test.js'),'More data',(err) =>{
//         if(err){
//             throw err
    
//     }
//      console.log('Data added...')
// })
//     console.log('file created...')

// })

//8--Read a file

// fs.readFile(path.join(__dirname,'test','test.js'),'utf-8',(err,data) =>{
//     if(err){
//         throw err
// }

//     //method--1
//     //const content = Buffer.from(data)

//     //console.log(content.toString())

//     //method--2
//     console.log(data)

// })


//9--Os module
const os = require('os')

//console.log('os type:',os.type())
// console.log('os platform :',os.platform())
// console.log('Cpu architecture :',os.arch()) 
// console.log('cpu details:',os.cpus())
// console.log('free memory:',os.freemem())
// console.log('total memory:',os.totalmem())
// console.log('uptime:',os.uptime())


//10--Events module

// const Emitter = require('events')

//const myEmitter = new Emitter()

// myEmitter.on('somename',(data) =>{
//     console.log(data)
// })

// myEmitter.emit('somename',{
//     name: 'David'
// })

// class Auth extends Emitter{
//     register (username){
//         console.log('registered succefully...' ) 
//         this.emit('registered',username)
//     }
   
// }

// const auth = new Auth()
// //listion
// auth.on('registered',(data) =>{
//     console.log(`sending to email to ${data}`)

// })

// auth.register('codersGyan')

// //welcome email

// auth.on('registered',(data) =>{
//     console.log(`sending welcome email to ${data}`)

// })

// auth.register('codersGyan')














 




 


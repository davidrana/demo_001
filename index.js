//1- stap http module   

const http = require('http')

//2-stap  file read import process
const fs = require('fs')

//3-stap  path import process
const path = require('path')

//server create

const app = http.createServer((req,res) => {

   res.writeHead(200,{
       'Content-Type':'text/html'
   })



    //  if(req.url === '/'){

    //      //index.html connected

    //     fs.readFile(path.join(__dirname,'public','index.html'),(err,content) => {
    //         if(err){
    //             throw err
    //         }
    //         res.end(content)
    //     })

    // }else if(req.url === '/about'){

    //     //about.html connecter

    //     fs.readFile(path.join(__dirname,'public','about.html'),(err,content) => {
    //         if(err){
    //             throw err
    //         }
    //         res.end(content)
    //     })
    // }

    let filePath = path.join(__dirname,'public',req.url === '/' ? 'index.html': req.url + '.html')


    fs.readFile(filePath,(err,content) => {

        if(err){
            fs.readFile(path.join(__dirname,'public','error.html'),(err,data) => {
                if(err){
                    res.writeHead(500)

                       res.end('Error!!!')
                }else {
                    res.writeHead(404,{
                        'Content-Type':'text/html'
                    })
                    res.end(data)
                }
                
            })
        }else{
            res.writeHead(200,{
                'Content-Type':'text/html'
            })
            res.end(content)
        }
       
    })

    
}) 

const PORT = process.env.PORT || 3000 

app.listen(PORT,() => {
    console.log(`listening on port ${PORT}`)
})

//server connected 
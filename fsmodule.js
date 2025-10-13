const fs=require('fs')

// fs.readFile('demo.txt','utf8',(err,data)=>{
// if(err)
// {
//     console.log('Error:',err)
// }

// console.log('Data:',data)}
// )

//creating to a file

fs.writeFile('avcoe.html','utf8',(err,data)=>{
    if(err)
    {
        console.log('Error:',err)
    }
    console.log('File created successfully')

})

fs.unlink('newavoce.html',(err)=>{
    if(err)
    {
        console.log('Error:',err)
    }
    console.log('File deleted successfully')
 
})
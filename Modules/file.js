const fs = require('fs')

// sync
// let data=fs.readFileSync('./readme.txt')
// console.log(data)

// 1st way
// let data=fs.readFileSync('./readme.txt','utf-8')
// console.log(data)

// 2nd way
// let data=fs.readFileSync('./readme.txt')
// console.log(data.toString())

// Async/Await

// async function read(){

//    let data = await fs.readFile('./readme.txt', 'utf-8', (err, da) => {
//       if (err) {
//          console.log(err)
//       }
//       else {
//          console.log("****",da)
//       }
//    })
// }
//  console.log('hello')
//  read();

// async function read() {

//    let data = await fs.readFile('./readme.txt', 'utf-8', (err, da) => {
//       if (err) {
//          console.log(err)
//       }
//       else {
//          console.log("****", da)
//       }
//    })
// }
// console.log('hello')
// read();




const read= async ()=>{

   let data = await fs.readFile('./readme.txt', 'utf-8', (err, data) => {
      if (err) {
         console.log(err)
      }
      else {
         console.log(data)
      }
   })
}
read();
 console.log('hello')
 


const fs = require('fs');
const argv = require('process');
const axios = require('axios')

// for (let i = 2; i < process.argv.length; i++){
//     arg = process.argv[i]
//     if(arg.includes('.txt')){
//         fs.readFile(`${arg}`, 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err)
//                 process.kill(1)
//             }
//             console.log(data)
//         })
//     } else if(arg.includes('http')){
//         // why doesn't mine work??
//         async(arg) => {
//             try{
//                 let res = await axios.get(`${arg}`)
//                 console.log(res.data)
//             }
//             catch{
//                 console.error(`Error fetching ${arg}: ${err}`);
//                 process.exit(1);
//             }
//         }
//     }
// }

const fs = require('fs');
const process = require('process');
const axios = require('axios');

/** read file at path and print it out. */

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

/** read page at URL and print it out. */

async function webCat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
    process.exit(1);
  }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
  webCat(path);
} else {
  cat(path);
}
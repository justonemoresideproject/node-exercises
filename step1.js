const fs = require('fs');
const argv = require('process');

function cat(){
    for (let i = 2; i < process.argv.length; i++){
        fs.readFile(`${process.argv[i]}`, 'utf-8', (err, data) => {
            if (err) {
                console.log(err)
                process.kill(1)
            }
            console.log(data)
        })
    }
}


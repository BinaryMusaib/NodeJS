const { readFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve (data)
            }
        })
    })
}

const start = async () => {
    try{
        const first = await getText('first.txt');
        console.log(first);
    } catch {
        console.log(error);
    }
}
start()
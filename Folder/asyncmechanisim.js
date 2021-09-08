//This program will illutrate how asynchronization mechanisim work. 
const {readFile, writeFile} = require('fs');

console.log('start');
readFile('./first.txt', 'utf8', (err, result) => {
    if (err) { console.log(err); return; }
    const first = result;
    readFile('./second.txt', 'utf8', (err, result) => {
        if (err) { console.log(err); return; }
        const second = result;
        writeFile(
            './result-sync.txt',
            `The new text in the file will be: ${first}, ${second}`,
            (err, result) => {
                if (err) { console.log(err); return;}
                console.log('done with the task!!!');
            } 
        )
    })
});
console.log('staring next task.');
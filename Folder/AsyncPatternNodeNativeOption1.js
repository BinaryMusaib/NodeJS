const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('first.txt', 'utf8')
        await writeFilePromise(
            'result.txt',
            `This will be my text: ${first}`,
            //If there is no file with name "result.txt". It will be created automatically.
            //If the file is already present in the folder, use append flag.
            { flag: 'a' }
        )
        console.log(first)
    } catch {
        console.log(error);
    }
}
start()
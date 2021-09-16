const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('first.txt', 'utf8')
        await writeFilePromise(
            'result.txt',
            `This will be my text: ${first}`
        )
        console.log(first)
    } catch {
        console.log(error);
    }
}
start()
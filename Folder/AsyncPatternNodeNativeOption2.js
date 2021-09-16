const { readFile, writeFile } = require('fs').promises

const start = async () => {
    try {
        const first = await readFile('first.txt', 'utf8')
        await writeFile('result.txt', `This is my text: ${first}`, { flag: 'a' })
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}
start()
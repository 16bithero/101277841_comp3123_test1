let fs = require('fs')
let dir = './Logs'

createFiles = () => {
    writeText = () => {
        for (let x = 0; x < 10; x++) {
            fs.writeFileSync(`./Logs/log${x}.txt`, `File Number ${x}`)
            console.log(`log${x}.txt`)
        }
    }

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
        writeText()
    } else {
        writeText()
    }
}

removeFiles = () => {
    if (fs.existsSync(dir)) {
        let files = fs.readdirSync(dir)
        if (files.length != 0) {
            for (let x = 0; x < files.length; x++) {
                fs.unlinkSync(`./Logs/log${x}.txt`)
                console.log(`delete files...log${x}.txt`)
            }
            fs.rmdirSync(dir)
            console.log("Deleted Logs directory.")
        } else {
            console.log("No files found.")
        }
    } else {
        console.log("Directory does not exist.")
    }
}

//createFiles()
removeFiles()
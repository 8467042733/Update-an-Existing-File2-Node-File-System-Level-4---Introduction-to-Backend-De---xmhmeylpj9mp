
const fs = require('fs').promises;
const fileName = 'myfile.txt';

const updateFile = async (fileName, fileContent) => {
    //Write your code here to overwrite the file content
    //Don't change function name
    fs.appendFile(fileName,fileContent,function(err){
        if(err) throw err;
        console.log("File Updated");
    })
}
updateFile(fileName,"Newton School, is an online learning platform.");

module.exports = updateFile;

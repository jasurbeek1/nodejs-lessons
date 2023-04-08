const http = require('http')

const server = http.createServer((request , response) => {
    console.log(request.url);

    response.write(`hello world 1`)   
    response.end()
})

server.listen(3000, () => {
    console.log(`server created complete = 3000`);
})

//! nodemon ni vazifasi hozir bu codni ishlatish uchun biz har doim terminaldan node index.js qilshmz kerak buladi
//! nodemonni qulay tarafi esa  bizni codimzda bulgan xar bir uzgarishlarni teksishrib turadi va har uzgarsh bulganda uzi avtomatik serverdan ham uzgartirb beradi
//! buni uchun esa package.json faylizmda "script" da bitta uzgarovchi ochib ushanga commanda berishim kerak buladi 
//! va usha cammondani  beriligan uzgarovchini terminalda `npm run  ` qilib chaqirib ishlatib ketasak buladi

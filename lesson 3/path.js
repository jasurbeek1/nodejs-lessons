const path = require('path');

console.log(path.basename(__filename)); //! basename bu faylni to'liq nomini chiqarib beradi
console.log(path.dirname(__filename)); //! dirname bu faylgacha bulgan joyni chiqarib beradi
console.log(path.extname(__filename)); //! extname bu faylni kengaymasini chiqarib beradi
console.log(path.parse(__filename)); //! parse bu esa faylni bizga object qilib qaytaradi 
console.log(path.resolve(__filename)); //! resolve bu ham huddi parsedaga ishlaydi 

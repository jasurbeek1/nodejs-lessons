//! http  bizlarga serverlar yaratishda yordam beradi 
const http = require('http')

const server = http.createServer((request, response) => {       //! server creat qildik
        //? request = serverga so'rov
        //? response = server javob 

console.log(request.url); //! buyerda biz kelgan urlni kursatishini surayotgan bulamz

response.write(`hello world`) //!  response qilib bz javobni olaolamiz yani foydalanovchiga kuriladigan javobni 
response.end() //! end qilib olmasak malumotni ushlayolmizm usha uchun doim javobni olganimzda end ni ham ishlatishimz kerak buladi chunki shu orqaligina malumotni tuxtataolamiz
})

// ! endi biz usha serverni qayerdadir ushlab olishimz kerak

//! listen orqali biz uzimizni serverni kuzatib boraolamiz

server.listen(3000, () => {
    console.log(`Server created complete = 3000`);
})

//! createServerni asosyisi shu buladi yani response va request



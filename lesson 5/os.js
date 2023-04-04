const os = require  (`os`)

//! qaysi systemdan kirayotganimzni aniqlab beradi 
// console.log(os.platform()); 

//! kampiyuter haqidagi barcha ma'lumotlarni chiqarib beradi
// console.log(os.cpus());

//! arxitekturasini chiqarib beradi 
// console.log(os.arch());

//! noutbookda qancha joy bor ekanligini chiqarib beradi
// console.log(os.freemem());

//! qancha bosh joy qolganini chiqarib beradi
// console.log(os.totalmem());

//! entry point  uzimizni homedir ya'ni usha noutbookni ochganizmda quyilgan nom
console.log(os.homedir());


// ! bu narsalarni amalayotda qachonki biron nimani yuklash kerak bulganda 
//! usha homedirga kirb ichida joy bor yoki yuqligini aniqlab olshda ishlatiladi 

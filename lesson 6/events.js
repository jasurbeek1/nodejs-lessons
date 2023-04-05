const Events = require ('events')

//! events ni doim chaqirb olganda katta harf bilan chaqirb olamz 
//! chunki doim events bilan ishlaganimzda class lar bilan ishlashimz kerak buladi

class  Logger extends Events {      //! buyerda hozir eventsni extends lab oldik va endi shu eventsni ichidagi methodlarni ham bemalol chaqrib ishlatsak buladi    
log(a,b) {      //! buyerda esa uzimiz log degan mehtodni creat qilb olayapmz  va uni ichiga matematik parameter kiritayapmz
        this.emit(`calculate`, a + b)   //! emit mehtodni vazifasi malumotlarni kursatish 
        //! this qilib olganimzda eventsni ichidagi mehtodlarni ham bemalol ishlata olamiz 
        //! emit ichiga (function nomi argumentlarni ) qabul qiladi 
    }
}


const logger = new Logger();    // ! bu yerda biz hozir events ni extends larini olib oldik 


logger.on(`calculate`, (data) => {      //!  buyerda tepada ochilgan Logger class yani usha eventsdagi mehtodlarni bemalol ishlata olamiz 
    //! on mehtodi events mehtod hisoblanadi vazifasi esa eshitovchi buladi 
    //! on mehtodini ichiga tepada uzimz ochgan `calculate` methodi ishga tushganda   on mehtodi ishga tushdi va bizga kerakli malumotni kursatib beradi
    //! on ichiga parameter nomi va callback  va uzimizni data kitiladi

    console.log(data);
});

logger.log(99, 1)   //! buyerda esa logger methodini ishga tushirlaypati va ichiga data kerak bulgan malumot kiritilayapti
logger.log(98, 2)
logger.log(97, 3)
logger.log(96, 4)
logger.log(95, 5)


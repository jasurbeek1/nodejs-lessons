const path = require (`path`)
const fs = require (`fs`);
const { buffer } = require("stream/consumers");

// fs.mkdir(path.join(__dirname, `open`), err => {
//     if(err) throw new Error()

//     console.log(`open failed`);
// })

// fs.mkdir(path.join(__dirname, `notes`), err => {
//     console.log(err);
//     if(err) throw new Error()

//     console.log(`open notes`);
// })

fs.writeFile(path.join(__dirname, `notes` , `march.txt`), `create new course nodeJS`, err => {

    if(err) throw new Error()


    console.log(`open failed`);


    fs.appendFile(path.join(__dirname, `notes`, `march.txt`), `and march information`, err =>{
        if(err) throw new Error()

        console.log(`falied successfully`);
    })
    
    fs.readFile(path.join(__dirname, `notes`, `march.txt`), `utf-8`,(err, data) => {
        console.log(err);
        if(err) throw new Error()
    
        console.log(Buffer.from(data).toString());
    })
})


//! bu functionda writFile async function bulib ishlayati ya'ni 
//! writeFiledan keying kelgan appendFile da kelayogan komanda ishlaguncha 
//! readFile birinchi ishlab berayapti undna keyin esa appendFile  da kelgan uzgarsh ishlab berayapti 
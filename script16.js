console.log("start")

let nama = "otong"

if (nama === "otong"){
    console.log("haiiii otong")
} else if(nama === "ucup"){
    console.log("haiii ucup")
} else {
    console.log("kamu bukan siapa2")
}

switch(nama){
    case "otong":
        console.log("switch case otong")
        break;
    case "ucup":
        console.log("switch case ucup")
        break;
    default:
        console.log("switch case nobody")
}
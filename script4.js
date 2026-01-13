let dataString = " DUATA STRING";
console.log(dataString);

// escaping string (\' \" \n \\ \r \t \b \f)
let data1 = 'ucup berkata"anjai ganteng"';
console.log(data1);
let data2 = "sotong berkata\"cihuy\"";
console.log(data2);
let data3 = "ucup pergi mancing, \nasekkkk"
console.log(data3);

// literal string
let namaDepan = "Udin";
let namaBelakang = "Hisbulah";
let umur = 9;
let namaLengkap = namaDepan + " " + namaBelakang + " " + umur;
console.log(namaLengkap);

// lebih gampang nya 
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);
// oprasi string 

let dataString = "ABCDEF"
let dataChar = dataString.charAt(0);
console.log(`karakter pada index 0 = ${dataChar}`);
dataChar = dataString.charAt(1);
console.log(`karakter pada index 1 = ${dataChar}`);
dataChar = dataString.charAt(2);
console.log(`karakter pada index 2 = ${dataChar}`);
dataChar = dataString.charAt(3);
console.log(`karakter pada index 3 = ${dataChar}`);
dataChar = dataString.charAt(4);
console.log(`karakter pada index 4 = ${dataChar}`);

// menyambung kata

let namaDepan = "abdi";
let namaBelakang = "sugeng";

let namaLengkap = namaDepan.concat(' ',namaBelakang);
console.log(namaLengkap);

// mengambil index mengambil kemunculan pertama
console.log(namaLengkap.indexOf('b'));
console.log(namaLengkap.indexOf('i'));
console.log(namaLengkap.indexOf('a'));
console.log(namaLengkap.indexOf('d'));
console.log(namaLengkap.indexOf('n'));
console.log(namaLengkap.indexOf('s'));

// substring
let namaLengkap_3_11 = namaLengkap. substring(3,11);
console.log(namaLengkap_3_11);
console.log(namaLengkap.substring(3,11));

// slice 
console.log(namaLengkap.slice(3,11));
console.log(namaLengkap.slice(11,3));

// replace

let namabaru = namaLengkap.replace('abdi sugeng' , 'otong sugeng');
console.log(namabaru);

// tolower
console.log(namaLengkap.toLowerCase());


// uppercase
console.log(namaLengkap.toUpperCase());

// extract data

let dataString2 = '10';
console.log(typeof dataString2);
let dataInterger = parseInt(dataString2);
console.log(dataInteger);
console.log(typeof dataInterger);

let dataString3 = ' 10.125'
console.log(typeof dataString3);
let dataFloat = parseFloat(dataString3);
console.log(dataFloat);
console.log(typeof dataFloat);



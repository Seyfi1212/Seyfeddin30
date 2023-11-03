let Nihadceki2=95;
let Nihadboy2=188;
let Nailboy2=176;
let Nailceki2=85;
let NihadBKI2= Nihadceki2/(Nihadboy2*Nihadboy2);
let NailBKI2= Nailceki2/(Nailboy2*Nailboy2);
console.log (NihadBKI2);
console.log (NailBKI2);

let muqayise2=(NihadBKI2>NailBKI2);
console.log (typeof muqayise);
if (muqayise2){
    console.log ("Nihadin BKI Nailin BKI den boyukdur ");}
    else{
        console.log ("Nailin BKI boyukdur");
    }
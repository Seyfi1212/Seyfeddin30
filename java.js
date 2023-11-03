let Nihadceki=78;
let Nihadboy=169;
let Nailboy=195;
let Nailceki=92;
let NihadBKI= Nihadceki/(Nihadboy*Nihadboy);
let NailBKI= Nailceki/(Nailboy*Nailboy);
console.log (NihadBKI);
console.log (NailBKI);

let muqayise=(NihadBKI>NailBKI);
console.log (typeof muqayise);
if (muqayise){
    console.log ("Nihadin BKI Nailin BKI den boyukdur ");}
    else{
        console.log ("Nailin BKI boyukdur");
    }

    
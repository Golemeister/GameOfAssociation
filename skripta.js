let brAsocijacije;
let ukupnoVreme;
let vremeIgraci;
let igrac = "p";
let provera = 0;
let nizKolona = [
    {
        a:0,
        b:0,
        c:0,
        d:0
    }
]

let nizAsocijacija = [
    {
        a1:"boja",
        a2:"osa",
        a3:"mrlja",
        a4:"groznica",
        a:"zuta",
        b1:"dvor",
        b2:"voznja",
        b3:"nasta",
        b4:"noc",
        b:"luda",
        c1:"pomoc",
        c2:"utakmica",
        c3:"drug",
        c4:"jaran",
        c:"prijatelj",
        d1:"izabrani",
        d2:"pregled",
        d3:"praksa",
        d4:"doktor",
        d:"lekar",
        kp:"kuca",
    },
    {
        a1:"salata",
        a2:"jug",
        a3:"mango",
        a4:"kivi",
        a:"voce",
        b1:"industrija",
        b2:"preradjivac",
        b3:"koren",
        b4:"gradja",
        b:"drvo",
        c1:"kragujevac",
        c2:"nis",
        c3:"novi sad",
        c4:"beograd",
        c:"srbija",
        d1:"kraljica",
        d2:"kup nacija",
        d3:"unija",
        d4:"mali",
        d:"afrika",
        kp:"sljiva",
    },
    {
        a1:"festival",
        a2:"foto-aparat",
        a3:"tableta",
        a4:"mjuzikl",
        a:"film",
        b1:"odelo",
        b2:"navika",
        b3:"berza",
        b4:"honorar",
        b:"rad",
        c1:"odgovor",
        c2:"alergija",
        c3:"lanac",
        c4:"hemija",
        c:"reakcija",
        d1:"pesak",
        d2:"fifa",
        d3:"uefa",
        d4:"stadion",
        d:"fudbal",
        kp:"akcija"
    }
]

function prebaci_na_drugu_stranu(){

    window.location.href ="asocijacije_igra.html";

}

function kreniIgru(){

    brAsocijacije = Math.floor(Math.random()*3);
    let imePrvog = prompt("Prvi igrac unosi ime:");
    while(imePrvog == null){
        imePrvog = prompt("Unesite ponovo ime:");
    }
    let imeDrugog = prompt("Drugi igrac unosi ime:");
    while(imeDrugog == null){
        imeDrugog = prompt("Unesite ponovo ime:");
    }

    document.getElementById("imep").innerHTML = imePrvog;
    document.getElementById("imec").innerHTML = imeDrugog;

    ukupnoVreme = 240;
    vremeIgraci = 15;

    zapocniIgru();

    alert("Plavi igrac je na potezu!");
}

let stopericaHandlerU = null;
let stopericaHandlerP = null;
function zapocniIgru() {
    stopericaHandlerU = setInterval(stoperica,1000);
    zapocniPotez();
}

function zapocniPotez(){
    stopericaHandlerP = setInterval(potez,1000);
}

function stoperica() {
    if(ukupnoVreme == 0 )
    {
        alert("Vreme isteklo!");
    }
    else
    {
    ukupnoVreme--;
    document.getElementById("vreme").innerHTML = ukupnoVreme;
    }
}

function potez(){
    if(vremeIgraci == 0)
    {
        promeniPotez();
    }
    else
    {
    vremeIgraci--;
    document.getElementById("vreme"+igrac).innerHTML = vremeIgraci;
    }
}

function zaustaviIgraca(){
    clearInterval(stopericaHandlerP);
}

function zaustaviIgru(){

    clearInterval(stopericaHandlerU);
}



    function promeniPotez(){

    if(igrac == "p")
    {
        alert("Crveni igrac na potezu!");
        igrac = "c";
        otvorenopolje = false;
        pogodjenakolona = false;
        pogodjenokonacno = false;
        zaustaviIgraca();
        zapocniPotez();
        document.getElementById("vremep").innerHTML = 15;
    }
    else
    {
        alert("Plavi igrac na potezu!");
        igrac = "p";
        otvorenopolje = false;
        pogodjenakolona = false;
        pogodjenokonacno = false;
        zaustaviIgraca();
        zapocniPotez();
        document.getElementById("vremec").innerHTML = 15;
    }
    vremeIgraci = 15;
}

let otvorenopolje = false;

function otvoriPolje(button,id){
    if (otvorenopolje == false){
        button.value = nizAsocijacija[brAsocijacije][id];
        nizKolona[0][id.slice(0,-1)]++;
        otvorenopolje = true;
    }
}

let pogodjenakolona = false;

function pogodiKolonu(button,id){
    if(pogodjenakolona == false)
    {
        let unetarec;
        unetarec = prompt("Unesi vrednost kolone "+id);
        if(unetarec == nizAsocijacija[brAsocijacije][id])
        {
            alert("Pogodjena kolona "+ id +"!");
            bodovanjeKolona(id);
            nizKolona[0][id] = 5;
        }
        else
        {
            alert("Netacno!");
        }
        pogodjenakolona = true;
    }
}

let brbodovap = 0;
let brbodovac = 0;

function bodovanjeKolona(ime){

    if(igrac == "p")
    {
        brbodovap += (5 - nizKolona[0][ime])*5;
        document.getElementById("brojbodovaP").innerHTML = brbodovap;
        const polja = document.getElementsByName(ime);
        document.getElementById(ime).value = nizAsocijacija[brAsocijacije][ime];
        for (const polje of polja)
        {
            polje.classList.add("blue");
            
        }
        for(let i = 1;i<5;i++)
        {
            document.getElementById(ime+i).value = nizAsocijacija[brAsocijacije][ime+i];
        }
        
    }
    else
    {
        const polja = document.getElementsByName(ime);
        brbodovac += (5 - nizKolona[0][ime])*5;
        document.getElementById("brojbodovaC").innerHTML = brbodovac;
        document.getElementById(ime).value = nizAsocijacija[brAsocijacije][ime];
        for (const polje of polja)
        {
            polje.classList.add("red");
            
        }
        for(let i = 1;i<5;i++)
        {
            document.getElementById(ime+i).value = nizAsocijacija[brAsocijacije][ime+i];
        }
    }
}

let pogodjenokonacno = false;

function pogodiKonacno(button,id){

    if(pogodjenokonacno == false)
    {
        let resenje = prompt("Unesi resenje:");
        if(resenje == nizAsocijacija[brAsocijacije].kp)
        {   
            alert("BRAVO!");
            zaustaviIgraca();
            zaustaviIgru();
            let i = 0;
            while(i<4)
            {
                switch(i)
                {
                    case 0:if(nizKolona[0]["a"] != 5)
                            {
                                bodovanjeKolona("a");
                            }break;
                    case 1:if(nizKolona[0]["b"] != 5)
                            {
                                bodovanjeKolona("b");
                            }break;
                    case 2:if(nizKolona[0]["c"] != 5)
                            {
                                bodovanjeKolona("c");
                            }break;
                    case 3:if(nizKolona[0]["d"] != 5)
                            {
                                bodovanjeKolona("d");
                            }break;
                }
                i++;
            }
            
            button.value = nizAsocijacija[brAsocijacije].kp;
            const polje = document.getElementById(id);

            if(igrac == "p")
            {
                
                polje.classList.add("blue");
                brbodovap += 15;
            }
            else
            { 
                brbodovac += 15;
                polje.classList.add("red");
            }
            pobednik();
        }
        else
        {
            alert("Greska");
        }
        pogodjenokonacno = true;
    }
}


function pobednik(){

    if(brbodovap > brbodovac)
    {
        alert("Plavi igrac je pobedio!");
    }
    else if(brbodovac > brbodovap)
    {
        alert("Crveni igrac je pobedio!");
    }
    else
    {
        alert("Rezultat je neresen!");
    }
}
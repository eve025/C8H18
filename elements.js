window.onload = function(){
    let btn = document.getElementById("boton");
btn.addEventListener('click',buscar);

function buscar(){
    let element = document.getElementById("name").value;

    if(element == "H" || element =="Hidrogeno"){
        let numero = "1";
        let masa = "1.007 u";
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`;
        document.write(text);
    }
           
    else if(element == "He" || element =="Helio"){
        let numero = 2;
        let masa = 4.002 + " u";
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`;
        document.write(text);
    }        
    else if (element == "Li" || element =="Litio"){
        let numero = 3;
        let masa = 6.938 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    
    else if(element == "Be" || element =="Berilio"){
        let numero = 4;
        let masa = 9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "B" || element =="Boro"){
        let numero = 5;
        let masa = 10.8 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "C" || element =="Carbono"){
        let numero = 6;
        let masa = 12 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "N" || element =="Nitrogeno"){
        let numero = 7;
        let masa = 14 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "O" || element =="Oxigeno"){
        let numero = 8;
        let masa = 16 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "F" || element =="Fluor"){
        let numero = 9;
        let masa = 18.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Ne" || element =="Neon"){
        let numero = 10;
        let masa = 20.17 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Na" || element =="Sodio"){
        let numero = 11;
        let masa = 23 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Mg" || element =="Magnesio"){
        let numero = 12;
        let masa =  + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Al" || element =="Aluminio"){
        let numero = 13;
        let masa = 26.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Si" || element =="Silicio"){
        let numero = 14;
        let masa = 28 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "P" || element =="Fosforo"){
        let numero = 15;
        let masa = 30.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "S" || element =="Azufre"){
        let numero = 16;
        let masa = 32 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Cl" || element =="Cloro"){
        let numero = 17;
        let masa = 35.4 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ar" || element =="Argon"){
        let numero = 18;
        let masa = 39.94 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "K" || element =="Potasio"){
        let numero = 19;
        let masa = 39.09 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ca" || element =="Calcio"){
        let numero = 20;
        let masa = 40.07 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Sc" || element =="Escandio"){
        let numero = 21;
        let masa = 44.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Ti" || element =="Titanio"){
        let numero = 22;
        let masa = 47.86 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "V" || element =="Vanadio"){
        let numero = 23;
        let masa = 50.94 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Cr" || element =="Cromo"){
        let numero = 24;
        let masa = 52 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Mn" || element =="Magnesio"){
        let numero = 25;
        let masa = 54.93 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Fe" || element =="Hierro"){
        let numero = 26;
        let masa = 55.84 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Co" || element =="Cobalto"){
        let numero = 27;
        let masa = 58.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Ni" || element =="Niquel"){
        let numero = 28;
        let masa = 58.63 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Cu" || element =="Cobre"){
        let numero = 29;
        let masa = 63.5 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Zn" || element =="Zinc"){
        let numero = 30;
        let masa = 65.38 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ga" || element =="Galio"){
        let numero = 31;
        let masa = 69.72 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ge" || element =="Germanio"){
        let numero = 32;
        let masa = 72.63 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "As" || element =="Arsenico"){
        let numero = 33;
        let masa = 74.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Se" || element =="Selenio"){
        let numero = 34;
        let masa = 78.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Br" || element =="Bromo"){
        numero = 35;
        masa = 80 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Kr" || element =="Kripton"){
        numero = 36;
        masa = 83.8 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Rb" || element =="Rubidio"){
        numero = 37;
        masa = 85.46 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Sr" || element =="Estroncio"){
        numero = 38;
        masa = 87.62 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Y" || element =="Itrio"){
        numero = 39;
        masa = 88.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Zr" || element =="Zirconio"){
        numero = 40;
        masa = 91.224 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Nb" || element =="Niobio"){
        numero = 41;
        masa = 92.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Mo" || element =="Molibdeno"){
        numero = 42;
        masa = 95.95 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Tc" || element =="Tecnecio"){
        numero = 43;
        masa = 98 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ru" || element =="Rutenio"){
        numero = 44;
        masa = 101.07 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Rh" || element =="Rodio"){
        numero = 45;
        masa = 102.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Pd" || element =="Paladio"){
        numero = 46;
        masa = 106.42 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ag" || element =="Plata"){
        numero = 47;
        masa = 107.86 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Cd" || element =="Cadmio"){
        numero = 48;
        masa = 112.4 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "In" || element =="Indio"){
        numero = 49;
        masa = 114.81 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Sn" || element =="Estaño"){
        numero = 50;
        masa = 118.7 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Sb" || element =="Antimonio"){
        numero = 51;
        masa = 121.76 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if(element == "Te" || element =="Telurio"){
        numero = 52;
        masa = 127.6 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "I" || element =="Yodo"){
        numero = 53;
        masa = 126.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Xe" || element =="Xenon"){
        numero = 54;
        masa = 131.3 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Cs" || element =="Cesio"){
        numero = 55;
        masa = 133 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ba" || element =="Bario"){
        numero = 56;
        masa = 137 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Hf" || element =="Hafnio"){
        numero = 72;
        masa = 178.5 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Ta" || element =="Tantalio"){
        numero = 73;
        masa = 180.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "W" || element =="Volframio"){
        numero = 74;
        masa = 183.8 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Re" || element =="Renio"){
        numero = 75;
        masa = 186.2 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Os" || element =="Osmio"){
        numero = 76;
        masa = 190 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Ir" || element =="Iridio"){
        numero = 77;
        masa = 192.2 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Pt" || element =="Platino"){
        numero = 78;
        masa = 195 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Au" || element =="Oro"){
        numero = 79;
        masa = 196.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Hg" || element =="Mercurio"){
        numero = 80;
        masa = 200.6 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Tl" || element =="Talio"){
        numero = 81;
        masa = 204.3 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Pb" || element =="Plomo"){
        numero = 82;
        masa = 207 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    } 
    else if (element == "Bi" || element =="Bismuto"){
        numero = 83;
        masa = 208.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Po" || element =="Polonio"){
        numero = 84;
        masa = 209 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    } 
    else if (element == "At" || element =="Astato"){
        numero = 85;
        masa = 210 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Rn" || element =="Radon"){
        numero = 86;
        masa = 222 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }           
    
    else if (element == "Fr" || element =="Francio"){
        numero = 87;
        masa = 223 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }        
    else if (element == "Ra" || element =="Radio"){
        numero = 88;
        masa = 226 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Rf" || element =="Rutherfordio"){
        numero = 104;
        masa = 261 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Db" || element =="Dubnio"){
        numero = 105;
        masa = 262 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Sg" || element =="Seaborgio"){
        numero = 106;
        masa = 266 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Bh" || element =="Bohrio"){
        numero = 107;
        masa = 264 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Hs" || element =="Hassio"){
        numero = 108;
        masa = 267 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Mt" || element =="Meitnerio"){
        numero = 109;
        masa = 268 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Ds" || element =="Darmstadtio"){
        numero = 110;
        masa = 271 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Rg" || element =="Roentgenio"){
        numero = 111;
        masa = 272 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Cn" || element =="Copernicio"){
        numero = 112;
        masa = 285 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Nh" || element =="Nihonium"){
        numero = 113;
        masa = 284 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Fi" || element =="Flerovio"){
        numero = 114;
        masa = 289 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    } 
    else if (element == "Mc" || element =="Moscovium"){
        numero = 115;
        masa = 288 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Lv" || element =="Livermorio"){
        numero = 116;
        masa = 293 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    } 
    else if (element == "Ts" || element =="Tennessine"){
        numero = 117;
        masa = 294 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }       
    else if (element == "Og" || element =="Oganesson"){
        numero = 118;
        masa = 294 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    
    
    else if (element == "La" || element =="Lantano"){
        numero = 57;
        masa = 138.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Ce" || element =="Cerio"){
        numero = 58;
        masa = 140 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Pr" || element =="Praseodimio"){
        numero = 59;
        masa = 140.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Nd" || element =="Neodimio"){
        numero = 60;
        masa = 144 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Pm" || element =="Prometio"){
        numero = 61;
        masa = 145 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Sm" || element =="Samario"){
        numero = 62;
        masa = 150 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Eu" || element =="Europio"){
        numero = 63;
        masa = 151.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Gd" || element =="Gadolinio"){
        numero = 64;
        masa = 157 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Tb" || element =="Terbio"){
        numero = 65;
        masa = 158.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Dy" || element =="Disprosio"){
        numero = 66;
        masa = 162.5 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Ho" || element =="Holmio"){
        numero = 67;
        masa = 164.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Er" || element =="Erbio"){
        numero = 68;
        masa = 167 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Tm" || element =="Tulio"){
        numero = 69;
        masa = 168.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Yb" || element =="Iterbio"){
        numero = 70;
        masa = 173 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Lu" || element =="Lutecio"){
        numero = 71;
        masa = 174.9 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    
    
    else if (element == "Ac" || element =="Actinio"){
        numero = 89;
        masa = 227 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Th" || element =="Torio"){
        let numero = 90;
        let masa = 232 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Pa" || element =="Protactinio"){
        let numero = 91;
        let masa = 231 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "U" || element =="Uranio"){
        let numero = 92;
        let masa = 238 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Np" || element =="Neptunio"){
        let numero = 93;
        let masa = 237 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Pm" || element =="Plutonio"){
        let numero = 94;
        let masa = 244 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Am" || element =="Americio"){
        let numero = 95;
        let masa = 243 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Cm" || element =="Curio"){
        let numero = 96;
        let masa = 247 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Bk" || element =="Berkelio"){
        let numero = 97;
        let masa = 247 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Cf" || element =="Californio"){
        let numero = 98;
        let masa = 251 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Es" || element =="Einstenio"){
        let numero = 99;
        let masa = 252 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Fm" || element =="Fermio"){
        let numero = "100";
        let masa = "257";
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Md" || element =="Mendelevio"){
        let numero = 101;
        let masa = 258 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "No" || element =="Nobelio"){
        let numero = 102;
        let masa = 259 + " u"
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`
;
        document.write(text);
    }          
    else if (element == "Lr" || element =="Laurencio"){
        let numero = 103;
        let masa =  262 + "u";
        let text = `Simbolo quimico: <b>${element}</b><br>
        Nombre del elemento: <b></b><br>
        Numero atomico: <b>${numero}</b><br>
        Masa atomica: <b>${masa}</b><br>`;
        document.write(text);
    }
    else {
        document.write("Elemento invalido, porfavor intente denuevo, no utilice caracteres especiales...");
    }       
    document.write(`<a href="index.html" style="background:linear-gradient(to bottom right,LightBlue,#aaaa, #fff);
                width:50vw;font-weight:700;text-decoration:none;border-radius:10px;border:1px solid #000;
                padding:0.5em;color:#000;position:relative;top:200px;left:50%;">Regresar</a>`);
    // setTimeout(function(){
    //     location.href="index.html";}
    //     1000*2);
}           
}

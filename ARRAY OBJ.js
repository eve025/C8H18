// let arregloObj = [{0}, {1}, {2}]; //EJEMPLO

var elementosArray = [
    {simbolo:"H", nombre:"Hidrogeno", numero: "1", masa: "1.007 u" },
    {simbolo:"He", nombre:"Helio", numero: "2", masa: "4.002 u" },
    {simbolo:"Li", nombre:"Litio", numero: "3", masa: "6.938 u"},
    {simbolo:"Be", nombre:"Berilio", numero: "4", masa: "9 u"},
    {simbolo:"B", nombre: "Boro", numero: "5", masa: "10.8 u"},
    {simbolo:"C", nombre: "Carbono", numero: "6", masa: "12 u"},
    {simbolo:"N", nombre: "Nitrogeno", numero: "7", masa: "14 u"},
    {simbolo:"O", nombre: "Oxigeno", numero: "8", masa: "16 u"},
    {simbolo:"F", nombre: "Fluor", numero: "9", masa: "18.9 u"},
    {simbolo:"Ne", nombre: "Neon", numero: "10", masa: "20.17 u"},
    {simbolo:"Na", nombre: "Sodio", numero: "11", masa: "23 u"},
    {simbolo:"Mg", nombre: "Magnesio", numero: "12", masa: "24.30 u"},
    {simbolo:"Al", nombre: "Aluminio", numero: "13", masa: "26.9 u"},
    {simbolo:"Si", nombre: "Silicio", numero: "14", masa: "28 u"},
    {simbolo:"P", nombre:"Fosforo", numero: "15", masa: "30.9 u" },
    {simbolo:"S", nombre: "Azufre", numero: "16", masa: "32 u" },
    {simbolo:"Cl", nombre: "Cloro", numero: "17", masa: "35.4 u"},
    {simbolo:"Ar", nombre: "Argon", numero: "18", masa: "39.94 u"},
    {simbolo:"K", nombre: "Potasio", numero: "19", masa: "39.09 u"},
    {simbolo:"Ca", nombre: "Calcio", numero: "20", masa: "40.07 u"},
    {simbolo:"Sc", nombre: "Escandio", numero: "21", masa: "44.9 u"},
    {simbolo:"Ti", nombre: "Titanio", numero: "22", masa: "47.86 u"},
    {simbolo:"V", nombre: "Vanadio", numero: "23", masa: "50.94  u"},
    {simbolo:"Cr", nombre: "Cromo", numero: "24", masa: "52 u"},
    {simbolo:"Mn", nombre: "Magnesio", numero:"25", masa: "54.93 u"},
    {simbolo:"Fe", nombre: "Hierro", numero: "26", masa: "55.84 u"},
    {simbolo:"Co", nombre: "Cobalto", numero: "27", masa: "58.9 u"},
    {simbolo:"Ni", nombre: "Niquel", numero: "28", masa: "58.63 u"},
    {simbolo:"Cu", nombre: "Cobre", numero: "29", masa: "63.5 u"},
    {simbolo:"Zn", nombre: "Zinc", numero: "30", masa: "65.38 u"},
    {simbolo:"Ga", nombre: "Galio", numero: "31", masa: "69.72 u"},
    {simbolo:"Ge", nombre: "Germanio", numero: "32", masa: "72.63 u"},
    {simbolo:"As", nombre: "Arsenico", numero: "33", masa: "74.9 u"},
    {simbolo:"Se", nombre: "Selenio", numero: "34", masa: "78.9  u"},
    {simbolo:"Br", nombre: "Bromo", numero: "35", masa: "80 u"},
    {simbolo:"Kr", nombre: "Kripton", numero: "36", masa: "83.8 u"},
    {simbolo:"Rb", nombre: "Rubidio", numero: "37", masa: "85.46 u"},
    {simbolo:"Sr", nombre: "Estroncio", numero: "38", masa: "87.62 u"},
    {simbolo:"Y", nombre: "Itrio", numero: "39", masa: "88.9 u"},
    {simbolo:"Zr", nombre: "Zirconio", numero: "40", masa: "91.224 u"},
    {simbolo:"Nb", nombre: "Niobio", numero: "41", masa: "92.9 u"},
    {simbolo:"Mo", nombre: "Molibdeno", numero: "42", masa: "95.95 u"},
    {simbolo:"Tc", nombre: "Tecnecio", numero: "43", masa: "98 u"},
    {simbolo:"Ru", nombre: "Rutenio", numero: "44", masa: "101.07  u"},
    {simbolo:"Rh", nombre: "Rodio", numero: "45", masa: "102.9 u"},
    {simbolo:"Pd", nombre: "Paladio", numero: "46", masa: "106.42 u"},
    {simbolo:"Ag", nombre: "Plata", numero: "47", masa: "107.86 u"},
    {simbolo:"Cd", nombre: "Cadmio", numero: "48", masa: "112.4 u"},
    {simbolo:"In", nombre: "Indio", numero: "49", masa: " 114.81 u"},
    {simbolo:"Sn", nombre: "Estaño", numero: "50", masa: "118.7 u"},
    {simbolo:"Sb", nombre: "Antimonio", numero: "51", masa: "121.76 u"},
    {simbolo:"Te", nombre: "Telurio", numero: "52", masa: "127.6 u"},
    {simbolo:"I", nombre: "Yodo", numero: "53", masa: "126.9 u"},
    {simbolo:"Xe", nombre: "Xenon", numero: "54", masa: "131.3 u"},
    {simbolo:"Cs", nombre: "Cesio", numero: "55", masa: "133 u"},
    {simbolo:"Ba", nombre: "Bario", numero: "56", masa: "137 u"},
    {simbolo:"Hf", nombre: "Hafnio", numero: "72", masa: "178.5 u"},
    {simbolo:"Ta", nombre: "Tantalio", numero: "73", masa: "180.9 u"},  
    {simbolo:"W", nombre: "Volframio", numero: "74", masa: "183.8 u"},
    {simbolo:"Re", nombre: "Renio", numero: "75", masa: "186.2 u"},
    {simbolo:"Os", nombre: "Osmio", numero: "76", masa: "190 u"},
    {simbolo:"Ir", nombre: "Iridio", numero: "77", masa: "192.2 u"},
    {simbolo:"Pt", nombre: "Platino", numero: "78", masa: "195 u"},
    {simbolo:"Au", nombre: "Oro", numero: "79", masa: "196.9 u"},
    {simbolo:"Hg", nombre: "Mercurio", numero: "80", masa: "200.6 u"},
    {simbolo:"Tl", nombre: "Talio", numero: "81", masa: "204.3 u"},
    {simbolo:"Pb", nombre: "Plomo", numero: "82", masa: "207 u"},
    {simbolo:"Bi", nombre: "Bismuto", numero: "83", masa: "208.9 u"},
    {simbolo:"Po", nombre: "Polonio", numero: "84", masa: "209 u"},
    {simbolo:"At", nombre: "Astato", numero: "85", masa: "210 u"},
    {simbolo:"Rn", nombre: "Radon", numero: "86", masa: "222 u"},
    {simbolo:"Fr", nombre: "Francio", numero: "87", masa: "223 u"},
    {simbolo:"Ra", nombre: "Radio", numero: "88", masa: "226S u"},
    {simbolo:"Rf", nombre: "Rutherfordio", numero: "104", masa: "261 u"},
    {simbolo:"Db", nombre: "Dubnio", numero: "105", masa: "262 u"},
    {simbolo:"Sg", nombre: "Seaborgio", numero: "106", masa: "266 u"},
    {simbolo:"Bh", nombre: "Bohrio", numero: "107", masa: "264 u"},
    {simbolo:"Hs", nombre: "Hassio", numero: "108", masa: "267 u"},
    {simbolo:"Mt", nombre: "Meitnerio", numero: "109", masa: "268 u"},
    {simbolo:"Ds", nombre: "Darmstadtio", numero: "110", masa: "271 u"},
    {simbolo:"Rg", nombre: "Roentgenio", numero: "111", masa: "272 u"},
    {simbolo:"Cn", nombre: "Copernicio", numero: "112", masa: "285 u"},
    {simbolo:"Nh", nombre: "Nihonium", numero: "113", masa: "284 u"},
    {simbolo:"Fi", nombre: "Flerovio", numero: "114", masa: "289 u"},
    {simbolo:"Mc", nombre: "Moscovium", numero: "115", masa: "288 u"},
    {simbolo:"Lv", nombre: "Livermorio", numero: "116", masa: "293 u"},
    {simbolo:"Ts", nombre: "Tennessine", numero: "117", masa: "294 u"},
    {simbolo:"Og", nombre: "Oganesson", numero: "118", masa: "294 u"},
    {simbolo:"La", nombre: "Lantano", numero: "57", masa: "138.9 u"},
    {simbolo:"Ce", nombre: "Cerio", numero: "58", masa: "140 u"},
    {simbolo:"Pr", nombre: "Praseodimio", numero: "59", masa: "140.9 u"},
    {simbolo:"Nd", nombre: "Neodimio", numero: "60", masa: "144 u"},
    {simbolo:"Pm", nombre: "Prometio", numero: "61", masa: "145 u"},
    {simbolo:"Sm", nombre: "Samario", numero: "62", masa: "150 u"},
    {simbolo:"Eu", nombre: "Europio", numero: "63", masa: "151.9 u"},
    {simbolo:"Gd", nombre: "Gadolinio", numero: "64", masa: "157 u"},
    {simbolo:"Tb", nombre: "Terbio", numero: "65", masa: "158.9 u"},
    {simbolo:"Dy", nombre: "Disprosio", numero: "66", masa: "162.5 u"},
    {simbolo:"Ho", nombre: "Holmio", numero: "67", masa: "164.9 u"},
    {simbolo:"Er", nombre: "Erbio", numero: "68", masa: "167 u"},
    {simbolo:"Tm", nombre: "Tulio", numero: "69", masa: "168.9 u"},
    {simbolo:"Yb", nombre: "Iterbio", numero: "70", masa: "173 u"},
    {simbolo:"Lu", nombre: "Lutecio", numero: "71", masa: "174.9 u"},
    {simbolo:"Ac", nombre: "Actinio", numero: "89", masa: "227 u"},
    {simbolo:"Th", nombre: "Torio", numero: "90", masa: "232 u"},
    {simbolo:"Pa", nombre: "Protactinio", numero: "91", masa: "231 u"},
    {simbolo:"U", nombre: "Uranio", numero: "92", masa: "238 u"},
    {simbolo:"Np", nombre: "Neptunio", numero: "93", masa: "237 u"},
    {simbolo:"Pu", nombre: "Plutonio", numero: "94", masa: "244 u"},
    {simbolo:"Am", nombre: "Americio", numero: "95", masa: "243 u"},
    {simbolo:"Cm", nombre: "Curio", numero: "96", masa: "247 u"},
    {simbolo:"Bk", nombre: "Berkelio", numero: "97", masa: "247 u"},
    {simbolo:"Cf", nombre: "Californio", numero: "98", masa: "251 u"},
    {simbolo:"Es", nombre: "Einstenio", numero: "99", masa: "252 u"},
    {simbolo:"Fm", nombre: "Fermio", numero: "100", masa: "257 u"},
    {simbolo:"Md", nombre: "Mendelevio", numero: "101", masa: "258 u"},
    {simbolo:"No", nombre: "Nobelio", numero: "102", masa: "259 u"},
    {simbolo:"Lr", nombre: "Laurencio", numero: "103", masa: "262 u"}
];

// console.log(elementosArray.length)
// alert(elementosArray[0].simbolo)

var input = document.getElementById("name");
// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("boton").click();
  }
});

//when button is pressed
document.getElementById("boton").addEventListener('click',buscar);

function buscar(){
    let div = document.querySelector("#RESULTADO");
    div.style.display = "block";

    let element = document.getElementById("name").value;
    let simbolo_txt = document.querySelector(".h4_res");
    let info = document.querySelector(".p_res");

    for(let i=0;i<elementosArray.length;i++){
        if(element == elementosArray[i].simbolo || element == elementosArray[i].nombre){
            simbolo_txt.textContent = elementosArray[i].simbolo;
            info.innerHTML = `<b>Nombre del elemento:</b> ${elementosArray[i].nombre}<br>
            <b>Numero atomico:</b> ${elementosArray[i].numero}<br>
            <b>Masa atomica:</b> ${elementosArray[i].masa}<br>`;
        }
    }         
}           

function out(){
    let div = document.querySelector("#RESULTADO");
    div.style.display = "none";
    input.value="";
}
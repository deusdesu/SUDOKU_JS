/**
 * sudoku pobiera wartoci liczbowe z inputów
 *
 * odpowiednio przYpisuje je obiektom
 *
 * każdY kafelek ma odpowiednie wartosci
 *
 * należY rozróżniać kafelki wg pionu(Y), poziomu(X) wg małego 9 pólowego kwadratu (nazYwanY później kwadratem, lub CUBE)
 *
 * liczba powinna zostać wpisana gdY:
 *      #w pionie, poziomie lub/i kwadracie została tYlko ta jedna liczba
 *      #inne, trudniejsze zależnosci heh
 *
 * tablice pomocnicze, poziomu, pionu i małego 9 pólowego kwadratu
 *
 * dodac kontrole poprawnosci tj czy liczby sa unikalne wg pozycjaX[], pozycjaY[] i CUBE[]
 *
    * jeżeli obiekt[i].value == '' szuka obiekt[i].value_around, które == false i sprawdza,
    * czy inne obiekty w wg CUBE też maja false, przy tym samym numerze, jeżeli nie to
    *  wstawia liczbe, przy krórej jest false xd
    *
 *
 *     szukaj_pustych(); //szuka pustych pól, może lepiej będzie działać na zapisanych polach?
 *     np tworzac odpowiednia funkcje?
 */
// ZMIENNE GLOBALNE ---------------------------------------------------------------------
// tablica poziomu,  numer_pozycji = [liczby w danej pozycji]
pozycjaX = [];
pozycjaX[1] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
pozycjaX[2] = [10, 11, 12, 13, 14, 15, 16, 17, 18];
pozycjaX[3] = [19, 20, 21, 22, 23, 24, 25, 26, 27];
pozycjaX[4] = [28, 29, 30, 31, 32, 33, 34, 35, 36];
pozycjaX[5] = [37, 38, 39, 40, 41, 42, 43, 44, 45];
pozycjaX[6] = [46, 47, 48, 49, 50, 51, 52, 53, 54];
pozycjaX[7] = [55, 56, 57, 58, 59, 60, 61, 62, 63];
pozycjaX[8] = [64, 65, 66, 67, 68, 69, 70, 71, 72];
pozycjaX[9] = [73, 74, 75, 76, 77, 78, 79, 80, 81];

// tablica pionu,  numer_pozycji = [liczby w danej pozycji]
pozycjaY = [];
pozycjaY[1] = [1, 10, 19, 28, 37, 46, 55, 64, 73];
pozycjaY[2] = [2, 11, 20, 29, 38, 47, 56, 65, 74];
pozycjaY[3] = [3, 12, 21, 30, 39, 48, 57, 66, 75];
pozycjaY[4] = [4, 13, 22, 31, 40, 49, 58, 67, 76];
pozycjaY[5] = [5, 14, 23, 32, 41, 50, 59, 68, 77];
pozycjaY[6] = [6, 15, 24, 33, 42, 51, 60, 69, 78];
pozycjaY[7] = [7, 16, 25, 34, 43, 52, 61, 70, 79];
pozycjaY[8] = [8, 17, 26, 35, 44, 53, 62, 71, 80];
pozycjaY[9] = [9, 18, 27, 36, 45, 54, 63, 72, 81];

// tablica kwadratu,  numer_pozycji = [liczby w danej pozycji]
CUBE = [];
CUBE[1] = [1, 2, 3, 10, 11, 12, 19, 20, 21];
CUBE[2] = [4, 5, 6, 13, 14, 15, 22, 23, 24];
CUBE[3] = [7, 8, 9, 16, 17, 18, 25, 26, 27];
CUBE[4] = [28, 29, 30, 37, 38, 39, 46, 47, 48];
CUBE[5] = [31, 32, 33, 40, 41, 42, 49, 50, 51];
CUBE[6] = [34, 35, 36, 42, 43, 44, 52, 53, 54];
CUBE[7] = [55, 56, 57, 64, 65, 66, 73, 74, 75];
CUBE[8] = [58, 59, 60, 67, 68, 69, 76, 77, 78];
CUBE[9] = [61, 62, 63, 70, 71, 72, 79, 80, 81];


/**
 * [obiekt tablica obiektów, każde pole ma odpowiadajcY mu obiekt o takim samYm numerze id]
 */
var obiekt = [9 * 9];
var value = [];

/**
 * [pętla tworzca obiekty, przypisujca im odpowiednie parametry]
 **/
for (var i = 1; i <= 81; i++) {
    obiekt[i] = {
        X: 0, // okresla w którym pozycjaX_ znajduje się obiekt, domyslnie 0, czyli nigdzie
        Y: 0, // okresla w którym pozycjaY_ znajduje się obiekt, domyslnie 0, czyli nigdzie
        CUBE: 0, // okresla w którym CUBE_ znajduje się obiekt, domyslnie 0, czyli nigdzie
        value: '', // okresla jaka wartosc ma obiekt[i]
        ilosc_mozliwosci: 9, // zmiejsza się ze każdym razem, gdy zostawnie przyznana wartosc true dla "obiekt[i].value_around"
        value_around: [0, false, false, false, false, false, false, false, false, false],
        co_zostalo: "" // tu powinna zostać wpisana ostatnia liczba (czyli ta przy której .ilosc_mozliwosci = 1, czyli jest tylko 1 false przy .value_around;
        /* okresla czy wystepuje gdzies wsrod pozycjaX[i], pozycjaY[i] lub CUBE[i]
        wg wzoru value_around[0] nic nie znaczy, value_around[1] oznacza czy wartosc 1 wystepuje gdzies wsrod pozycjaX[1], pozycjaY[1] lub CUBE[1], reszta analogicznie aż do value_around[9].
        */
    };
    // przYpisuje odpowiednie wartosci X. Dla pierwszego poziomu X = 1, dla drugiego poziomu X = 2, etc etc od dziewiatego X = 9;
    if (i <= 9) {
        obiekt[i].X = 1;
    } else if (i <= 18) {
        obiekt[i].X = 2;
    } else if (i <= 27) {
        obiekt[i].X = 3;
    } else if (i <= 36) {
        obiekt[i].X = 4;
    } else if (i <= 45) {
        obiekt[i].X = 5;
    } else if (i <= 54) {
        obiekt[i].X = 6;
    } else if (i <= 63) {
        obiekt[i].X = 7;
    } else if (i <= 72) {
        obiekt[i].X = 8;
    } else if (i <= 81) {
        obiekt[i].X = 9;
    }

    // przYpisuje odpowiednie wartosci Y. Dla dziewitego pionu Y = 9, Dla ósmego pionu Y = 8, etc do Y = 1;
    if (i % 9 == 0) {
        obiekt[i].Y = 9;
    } else if ((i + 1) % 9 == 0) {
        obiekt[i].Y = 8;
    } else if ((i + 2) % 9 == 0) {
        obiekt[i].Y = 7;
    } else if ((i + 3) % 9 == 0) {
        obiekt[i].Y = 6;
    } else if ((i + 4) % 9 == 0) {
        obiekt[i].Y = 5;
    } else if ((i + 5) % 9 == 0) {
        obiekt[i].Y = 4;
    } else if ((i + 6) % 9 == 0) {
        obiekt[i].Y = 3;
    } else if ((i + 7) % 9 == 0) {
        obiekt[i].Y = 2;
    } else if ((i + 8) % 9 == 0) {
        obiekt[i].Y = 1;
    }

    // przypisuje odpowiednie wartosci CUBE dla CUBE: 1 id to: 1,2,3, 10,11,12, 19,20,21;
    if (i >= 1 && i <= 3 || i >= 10 && i <= 12 || i >= 19 && i <= 21) {
        obiekt[i].CUBE = 1;
    } else if (i >= 4 && i <= 6 || i >= 13 && i <= 15 || i >= 22 && i <= 24) {
        obiekt[i].CUBE = 2;
    } else if (i >= 7 && i <= 9 || i >= 16 && i <= 18 || i >= 25 && i <= 27) {
        obiekt[i].CUBE = 3;
    } else if (i >= 28 && i <= 30 || i >= 37 && i <= 39 || i >= 46 && i <= 48) {
        obiekt[i].CUBE = 4;
    } else if (i >= 31 && i <= 33 || i >= 40 && i <= 42 || i >= 49 && i <= 51) {
        obiekt[i].CUBE = 5;
    } else if (i >= 34 && i <= 36 || i >= 43 && i <= 45 || i >= 52 && i <= 54) {
        obiekt[i].CUBE = 6;
    } else if (i >= 55 && i <= 57 || i >= 64 && i <= 66 || i >= 73 && i <= 75) {
        obiekt[i].CUBE = 7;
    } else if (i >= 58 && i <= 60 || i >= 67 && i <= 69 || i >= 76 && i <= 78) {
        obiekt[i].CUBE = 8;
    } else if (i >= 61 && i <= 63 || i >= 70 && i <= 72 || i >= 79 && i <= 81) {
        obiekt[i].CUBE = 9;
    }


}

//wstawia pola sudoku
var kafelek = '';
for (i = 1; i <= 81; i++) {
    kafelek = kafelek + '<input id="id' + i + '" maxlength="1" type="text" value=""/>';
    if (i % 9 == 0) kafelek = kafelek + '<div style="clear:both;"></div>';
}
kafelek = kafelek + '<div style="clear:both;"></div>';
document.getElementById("pole_sudoku").innerHTML = kafelek;
// wstawia bordery
for (i = 1; i <= 81; i++) {
    if (i % 3 == 0 && i % 9 != 0) document.getElementById("id" + i).style.borderRight = "1px solid #000";
    if (i >= 19 && i <= 27) document.getElementById("id" + i).style.borderBottom = "1px solid #000";
    if (i >= 46 && i <= 54) document.getElementById("id" + i).style.borderBottom = "1px solid #000";
}

//onclick dla przycisku
document.getElementById("input_button").addEventListener("click", send_nudes_yhm_numers);
var czy_false = 0;
//var pierwsze_klikniecie = false;

// FUNKCJE ---------------------------------------------------------------------

/**
 * [send_nudes_yhm_numers description] wstawia w tablice value[] wartosci wg wpisanych liczb
 * @return {[type]} [description] odsyła do funkcji szukaj_pustych()
 */
function send_nudes_yhm_numers() {
    for (i = 1; i <= 81; i++) {
        value[i] = document.getElementById("id" + i).value; // linia testowa nwm czy będzie miała zastosowanie
        obiekt[i].value = document.getElementById("id" + i).value;
        if(obiekt[i].value != ''){
            obiekt[i].ilosc_mozliwosci = 0;
            for (o = 1; o <= 9; o++) {
                obiekt[i].value_around[o] = true;
            }
            szukaj_i_zmniejsz(i);
        }
    }
   /* if (pierwsze_klikniecie == false) {
        //zmiejsz_ilosc_mozliwosci();
    }*/
   // szukaj_pustych(); //szuka pustych pól, może lepiej będzie działać na zapisanych polach?
   //znajdz_numer();
  //  pierwsze_klikniecie = true;
}

/**
 * [znajdz_numer description] szuka numeru i dla kazdego pola w tym samym poziomie, pionie i cube
 * @return {[type]} [description]
 */
function znajdz_numer(){
    for (i = 1; i <= 81; i++) { // 9 zamienić na81---------------------------------------------------------------------
        if (obiekt[i].value != '' && isNaN(obiekt[i].value) == false) {
            szukaj_i_zmniejsz(i);
        }
    }
}

function szukaj_i_zmniejsz(numer){ // zmiejsza wartosci obiektów w tym samycm poionie, poziomie i CUBE
    numerX = obiekt[numer].X;
    numerY = obiekt[numer].Y;
    numerCUBE = obiekt[numer].CUBE;
    wartosc  = obiekt[numer].value;
    for (u = 0; u <= 8; u++) {
        if(obiekt[pozycjaX[numerX][u]].ilosc_mozliwosci != 0){ // wszędzie, oprócz wczeniej liczby ( numer != pozycjaX[numerX][i] && )+ oiekt nie ma .value
            if(obiekt[pozycjaX[numerX][u]].value_around[wartosc] == false){ // przy wielu kliknięciach .ilosc_wartosci nie zostanie zmiejszona do 0
                obiekt[pozycjaX[numerX][u]].ilosc_mozliwosci--;
            }
            obiekt[pozycjaX[numerX][u]].value_around[wartosc] = true; //wstawia do wszystkich obiektów w tym o tej samej pozycjiX .value_around[wartosc]
            
        }
        if(obiekt[pozycjaY[numerY][u]].ilosc_mozliwosci != 0){ // wszędzie, oprócz wczeniej liczby ( numer != pozycjaY[numerY][i] && )+ oiekt nie ma .value
            if(obiekt[pozycjaY[numerY][u]].value_around[wartosc] == false){ // przy wielu kliknięciach .ilosc_wartosci nie zostanie zmiejszona do 0
                obiekt[pozycjaY[numerY][u]].ilosc_mozliwosci--;
            }
            obiekt[pozycjaY[numerY][u]].value_around[wartosc] = true; //wstawia do wszystkich obiektów w tym o tej samej pozycjiY .value_around[wartosc]
            
        }
        /*if(obiekt[CUBE[numerCUBE][u]].ilosc_mozliwosci != 0){ // wszędzie, oprócz wczeniej liczby ( numer != pozycjaY[numerY][i] && )+ oiekt nie ma .value
            if(obiekt[CUBE[numerCUBE][u]].value_around[wartosc] == false){ // przy wielu kliknięciach .ilosc_wartosci nie zostanie zmiejszona do 0
                obiekt[CUBE[numerCUBE][u]].ilosc_mozliwosci--;
            }
            obiekt[CUBE[numerCUBE][u]].value_around[wartosc] = true; //wstawia do wszystkich obiektów w tym o tej samej pozycjiY .value_around[wartosc]
            
        }*/

    }
}

// szuka pustych pól, WCZESNIEJ NAZYWAŁA SIĘ wstaw_liczby()
function szukaj_pustych() {
    for (i = 1; i <= 81; i++) { // 9 zamienić na81---------------------------------------------------------------------
        if (obiekt[i].value == '') {
            szukajka(i);
        }
    }
}
/**
 * [szukajka szuka jaka liczba nie znajduje się w wsrod pozycjaX[numer], pozycjaY[numer] lub CUBE[numer]
 * @param  {[type]} numer [id elementu wg]
 * @return {[type]}       [description]
 */
function szukajka(numer) {
    for (i = 0; i <= 8; i++) {
        // szuka liczb dla pozycjiX
        if (obiekt[numer].value_around[obiekt[pozycjaX[obiekt[numer].X][i]].value] == "") {
            obiekt[numer].value_around[obiekt[pozycjaX[obiekt[numer].X][i]].value] = true;
            obiekt[numer].ilosc_mozliwosci--;
            //alert(obiekt[numer].ilosc_mozliwosci);
        }

        // szuka liczb dla pozycjiY
        if (obiekt[numer].value_around[obiekt[pozycjaY[obiekt[numer].Y][i]].value] == "") {
            obiekt[numer].value_around[obiekt[pozycjaY[obiekt[numer].Y][i]].value] = true;
            obiekt[numer].ilosc_mozliwosci--;
            //alert("chujew");
            //alert(obiekt[numer].ilosc_mozliwosci);
        }

        if (obiekt[numer].value_around[obiekt[CUBE[obiekt[numer].CUBE][i]].value] == "") {
            obiekt[numer].value_around[obiekt[CUBE[obiekt[numer].CUBE][i]].value] = true;
            obiekt[numer].ilosc_mozliwosci--;
            //alert("chujew");
            //alert(obiekt[numer].ilosc_mozliwosci);
        }



        // dla obiekt[numer].ilosc_mozliwosci == 1 szuka, która wartosc nie znajduje się w wsrod pozycjaX[numer], pozycjaY[numer] lub CUBE[numer], czyli szuka które value_around == false;
        if (obiekt[numer].ilosc_mozliwosci == 1) {
            for ( i = 1; i <= 9; i++) {
                if (obiekt[numer].value_around[i] == false) {
                    pomoc = i;
                }
            }
            document.getElementById("id" + numer).value = pomoc;
        }
        //alert(obiekt[numer].ilosc_mozliwosci);
        //alert(obiekt[numer].value_around[ obiekt[ pozycjaX[obiekt[numer].X][i] ].value ]);
    }
}
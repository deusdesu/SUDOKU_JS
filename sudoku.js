/**
 * [przyklad_1 description] wstawia przykład zadania sudoku
 * @return {[type]} [description]
 */
document.getElementById("input_button_przyklad_1").addEventListener("click", przyklad_1);
document.getElementById("input_button_przyklad_2").addEventListener("click", przyklad_2);
document.getElementById("input_button_przyklad_3").addEventListener("click", przyklad_3);
document.getElementById("input_button_przyklad_4").addEventListener("click", przyklad_4);
document.getElementById("sprawdz_czy_poprawne_sudoku").addEventListener("click", sprawdz_czy_poprawne_sudoku);

function przyklad_1() {
    document.getElementById("id" + 2).value = 7;
    document.getElementById("id" + 6).value = 8;
    document.getElementById("id" + 8).value = 2;
    document.getElementById("id" + 10).value = 8;
    document.getElementById("id" + 14).value = 2;
    document.getElementById("id" + 15).value = 7;
    document.getElementById("id" + 18).value = 4;
    document.getElementById("id" + 20).value = 6;
    document.getElementById("id" + 21).value = 3;
    document.getElementById("id" + 25).value = 8;
    document.getElementById("id" + 26).value = 7;

    document.getElementById("id" + 28).value = 4;
    document.getElementById("id" + 29).value = 1;
    document.getElementById("id" + 38).value = 9;
    document.getElementById("id" + 41).value = 1;
    document.getElementById("id" + 44).value = 3;
    document.getElementById("id" + 53).value = 9;
    document.getElementById("id" + 54).value = 6;

    document.getElementById("id" + 56).value = 8;
    document.getElementById("id" + 57).value = 7;
    document.getElementById("id" + 61).value = 9;
    document.getElementById("id" + 62).value = 5;
    document.getElementById("id" + 64).value = 6;
    document.getElementById("id" + 67).value = 1;
    document.getElementById("id" + 68).value = 8;
    document.getElementById("id" + 72).value = 7;
    document.getElementById("id" + 74).value = 4;
    document.getElementById("id" + 76).value = 3;
    document.getElementById("id" + 80).value = 1;
}

function przyklad_2() {
    document.getElementById("id" + 1).value = 4;
    document.getElementById("id" + 5).value = 6;
    document.getElementById("id" + 12).value = 9;
    document.getElementById("id" + 13).value = 5;
    document.getElementById("id" + 16).value = 3;
    document.getElementById("id" + 17).value = 6;
    document.getElementById("id" + 19).value = 5;
    document.getElementById("id" + 21).value = 8;
    document.getElementById("id" + 22).value = 3;
    document.getElementById("id" + 23).value = 1;

    document.getElementById("id" + 28).value = 6;
    document.getElementById("id" + 30).value = 7;
    document.getElementById("id" + 35).value = 5;
    document.getElementById("id" + 36).value = 8;
    document.getElementById("id" + 37).value = 1;
    document.getElementById("id" + 44).value = 3;
    document.getElementById("id" + 48).value = 3;
    document.getElementById("id" + 54).value = 2;

    document.getElementById("id" + 60).value = 4;
    document.getElementById("id" + 63).value = 6;
    document.getElementById("id" + 65).value = 7;
    document.getElementById("id" + 66).value = 6;
    document.getElementById("id" + 67).value = 8;
    document.getElementById("id" + 71).value = 9;
    document.getElementById("id" + 76).value = 9;
    document.getElementById("id" + 78).value = 6;
    document.getElementById("id" + 80).value = 7;
    document.getElementById("id" + 81).value = 5;
}

function przyklad_3() {
    document.getElementById("id" + 1).value = 1;
    document.getElementById("id" + 4).value = 5;
    document.getElementById("id" + 6).value = 4;
    document.getElementById("id" + 9).value = 6;
    document.getElementById("id" + 11).value = 7;
    document.getElementById("id" + 17).value = 9;
    document.getElementById("id" + 22).value = 1;
    document.getElementById("id" + 23).value = 8;
    document.getElementById("id" + 24).value = 9;

    document.getElementById("id" + 28).value = 9;
    document.getElementById("id" + 30).value = 1;
    document.getElementById("id" + 34).value = 4;
    document.getElementById("id" + 36).value = 8;
    document.getElementById("id" + 39).value = 8;
    document.getElementById("id" + 41).value = 5;
    document.getElementById("id" + 43).value = 3;
    document.getElementById("id" + 46).value = 2;
    document.getElementById("id" + 48).value = 3;
    document.getElementById("id" + 52).value = 5;
    document.getElementById("id" + 54).value = 7;

    document.getElementById("id" + 58).value = 8;
    document.getElementById("id" + 59).value = 2;
    document.getElementById("id" + 60).value = 1;
    document.getElementById("id" + 65).value = 8;
    document.getElementById("id" + 71).value = 4;
    document.getElementById("id" + 73).value = 6;
    document.getElementById("id" + 76).value = 7;
    document.getElementById("id" + 78).value = 3;
    document.getElementById("id" + 81).value = 5;
}

function przyklad_4() {
    for (var i = 1; i <= 9; i++) {
        if (i != 8 && i != 3) document.getElementById("id" + i).value = i;
    }
    document.getElementById("id" + 16).value = 4;
    document.getElementById("id" + 17).value = 5;
    document.getElementById("id" + 18).value = 6;
    document.getElementById("id" + 25).value = 1;
    document.getElementById("id" + 26).value = 3;
    document.getElementById("id" + 35).value = 1;
    document.getElementById("id" + 44).value = 2;
    document.getElementById("id" + 53).value = 4;
}
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
 * jeżeli obiekt[i].value == '' szuka obiekt[i].value_around, które == false i sprawdza, czy inne obiekty w wg CUBE też maja false, przy tym samym numerze, jeżeli nie to wstawia liczbe, przy krórej jest false xd
 *
 *
 *
 * funkcja sprawdzajaca, czy sudoku zostalo poprawnie rozwiazane? plox
 */
// ZMIENNE GLOBALNE ---------------------------------------------------------------------
// tablica poziomu,  numer_pozycji = [liczby w danej pozycji], służa jako wskaźniki,  pozycjaX[] wskazuje jakie liczby należa do danej pozycji
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

// tablica pionu,  numer_pozycji = [liczby w danej pozycji], służa jako wskaźniki
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

// tablica kwadratu,  numer_pozycji = [liczby w danej pozycji], służa jako wskaźniki
CUBE = [];
CUBE[1] = [1, 2, 3, 10, 11, 12, 19, 20, 21];
CUBE[2] = [4, 5, 6, 13, 14, 15, 22, 23, 24];
CUBE[3] = [7, 8, 9, 16, 17, 18, 25, 26, 27];
CUBE[4] = [28, 29, 30, 37, 38, 39, 46, 47, 48];
CUBE[5] = [31, 32, 33, 40, 41, 42, 49, 50, 51];
CUBE[6] = [34, 35, 36, 43, 44, 45, 52, 53, 54];
CUBE[7] = [55, 56, 57, 64, 65, 66, 73, 74, 75];
CUBE[8] = [58, 59, 60, 67, 68, 69, 76, 77, 78];
CUBE[9] = [61, 62, 63, 70, 71, 72, 79, 80, 81];



// tworzy tablice wykorzystywane w funkcji szukaj_w_obiekt_pozycja(). służ one rozwiazaniu
// "/przyklad_01.png"
tablica_CUBE = [];
tablica_bezpieczenstwa_CUBE = [];
tablica_pozycjaY = [];
tablica_bezpieczenstwa_pozycjaY = [];
tablica_pozycjaX = [];
tablica_bezpieczenstwa_pozycjaX = [];

tablica_sprawdzajaca_CUBE = [];
tablica_sprawdzajaca_pozycjaY = [];
tablica_sprawdzajaca_pozycjaX = [];

for (var i = 1; i <= 9; i++) {
    tablica_CUBE[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    tablica_pozycjaY[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];
    tablica_pozycjaX[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];

    tablica_bezpieczenstwa_CUBE[i] = [null, false, false, false, false, false, false, false, false, false];
    tablica_bezpieczenstwa_pozycjaY[i] = [null, false, false, false, false, false, false, false, false, false];
    tablica_bezpieczenstwa_pozycjaX[i] = [null, false, false, false, false, false, false, false, false, false];

    // tworzy
    tablica_sprawdzajaca_CUBE[i] = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tablica_sprawdzajaca_pozycjaY[i] = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    tablica_sprawdzajaca_pozycjaX[i] = [null, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

/**
 * [obiekt tablica obiektów, każde pole ma odpowiadajcY mu obiekt o takim samYm numerze id]
 */
var obiekt = [9 * 9];
var obiekt_CUBE = [];
var obiekt_Y = [];
var obiekt_X = [];
var value = [];

/**
 * [pętla tworzca obiekty, przypisujca im odpowiednie parametry]
 **/
okresl_obiekty();
przypisz_numery_pozycji();

/**
 * [ilosc_zapisanych_pol oznacza ile pól zostało zapisanych, zwiększa się za każdym użciem funkcji wstaw_value_do_obiektu_i_id]
 * @type {Number}
 */
var ilosc_zapisanych_pol = 0;
var ilosc_przed_funkcjami_lokalne; // sprawdza pojedyncze petle w petli "q" w funkcji send_nudes_yhm_numers()
var ilosc_przed_funkcjami_glowne; // sprawdza czy zrobiono postep w petli "q" w funkcji send_nudes_yhm_numers()


//wstawia pola sudoku
var kafelek = '';
for (i = 1; i <= 81; i++) {
    kafelek = kafelek + '<input id="id' + i + '" maxlength="1" type="text" />';
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
 * @return {[type]} [description] odsyła do funkcji wstaw_liczby()
 */
function send_nudes_yhm_numers() {
    for (var i = 1; i <= 81; i++) {
        value[i] = document.getElementById("id" + i).value; // linia testowa nwm czy będzie miała zastosowanie

        if (document.getElementById("id" + i).value != '') {

            wstaw_value_do_obiektu_i_id(i, document.getElementById("id" + i).value);
        }
    }


    //sprawdz_czy_istnieje_tylko_1_mozliwosc();
    sprawdz_czy_jest_tylko_1_true_w_pozycji();
}

function sprawdz_czy_istnieje_tylko_1_mozliwosc() { //
    for (var i = 1; i <= 81; i++) {
        if (obiekt[i].ilosc_mozliwosci == 1) {
            for (var u = 1; u <= 9; u++) {
                if (obiekt[i].value_around[u] == false) {
                    pomoc = u;
                    break;
                }
            }
            wstaw_value_do_obiektu_i_id(i, pomoc);
        }
    }
}

function sprawdz_czy_jest_tylko_1_true_w_pozycji() {
    for (i = 1; i <= 9; i++) {
        for (u = 0; u <= 8; u++) {
            for (y = 1; y <= 9; y++) {
                id = CUBE[i][u];
                if (obiekt[id].value_around[y] && tablica_CUBE[i][y] > 0 && tablica_bezpieczenstwa_CUBE[i][y] == false) {
                    tablica_CUBE[i][y]--;
                    if (tablica_CUBE[i][y] == 1) {
                        tablica_bezpieczenstwa_CUBE[i][y] = true;
                        for (t = 0; t <= 8; t++) {
                            if (obiekt[CUBE[i][t]].value_around[y] == false) { //CUBE[i][t] to ID :))
                                wstaw_value_do_obiektu_i_id(CUBE[i][t], y);
                            }
                        }
                        //alert(id + " a to i:" + i + " a to u:" + u + " a to y:" + y);
                        //
                    }
                    /*if(tablica_CUBE[i][y] == 0){
                    }*/
                }
            }
        }
    }

    reset_wartosci_w_tablicach_cube_etc();
    //a może zapsiz co ma ta funkcja robić :/
}

function reset_wartosci_w_tablicach_cube_etc() { // kwestia bezpieczenstwa
    for (var i = 1; i <= 9; i++) {
        tablica_CUBE[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];
        tablica_pozycjaY[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];
        tablica_pozycjaX[i] = [null, 9, 9, 9, 9, 9, 9, 9, 9, 9];
        // nie resetuje bezpieczentwa, te sa przydatne heh
        //tablica_bezpieczenstwa_CUBE[i] = [null, false, false, false, false, false, false, false, false, false];
        //tablica_bezpieczenstwa_pozycjaY[i] = [null, false, false, false, false, false, false, false, false, false];
        //tablica_bezpieczenstwa_pozycjaX[i] = [null, false, false, false, false, false, false, false, false, false];
    }
}

/**
 * [sprawdz_czy_poprawne_sudoku description] sprawdza, czy sudoku zostało porawnie rozwizane: warunki rozwizania:
 *     wszystkie pola w spacjalnych tablicach == 1 nie mnije nie więcej
 * @return {[type]} [description]
 */
function sprawdz_czy_poprawne_sudoku() {
    czy_porazka = false;
    //     tablica_sprawdzajaca_CUBE[i] = [null ,0,0,0,0,0,0,0,0,0];
    for (var i = 1; i <= 9; i++) {
        for (var u = 0; u <= 8; u++) {
            wartosc = obiekt[pozycjaX[i][u]].value;
            tablica_sprawdzajaca_pozycjaX[i][wartosc]++;
            if (tablica_sprawdzajaca_pozycjaX[i][wartosc] != 1) {
                czy_porazka = true;
                //alert("co1");
            }
            wartosc = obiekt[pozycjaY[i][u]].value;
            tablica_sprawdzajaca_pozycjaY[i][wartosc]++;
            if (tablica_sprawdzajaca_pozycjaY[i][wartosc] != 1) {
                czy_porazka = true;
                // alert("co2");
            }
            wartosc = obiekt[CUBE[i][u]].value;
            tablica_sprawdzajaca_CUBE[i][wartosc]++;
            if (tablica_sprawdzajaca_CUBE[i][wartosc] != 1) {
                czy_porazka = true;
                alert(tablica_sprawdzajaca_CUBE[i][wartosc] + " i = " + i + "u = " + u);
            }
        }
    }
    if (czy_porazka == true) {
        alert("nie wyszło no :ccc");
    }
}


/**
 * [wstaw_value_do_obiektu_i_id wstawia liczby do obiektów, jak i i odpowiednich ID w polu sudoku]
 * @param  {[type]} id                [description]
 * @param  {[type]} wstawiona_wartosc [description]
 * @return {[type]}                   [description]
 */
function wstaw_value_do_obiektu_i_id(id, wstawiona_wartosc) {

    obiekt[id].value = wstawiona_wartosc;
    obiekt[id].ilosc_mozliwosci = 0;
    //petla_ustawiajaca_true_w_obiekcie_z_wartoscia(id);
    for (var u = 0; u <= 8; u++) {
        obiekt[id].value_around[u] = true;
    }
    document.getElementById("id" + id).value = wstawiona_wartosc;

    // wg wsadzonych wartosci do obiektów/documentów zmienia .value_around i .ilosc_mozliwosciobiektów wokół, zlepek z funkcji
    numerX = obiekt[id].X;
    numerY = obiekt[id].Y;
    numerCUBE = obiekt[id].CUBE;
    for (var i = 0; i <= 8; i++) {
        // szuka liczb dla pozycjiX, za pierwszym razem zmiejsza .ilosc_mozliwosci o 1
        if (obiekt[pozycjaX[numerX][i]].value_around[wstawiona_wartosc] == false) {
            obiekt[pozycjaX[numerX][i]].ilosc_mozliwosci--;
            obiekt[pozycjaX[numerX][i]].value_around[wstawiona_wartosc] = true;
        }

        if (obiekt[pozycjaY[numerY][i]].value_around[wstawiona_wartosc] == false) {
            obiekt[pozycjaY[numerY][i]].ilosc_mozliwosci--;
            obiekt[pozycjaY[numerY][i]].value_around[wstawiona_wartosc] = true;
        }

        if (obiekt[CUBE[numerCUBE][i]].value_around[wstawiona_wartosc] == false) {
            obiekt[CUBE[numerCUBE][i]].ilosc_mozliwosci--;
            obiekt[CUBE[numerCUBE][i]].value_around[wstawiona_wartosc] = true;
        }
    }
    sprawdz_czy_istnieje_tylko_1_mozliwosc();




    /**
     * zmiejsza tablica_CUBE[obiekt[id].CUBE][wstawiona_wartosc] do 0
     *
     * oraz
     *
     * zmiejsza o 1 tablica_CUBE dla kazdego x,y,cube temu samemu co id
     */
    /*
    tablica_CUBE[obiekt[id].CUBE][wstawiona_wartosc] = 0;
    nr_CUBE = obiekt[id].CUBE;
    nr_X = obiekt[id].X;
    nr_Y = obiekt[id].Y;
    for (var z = 1; z <= 9; z++) {
        tablica_CUBE[nr_X][z]--;
        tablica_CUBE[nr_Y][z]--;
        tablica_CUBE[nr_CUBE][z]--;
        //alert("x: " + tablica_CUBE[nr_X][z] + " Y: " + tablica_CUBE[nr_Y][z] + "CUBE: " + tablica_CUBE[nr_CUBE][z]);
    }*/
    ilosc_zapisanych_pol++;


}



/**
 * [przypisz_numery_pozycji description] do obiektów etc
 * @return {[type]} [description]
 */
function przypisz_numery_pozycji() {
    for (var i = 1; i <= 81; i++) {
        var X = obiekt[i].X;
        var Y = obiekt[i].Y;
        var C = obiekt[i].CUBE;
        for (z = 0; z <= 8; z++) {
            if (pozycjaX[X][z] == i && obiekt[i].X_nr == "default") {
                obiekt[i].X_nr = z + 1;
            }
            if (pozycjaY[Y][z] == i && obiekt[i].Y_nr == "default") {
                obiekt[i].Y_nr = z + 1;
            }
            if (CUBE[C][z] == i && obiekt[i].CUBE_nr == "default") {
                obiekt[i].CUBE_nr = z + 1;
            }
        }
    }
}

function okresl_obiekty() {
    for (var i = 1; i <= 81; i++) {
        obiekt[i] = {
            X: 0, // okresla w którym pozycjaX_ znajduje się obiekt, domyslnie 0, czyli nigdzie
            X_nr: "default",
            Y: 0, // okresla w którym pozycjaY_ znajduje się obiekt, domyslnie 0, czyli nigdzie
            Y_nr: "default",
            CUBE: 0, // okresla w którym CUBE_ znajduje się obiekt, domyslnie 0, czyli nigdzie
            CUBE_nr: "default",
            value: '', // okresla jaka wartosc ma obiekt[i]

            ilosc_mozliwosci: 9, // zmiejsza się ze każdym razem, gdy zostawnie przyznana wartosc true dla "obiekt[i].value_around"
            value_around: [0, false, false, false, false, false, false, false, false, false]
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
}
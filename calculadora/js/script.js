function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var razao = parseFloat(document.getElementById('raz').value);
    var posterm = parseFloat(document.getElementById('posterm').value);
    var respa = parseFloat(document.getElementById('respa').value);



    //feita
    if (isNaN(a1)) {
        if (isNaN(razao) || isNaN(posterm) || isNaN(respa)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcA1 = respa -  (posterm-1) *  razao;
            var alog = posterm - 1;
            var algo = alog * razao;
            
            document.getElementById('res').innerHTML =  '<br> an = (a1 * pow (q,n-1)) Sn = (a1* pow q) n - 1/ (q-1)); ' + '<br>' +  '<br> a1 = an - r.(n-1)  ' + '<br><br>';

            document.getElementById('res1').innerHTML = respa + ' = '  + ' a1 '  + ' - ' + razao + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML = respa + ' = '  + ' a1 '  + ' - '  + alog + ' * (' + razao + ')' + '<br><br>';
            document.getElementById('res3').innerHTML = respa + ' = '  + ' a1 '  + ' - '  + '('+algo +')'+ '<br><br>';
            if (algo <= 0){
                var negppos = Math.abs(algo);
                document.getElementById('res4').innerHTML = 'a1 = ' + respa  + ' - '  +  '('+negppos+')'  + '<br><br>';
                document.getElementById('res5').innerHTML = 'a1 = ' +calcA1;
            } else {

                document.getElementById('res4').innerHTML = 'a1 = ' + respa  + ' - '  + '(' + algo + ')'+'<br><br>';
            document.getElementById('res5').innerHTML = 'a1 = ' + calcA1;
            }
        }


        //feita
    } else if (isNaN(razao)) {
        if (isNaN(a1) || isNaN(posterm) || isNaN(respa)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var alog = (posterm - 1);
            var algo = respa - a1;
            var calcraz =  (respa - a1)/ alog;
            document.getElementById('res').innerHTML =  '<br> an = a¹ + (n-1).r  ' + '<br><br>';
            document.getElementById('res1').innerHTML =  respa + ' = '  +  a1   + ' - ' + 'r' + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML =  respa + ' - '  +  a1   + ' = '  +  alog   + '*r' + '<br><br>';
            document.getElementById('res3').innerHTML =  algo  + '/' + alog + ' = r' + '<br><br>';
            document.getElementById('res4').innerHTML = 'r = ' + calcraz;

          
        }



    } else if (isNaN(posterm)) {

        if (isNaN(a1) || isNaN(razao) || isNaN(respa)) {

            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcpos = ((respa - a1)/10) + 1;
            var algo = respa / razao;
            document.getElementById('res').innerHTML =  '<br> an = a¹ + (n-1).r  ' + '<br><br>';
            document.getElementById('res1').innerHTML =  respa + ' = '  +  a1   + ' - ' + 'r' + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML =  respa + ' - '  +  a1   + ' = '  +'(n-1)' +  '(' + razao +')' + '<br><br>';
            document.getElementById('res3').innerHTML =  respa  + '/' + razao + ' = n' + '<br><br>';
            document.getElementById('res4').innerHTML = 'n - 1 = ' + algo  + '<br><br>';
            document.getElementById('res5').innerHTML = 'n  = ' + algo + ' + 1' + '<br><br>';
            document.getElementById('res6').innerHTML = 'n = ' + calcpos + '<br><br>';
           
        }




    //feita
    } else if (isNaN(respa)) {
        if (isNaN(a1) || isNaN(razao) || isNaN(posterm)) {

            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcPA = a1 + razao * (posterm- 1);
            var alog = (posterm-1)
            var algo = razao * alog
            document.getElementById('res').innerHTML =  '<br> an = a¹ + r.(n-1)  ' + '<br><br>';
            document.getElementById('res1').innerHTML =   "an = " +  a1 + ' + ' + razao + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML =   "an = " +  a1 + ' + ' + razao + ' * ' + alog  + '<br><br>';
            document.getElementById('res3').innerHTML =   "an = " +  a1 + ' + ' + razao + ' * ' + alog  + '<br><br>';
            document.getElementById('res4').innerHTML =   "an = " +  a1 + ' + ' + algo  + '<br><br>';
            document.getElementById('res5').innerHTML =   "an = " +  calcPA +'<br><br>';;
           
            
        }
    } else {
        document.getElementById('res').innerHTML = 'preencha os campos.';

    }

}
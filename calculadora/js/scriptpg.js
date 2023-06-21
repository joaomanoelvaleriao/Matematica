function calcular() {
    var a1 = parseFloat(document.getElementById('a1').value);
    var raz = parseFloat(document.getElementById('raz').value);
    var posterm = parseFloat(document.getElementById('posterm').value);
    var respa = parseFloat(document.getElementById('respa').value);



    
    if (isNaN(a1)) {
        if (isNaN(raz) || isNaN(posterm) || isNaN(respa)) {
            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcA1 = respa -  (posterm-1) *  raz;
            var alog = posterm - 1;
            var algo = alog * raz;
            
            document.getElementById('res').innerHTML =  '<br> an = a1 * q (n - 1) / q - 1;  ' + '<br>' +  '<br> a1 = an - r.(n-1)  ' + '<br><br>';

            document.getElementById('res1').innerHTML = respa + ' = '  + ' a1 '  + ' - ' + raz + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML = respa + ' = '  + ' a1 '  + ' - '  + alog + ' * (' + raz + ')' + '<br><br>';
            document.getElementById('res3').innerHTML = respa + ' = '  + ' a1 '  + ' - '  + '('+algo +')'+ '<br><br>';
            if (algo <= 0){
                var negppos = Math.abs(algo);
                document.getElementById('res4').innerHTML = 'a1 = ' + respa  + ' + '  +  '('+negppos+')'  + '<br><br>';
                document.getElementById('res5').innerHTML = 'a1 = ' +calcA1;
            } else {

                document.getElementById('res4').innerHTML = 'a1 = ' + respa  + ' - '  + '(' + algo + ')'+'<br><br>';
            document.getElementById('res5').innerHTML = 'a1 = ' + calcA1;
            }
        }


        
    } else if (isNaN(raz)) {
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
            document.getElementById('res5').innerHTML = ' ';
            document.getElementById('res5').innerHTML = ' ';
        }



    } else if (isNaN(posterm)) {

        if (isNaN(a1) || isNaN(raz) || isNaN(respa)) {

            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcpos = (respa - a1)/raz +1;
            var algo1 = raz * 1;
            var algo2 = a1;
            document.getElementById('res').innerHTML =  '<br> an = a¹ + (n-1).r  ' + '<br><br>';
            document.getElementById('res1').innerHTML =  respa + ' = '  +  a1   + ' + ' + '(n - 1)' + ' * ' + raz + '<br><br>';
            document.getElementById('res2').innerHTML =  respa + ' = '  +  a1   + ' + ' + '(n - 1)' + ' * ( ' + raz + ' ) ' +'<br><br>';
            document.getElementById('res3').innerHTML =  respa + ' = '  +  a1   + raz+'n' + '+' + algo1 +'<br><br>';
            document.getElementById('res4').innerHTML =  raz+'n' + ' = ' + respa + "-" + a1 + "-" + algo1 +'<br><br>';
            document.getElementById('res5').innerHTML = 'n  = ' + algo2 + ' + 1' + '<br><br>';
            document.getElementById('res6').innerHTML = 'n = ' + calcpos + '<br><br>';
           
        }




    
    } else if (isNaN(respa)) {
        if (isNaN(a1) || isNaN(raz) || isNaN(posterm)) {

            document.getElementById('res').innerHTML = 'preencha os campos.';
        } else {
            var calcPA = a1 + raz * (posterm- 1);
            var alog = (posterm-1)
            var algo = raz * alog
            document.getElementById('res').innerHTML =  '<br> an = a¹ + r.(n-1)  ' + '<br><br>';
            document.getElementById('res1').innerHTML =   "an = " +  a1 + ' + ' + raz + ' * ' + '(' + posterm  + ' - 1)'  + '<br><br>';
            document.getElementById('res2').innerHTML =   "an = " +  a1 + ' + ' + raz + ' * ' + alog  + '<br><br>';
            document.getElementById('res3').innerHTML =   "an = " +  a1 + ' + ' + raz + ' * ' + alog  + '<br><br>';
            document.getElementById('res4').innerHTML =   "an = " +  a1 + ' + ' + algo  + '<br><br>';
            document.getElementById('res5').innerHTML =   "an = " +  calcPA +'<br><br>';
            document.getElementById('res6').innerHTML = " ";
           
            
        }
    } else {
        document.getElementById('res').innerHTML = 'preencha os campos.';

    }

}
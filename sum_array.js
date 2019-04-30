function sum_array(array){
    var total = 0;
    var output = '{';
    var string = '' ;
    for(var i=0;i<array.length;i++){
        total += array[i];
    }
    for(var i=0;i<array.length;i++){
        var actualnumber = total -array[i];
        if(i!=0){
         string = ',';
        }
        output = output+string+actualnumber;
    }
    output = output + '}';
    console.log(output);

}
//array = [1,4,2,3,6,7,32];
//{54,51,53,52,49,48,23}
//array = [3, 6, 4, 8, 9];
//{27,24,26,22,21}
//array = [4, 5, 7, 3, 10, 1];
//{26,25,23,27,20,29}
sum_array(array);
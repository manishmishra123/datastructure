// function sort1(arr){
//     for(var i = 0, j=i+1; j < arr.length;)
//         {       
//             if(arr[i] > arr[j])
//             {
//                 var temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;              
//                 i=0;
//                 j=i+1;
//             } 
//             else
//             {
//                 i++;
//                 j++;
//             }
//         }
//       return arr;  
// }
// function sort(arr){
//     for(var i =0;i<arr.length;i++){
//         for(var j =i;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
        
//         }   
//     }
//     return arr;
// }


function singleloopsort(){
    for(i=0,j=i+1;j<arr.length;){
        if(arr[i] > arr[j]){
            temp =arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            
        }else{
            i++;
            j++;
        }
    }
    return arr;
}
var arr = [];
arr = [1,4,2,45,33,76];
console.log(singleloopsort(arr));
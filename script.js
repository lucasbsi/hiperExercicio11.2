let num = prompt("Informe um número");



function fatorial(num){
   if(num<0){
       return false;
   }
   if (num == 0){
       return 1;
   }else{

       return num*fatorial(num-1);
   }
}

alert(fatorial(num));


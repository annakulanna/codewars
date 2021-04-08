function digital_root(n) {
    
    let sum = 0
    do{
       sum = 0
       const ar = n.toString().split('')
       for(let i=0; i< ar.length; i++){
         sum += parseInt(ar[i], 10);
       }
       n = sum
       //console.log(n)    
    }while(n >= 10)
      
    return sum;
}

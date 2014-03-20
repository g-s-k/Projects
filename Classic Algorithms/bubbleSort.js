function bubbleSort(n){
   for(var i=0; i < n.length-1; i++){
        for(var j=0; j < n.length-1; j++){
            if(n[j] > n[j+1]){
                var temp = n[j];
                n[j] = n[j+1];
                n[j+1] = temp;
            }
        }
    }
    return n;
}
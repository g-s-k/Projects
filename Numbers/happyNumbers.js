function happyNum(number) {
    var sqr, digit;
    var cycle = [];
    var output = [];
    
    var sum = 0;
    while (sum!=1)
    {
        while(number) {
        output.push(Math.pow(number % 10,2));
        number = Math.floor(number/10);
        }
     for(var i = 0; i < output.length; i++)
     {
         sum = sum + output[i];
     }
     for(var len = 0; len<cycle.length; len++)
     {
         if(sum == cycle[len]) //sum has repeated
         return "Unhappy Number";
     }
     cycle.push(sum);
    }
    return "Happy Number";
}
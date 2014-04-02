/*Write some code that simulates flipping a single coin 
however many times the user decides. The code should record 
the outcomes and count the number of tails and heads*/

function flip(n)
{
	var heads=0,tails=0;
	for(var i=1; i<=n; i++)
	{
		if((Math.floor(Math.random()*100+1)) <=50) {
			heads++; 
		}
		else{
			tails++;
		}
	}
	console.log("You flipped " +heads+ " heads and " +tails+ " tails");
}
this.console.log(flip(10));
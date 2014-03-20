//Based on John Machin's formula pi/4 = 4 * arctan (1/5) - arctan (1/239)
// toFixed(n) limits number of decimals to n

var findPI = function(num) {

	if(n === undefined || n >20)
		{ n=20;	}

	return (4*(4*math.atan(1/5) - math.atan(1/239)).toFixed(n))
}


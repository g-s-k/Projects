//find all prime factors of a number in O(1). isPrime is constant. Done here with n/2 can also be sqrt.

<script language="javascript" type="text/javascript">

    function isPrime(n) {
        for (var i = 2; i<=n/2; i++)
        {
            if(n%i == 0)
            {
                return false;
            }
        }
        return true;
    }

    function findPrimeFactors(n)
    {
        var list = new Array();
        var x=0;
        for(var i = 2; i<=n; i++)
        {
            if(n%i == 0)
            {
                if(isPrime(i))
                list[x] = i;
                x++;
            }
        }
        return list;
    }
    this.console.log (findPrimeFactors(15));
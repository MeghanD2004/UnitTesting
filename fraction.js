class fraction
{
    constructor( num , den )
    {
        this.num = num;
        this.den = den;
    }
    add(x)
    {
        var sum = add_fraction(this,x);
        console.log("%d/%d + %d/%d = %d/%d = %d",this.num,this.den,x.num,x.den,sum.num,sum.den,sum.num/sum.den);
    }
    subtract(x)
    {
        var subtract = subtract_fraction(this,x);
        console.log("%d/%d",subtract.num,subtract.den);
    }
multiply(x)
    {
        var multi = multi_fraction(this,x);
        console.log("%d/%d",multi.num,multi.den);
    }
    
    divide(x)
    {
        var div = divide_fraction(this,x);
        console.log("(%d/%d)/(%d/%d) = %d/%d = %d",this.num,this.den,x.num,x.den,div.num,div.den,div.num/div.den);
    }
    reciprocal()
    {
        console.log("%d/%d",this.den,this.num);
    }
}

function gcd(a,b)
{
    var gcd=1;
    for(let i=2;(i<=a&&i<=b);i++)
    {
        if(a%i==0&&b%i==0)
        {
            gcd=i;
        }
    }
    return gcd;
}

function add_fraction(x,y)
{
    var hcf=gcd(x.den,y.den);
    var result = new fraction;
    result.den = x.den*y.den / hcf;
    result.num = x.num*(result.den/x.den) + y.num*(result.den/y.den);
    return result;
}
function subtract_fraction(x,y)
{
    var hcf=gcd(x.den,y.den);
    var result = new fraction;
    result.den = x.den*y.den / hcf;
    result.num = x.num*(result.den/x.den) - y.num*(result.den/y.den);
    return result;
}
function multi_fraction(x,y)
{
    var result = new fraction;
    result.num = x.num * y.num;
    result.den = x.den * y.den;
    return result;
}

function divide_fraction(x,y)
{
    var result = new fraction;
    result.num = x.num / y.num;
    result.den = x.den / y.den;
    return result;
}

function main()
{
    var x = new fraction(1,2);
    var y = new fraction(1,2);
    (x.add(y));
}

main()


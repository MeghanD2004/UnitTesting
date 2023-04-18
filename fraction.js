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
        console.log("%d/%d",sum.num,sum.den);
    }
    subtract(x)
    {
        var subtract = subtract_fraction(this,x);
        console.log("%d/%d",subtract.num,subtract.den);
    }
    multiply(x)
    {           console.log("%d/%d",this.num*x.num,this.den*x.den);
    }
    div(x)
    {
        console.log("%d/%d = %d",this.num/x.num,this.den/x.den,(this.num/x.num)/(this.den/x.den));
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

function main()
{
    var x = new fraction(1,2);
    var y = new fraction(1,2);
    (x.add(y));
}

main()


<!DOCTYPE html>
<html>
<body>
<p>Click the button to open a new window and add some content.</p>
<script>

{/* function minus (totalValue, ...minusValues ) {
    for (let value of minusValues) {
        totalValue -= value;
    }
    return totalValue;
} */}

function sum(a,b=0) {
    let result = a + b ;
    return result;
}
{/* console.log(minus(90, 90)); */}
console.log(sum(1,3));

// ES5
var arr = [1,2,3].map(function(x) { 
                                    return x * x; 
                                  } );

// ES6 
const arr = [1,2,3].map(x => x * x );


let func = x => x * x;
let func = (x, y) => { return x + y }; 
let PI = () => 3.14;
{/* let Foo = new Foo; */}

</script>


</body>
</html>

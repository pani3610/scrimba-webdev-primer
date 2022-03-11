if (5>3){
    console.log('greater than');
}
if ("cat".length == 3){
    console.log("is the length")
}
if ("cat" == "dog"){
    
}
else{
    console.log(`not the same`)
}

var person = {
    name: "Bobby",
    age: 12
  }

if(person.age >=18 && person.name.startsWith('B')){
    console.log(person.name,'is allowed to go to the movie')
}

else{
    console.log(person.name,'is not allowed to go to the movie')

}

if (1 === '1'){
    console.log('strict')
}else if (1 == '1'){
    console.log('loose')
}else{
    console.log('not equal at all')
}

1<=2 && 2==4 ?console.log("yes"):{};

if(typeof("dog") == 'string')
{
    console.log('stringy')
}
console.log(typeof("dog"))
if(typeof(true) == 'boolean')
{
    console.log('booleany')
}

var s;

if(typeof(s) != 'undefined')
{
    console.log('defined-y')
}

console.log("s">12)

var MyNum = 10

MyNum%2 == 0 ? console.log('even'):console.log('odd');
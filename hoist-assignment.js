//1
console.log(hello);                                   
var hello = 'world';                                 
/*var hello;
//console.log(hello); 
// hello ='world';
*/
//Predicted output: undefined

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//function test(){
 //       var needle ;
 //       needle = 'magnet';
 //       console.log(needle);
 //   }
//var needle;
//needle ='haystack';
 //test();
 //predicted output: magnet

 //3
 var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
var brendan = 'super cool';
console.log(brendan);
*/
//predicted output: super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
var food;
food='chicken';
console.log(food);
eat();
*/
//output:
//chicken
//half-chicken

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/*
var mean;
mean();
console.log(food);
mean = function() {
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food);
}
Output:
error - mean is not a function
*/

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/*
function rewind() {
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
var genre;
console.log(genre);
genre = "disco";
rewind();
console.log(genre);
Output: 
undefined
rock
r&b
disco
*/

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
function learn() {
    var dojo;
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
Output:
error - dojo is not defined
*/

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
/*
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
Output:
{name: 'chicago', students: 65, hiring:true}
error
*/

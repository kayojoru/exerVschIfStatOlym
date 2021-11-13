//Preliminaries

if(5 > 3){console.log("is greater than")}
var animal = "bat"
if("bat".length === 3){
  console.log("is the length")}
else{console.log("is NOT the length")}
if("cat"==="dog"){
  console.log("What is the world coming to?!!")}
else {console.log("not the same")
}

//Bronze Medal

var person = {
  name: "Bobby",
  age: 12
}
if(person.age >= 18){console.log(`${person.name} is allowed to go to the movie!`)}
else{console.log(`${person.name} is NOT allowed to go to the movie!`)}

if(person.name[0] === "B"){
  console.log(`${person.name} is allowed to go to the movie`)
}
else{console.log("Blame your parents!")}

if(person.name[0] === "B" && person.age > 18){
  console.log(`${person.name} is allowed to go to the movie`)
}
else{console.log("Blame your parents!")}

//Silver

if(1==="1"){console.log("strict")}
else if(1=="1"){console.log("loose")}
else {console.log("not equal at all")}

if(1<=2 && 2===4){console.log("yes")}
else{console.log("hooked on phonics morked for wee!")}

//Gold Medal

if(typeof "dog" === "string"){console.log("Easy")}
if(typeof true === "boolean"){console.log("Easy")}
else{console.log("Hard")}
var dog
if(typeof dog === "undefined"){console.log("Easy")}
else{console.log("Hard")}
if("s">12){console.log("Easy")}
else{console.log("Hard")}
var myNum = 10
console.log(myNum % 2 === 0 ? "Even" : "Odd" )


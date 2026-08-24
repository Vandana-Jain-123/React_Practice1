component

 when we  do export default component  if you want to use that component so u can use by different name 
* but if u did only export in starting  so name should be same  . it is used when have more than componet 
* component alshould start with capppital letter 
like  Component
*
NOte why componet name start with capital letter

because componet always start with capital letter because of it can easily differencitate from html tag /element 


like if component name  is
header
html tag also have <header>  so it will be confused  tto compiler 
that why use with capital letter 
 like  Header



<!-- <!DOCTYPE html>
 class()
<html>

<body>
  
<script>
class Car {
  constructor(name) {
    this.brand = name;
  }
}

const mycar = new Car("Ford");

document.write(mycar.brand);
</script>

</body>
</html> -->

<!-- /////////////////////////////////////////////ARROW FUNCTION////////////////////////////////////// -->

 .arrow function sorter than regular function
 .arrow function does not bind 'this '  keyword
 .in arrow function if it have single ststement so no need to write return 
 .in arrow function if it have single parameter so need to write  paranthesis
 .it behave like variable

 .syntax=
  const arrowFunction=( Parameter)=>{
  return console.log(hello)/statement
 }

 <!--  different between arrow and regular function regarding this keyword -->

 .in regular function this keyword  is depend on  where this function is calling in which object so this keyword represent that object as this .


 . An arrow function does not have its own this; it uses this from its outer scope.

 example .
 by regular  function 

  let userData={
    name:"ashu",
    age:50,
    regularFunction:function (){
     return ` my name is ${this.name} my age is ${this.age}`
  }
  }

  console.log(userData.regularFunction())// output  my name is ashu my age is 50


  <!-- by arrow function -->

   let userData={
    name:"ashu",
    age:50,
    arrowFunction: getThis=()=>{
     return ` my nam is ${this.name} my age is ${this.age}`
  }
  }

  console.log(userData.arrowFunction()) // // output  my name is undefined my age is undefined   

  undefined aya h kuki in arrow function does not have own this its take the outer scope this if  get then it work accordingly 


  <!-- outer scope base of  arrow function  -->


  

   function outerFunction(){
     console.log(` my name is ${this.name} my age is ${this.age}`) // return nhi likho werna age ka run nhi hoga


    let arrowFunction=()=>{
      console.log(` mai or nam hai  ${this.name} meri ummetr ${this.age}`)
    }
 arrowFunction()
  }

 let userData={
    name:"ashu",
    age:50,
    outerFunction:outerFunction
  
  
  }
userData.outerFunction()    // userData.arrowFunction() nhi likh sakte h kuki ye inner function h outer ka




* check krna h arrow function is hoisted h ya nhi 






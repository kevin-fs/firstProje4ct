/*var Calc = 'Buenas noches';
let Calcu = 7;
const Calculadora = 6;

console.log(Calc + ' ,' + Calcu + ' ,' + Calculadora + '.' );

const person = {
    firstName : 'Johany',
    lastName : 'Quintero',
    edad : 28,
    
};

person.fullName = function () {
    return 'he is '+this.firstName+' '+this.lastName+' '+'and he is: '+this.edad;
};

console.log(person.fullName());

console.log(person)

function getName (){
    console.log('return name')
}
getName ();


function sumarDosNumeros (Num1,Num2) {
    let sume = Num1+Num2;
    console.log(sume);
    return sume;
   
}
sumarDosNumeros(5,7);

let guardarSuma = sumarDosNumeros(3,5)
sumarDosNumeros(guardarSuma, 10)


let array = [2,10,6,8,50,12,14,16]


function findMax(array) {
    let  max=0;
  for (let i=0;i<array.length;i++){
  if(max<array[i]){
    max=array[i];
    console.log(max)
    if(i==array.length-1){
        console.log("soy el mayor de todos " + max)
    }
    }
    else {
        console.log('No es mayor ')
    }
  }
}
findMax(array);


function printNum() {
  for (let i = 1; i <= 10; i++) {
  console.log("The counting is: " + i);
    }
}
printNum();
*/

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];


function sumArr_1 (){
    let suma=0;
    for (let i=0;i<arr_1.length;i++){
        suma+=arr_1[i];
    }
    console.log(suma)
}
sumArr_1();

// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return (Number(lado1) + Number(lado2) + Number(base));//se hace coercion en el return para que no sea un string
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


//Aqui interactuamos con el HTML

//funciones de calculo de perimetros y areas del cuadrado.
function calcularPerimetroCuadrado(){
  const input = document.getElementById("InputCuadrado"); //Obtenemos el valor del input
  const value = input.value; //aca se obtiene el valor del input

  const perimetro = perimetroCuadrado(value); //aca se obtiene el perimetro del cuadrado
  alert(perimetro); //aca se muestra el perimetro en un alert
}
function calcularAreaCuadrado(){
  const input = document.getElementById("InputCuadrado"); //Obtenemos el valor del input
  const value = input.value; //aca se obtiene el valor del input

  const area = areaCuadrado(value); //aca se obtiene el area del cuadrado
  alert(area); //aca se muestra el area en un alert
}

//Funciones de calculo de perimetros y areas del triangulo.
function calcularPerimetroTriangulo(){
  const input1 = document.getElementById("inputLado1");
  const value= input1.value;
  const input2 = document.getElementById("inputLado2");
  const value2= input2.value;
  const input3 = document.getElementById("inputBase");
  const value3= input3.value;

  const perimetro = perimetroTriangulo(value, value2, value3);
  alert(perimetro);
}
function calcularAreaTriangulo(){
  const height = document.getElementById("height");
  const valueHeight = height.value;
  const inputBase = document.getElementById("inputBase");
  const valueBase = inputBase.value;

  const area = areaTriangulo(valueBase, valueHeight);
  alert(area);
}
//calculo de alturo de triangulo isoseles

function altura(lado1, lado2, base){
  if (lado1 === lado2 && lado1 !== base){
    const altura = Math.sqrt((lado1**2 - base**2 )/4);  
    return altura;}
  else{
    console.log("intruduzca valores diferentes");
  }
}
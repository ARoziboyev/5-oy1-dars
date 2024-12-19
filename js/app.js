// 1. Destructuring Assignment
// 1.Mashq: Quyidagi obyektni name, age, va location maydonlariga ajratib oling va ularni konsolga chiqaring.

//  const user = { name: "Ali", age: 25, location: "Toshkent" };
// let { name, age, location } = user;
//  console.log(name);
// console.log(age );
// console.log(location);\



// 2.Mashq: Massivdan destructuring yordamida birinchi va ikkinchi elementlarni ajratib oling va qolgan barcha elementlarni others nomli yangi massivga joylashtiring.

//  const numbers = [10, 20, 30, 40, 50];
//  let [a,b, ...others] = numbers
//  console.log(others);
 
// 3.Mashq: Funksiya parametrlari sifatida obyekt berilgan. Funksiya ichida destructuring orqali title va price maydonlarini oling va konsolga chiqaring.

//  const product = { title: "Telefon", price: 300, brand: "Samsung" };

//  function displayProduct({ title, price }) {
//    console.log(title);
//    console.log(price);
//  }
 
//  displayProduct(product);
 

// 2. Scope

// 1.Mashq: Quyidagi kodda x qiymatini global, local va block scope’da o‘zgartirib, ularning o‘zgarishlarini kuzating.

//  let x = 10;

//  function testScope() {
//    let x = 20;
//    if (true) {
//      let x = 30;
//      console.log("Block scope:", x);
//    }
//    console.log("Local scope:", x);
//  }
//  testScope();
// console.log("Global scope:", x);


// 2.Mashq: Quyidagi kodda qaysi scope`da xatolik yuz berishini aniqlang va tuzating.

//  function calculate() {
//     if (true) {
//       let result = 10;
//       console.log(result); 
//     }
// }
  
//   calculate();
  


// 3.Mashq: Global scope’dagi o‘zgaruvchini funksiyada va blok ichida o‘zgartirish qanday natija berishini kuzating.

//  let count = 5;

//  function increment() {
//    count++;
//    console.log("Function scope:", count);
//  }
 
//  increment();
//  if (true) {
//    count += 2;
//    console.log("Block scope:", count);
//  }
 
//  console.log("Global scope:", count);
 


// 3. Spread/Rest Operator

// 1.Mashq: Quyidagi ikkita massivni spread operator yordamida bitta massivga birlashtiring.

//  const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// let sum = [...arr1, ...arr2];
// console.log(sum);


// 2.Mashq: Funksiyaga istalgan miqdordagi argumentlarni yuboring va rest operator yordamida ularni bir massiv sifatida qabul qiling. Har bir elementni kvadratga ko‘paytirib qaytaring.

//  function squareNumbers(...numbers) {
//     return numbers.map(number => number ** 2);
//   }
  
//   console.log(squareNumbers(2, 3, 4));


// 3.Mashq: Quyidagi obyektga yangi maydonlar qo‘shish uchun spread operatoridan foydalaning.

//  const user = { name: "Ali", age: 25 };
//  const updatedUser = {
//     ...user,
//     location: "Fergana",
//     profession: "Devoloper"
//  };
 
//  console.log(updatedUser);
 
 
// 4.Hoisting va TDZ (Temporal Dead Zone)

// 1.Mashq: Quyidagi kodni hoisting qoidasiga asoslanib tahlil qiling va qaysi qatorda xatolik yuz berishini tushuntiring.

//  console.log(a); //  var yordamida e’lon qilingani sababli hoistingga uchrab tepaga kotarilyabti
//  var a = 10;
 
//  console.log(b); // bu temporl det zoneda turibdi 
//  let b = 20;
 
//  test();
//  function test() {
//    console.log("Test function called");
//  }
 

// 2.Mashq: TDZ haqida tushuncha hosil qilish uchun quyidagi kodni to‘ldiring va xatoni tushuntiring.

// console.log(x); // hatolik ReferenceError bolyabdi shu joyda
//  let x = 5;
 

// 3.Mashq: Quyidagi kodning ishlash tartibini tushuntiring.

//  var x = 10;n// hoisting tufayli deklaratsiya funksiyaning boshiga ko'tariladi

//  function example() {
//    console.log(x); 
//    var x = 20;
//    console.log(x); 
//  }
 
//  example();
 


// 5.Modul

// 1.Mashq: Ikkita fayl yarating. Birinchi faylda sum va multiply funksiyalarini yozing va ularni eksport qiling. Ikkinchi faylda ushbu funksiyalarni import qiling va ulardan foydalaning.


// import { sum, multiply } from "./function";

// let a = 5;
// let b = 10;

// console.log(sum(a, b));
// console.log( multiply(a, b)); 


// 2.Mashq: Default eksportdan foydalaning. Bir faylda greet funksiyasini default qilib eksport qiling va boshqa faylda uni import qilib ishlating.

// import greet from './function.js';

// let name = "John";
// console.log(greet(name));


// 3.Mashq: Modullarda nom o‘zgarishini sinab ko‘ring. Quyidagi funksiyani eksport qiling va import qiling, lekin boshqa nom bilan foydalaning.

// import { divide as quotient } from './function';

// let result = quotient(10, 2);
// console.log(result); 


// 1-5. Foydalanuvchilarga oid masalalar

// 1.Faol foydalanuvchilarni topish: Funksiya massiv ichidagi isActive: true qiymatiga ega foydalanuvchilarni qaytarishi kerak.


// function sum(arg) {
//     return arg.filter(arr => arr.isActive);
//   }

// let arg = [
//     { id: 1, name: "John", isActive: true },
//     { id: 2, name: "Jane", isActive: false },
//     { id: 3, name: "Alice", isActive: true },
//     { id: 4, name: "Bob", isActive: false }
//   ];
  
//   let res = sum(arg);
  
//   console.log(res);

// 2.Yoshi bo‘yicha saralash: Funksiya foydalanuvchilarni age qiymatiga qarab o‘sish tartibida saralashi kerak.

// function sum(arg) {
//     return arg.sort((a, b) => a.age - b.age);
//   }

// let arg = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Alice", age: 22 },
//     { id: 4, name: "Bob", age: 28 }
//   ];
  
//   let res = sum(arg);
  
//   console.log(res);

// 3.Ism bo‘yicha qidiruv:Funksiya ismni qabul qilib, massivdan shu ismga ega foydalanuvchini topishi kerak.

// function sum(arg, name) {
//     return arg.find(arr => arr.name === name);
//   }

// let arg = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Alice", age: 22 },
//     { id: 4, name: "Bob", age: 28 }
//   ];
  

//   let res = sum(arg, "Alice");

// console.log(res);


// 4.Yosh o‘rtachasini hisoblash: Funksiya foydalanuvchilarning yoshlarining o‘rtacha qiymatini qaytarishi kerak.

// function sum(arg) {
//     if (arg.length === 0) return 0;
//     let arr = arg.reduce((sum, arr2) => sum + arr2.age, 0);
//     return arr / arg.length;
//   }

//   let arg = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Alice", age: 22 },
//     { id: 4, name: "Bob", age: 28 }
//   ];
  
//   let res = sum(arg);
  
//   console.log(res);



// 5.Foydalanuvchilarni yosh oralig‘ida qidirish: Funksiya minimal va maksimal yoshni qabul qilib, shu yosh oralig‘idagi foydalanuvchilarni qaytarishi kerak.

// function sum(arg, arr1, arr2) {
//     return arg.filter(arg2 => arg2.age >= arr1 && arg2.age <= arr2);
//   }

// let arg = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Alice", age: 22 },
//     { id: 4, name: "Bob", age: 28 }
//   ];
  
//   let res = sum(arg, 24, 29);
  
//   console.log(res);


// 6-10. Mahsulotlarga oid masalalar

// 6.Kategoriya bo‘yicha qidiruv: Funksiya kategoriya nomini qabul qilib, shu kategoriyaga tegishli mahsulotlarni qaytarishi kerak.
  
// function sum(arg, arr) {
//     return arg.filter(product => product.category === arr);
//   }

//   let products = [
//     { id: 1, name: "Laptop", category: "Electronics" },
//     { id: 2, name: "Shirt", category: "Clothing" },
//     { id: 3, name: "Phone", category: "Electronics" },
//     { id: 4, name: "Pants", category: "Clothing" }
//   ];
    
//   let res = sum(products, "Electronics");
  
//   console.log(res);



// 7.Narxi eng yuqori mahsulot: Funksiya massivdagi eng qimmat mahsulotni qaytarishi kerak.

// function sum(arg) {
//     if (arg.length === 0) return null; // Bo'sh massiv bo'lsa, `null` qaytariladi
//     return arg.reduce((arr, arr2) => 
//       arr2.price > arr.price ? arr2 : arr
//     );
//   }
//   const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
//     { id: 4, name: "Monitor", price: 300 }
//   ];
  
//   const res = sum(products);
  
//   console.log (res);
  

// 10.Muayyan narxdan yuqori mahsulotlar:Funksiya ma'lum bir minimal narxni qabul qilib, shu narxdan yuqori bo‘lgan mahsulotlarni qaytarishi kerak.

// function sum(arg) {
//     if (arg.length === 0) return null; // Bo'sh massiv bo'lsa, `null` qaytariladi
//     return arg.reduce((arr, arr2) => 
//       arr2.price > arr.price ? arr2 : arr
//     );
//   }
//   const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
//     { id: 4, name: "Monitor", price: 300 }
//   ];
  
//   const res = sum(products);
  
//   console.log (res);



// 11-15. Murakkab kombinatsiyalar

// 13.Faol foydalanuvchilarning o‘rtacha yoshi: Faqat isActive: true qiymatiga ega foydalanuvchilarning yoshlarini o‘rtachasini qaytaradigan funksiya yozing.

// function sum(arg) {
//     if (arg.length === 0) return 0;
//     let arr = arg.reduce((sum, arr2) => sum + arr2.age, 0);
//     return arr / arg.length;
//   }

//   let arg = [
//     { id: 1, name: "John", age: 25 },
//     { id: 2, name: "Jane", age: 30 },
//     { id: 3, name: "Alice", age: 22 },
//     { id: 4, name: "Bob", age: 28 }
//   ];
  
//   let res = sum(arg);
  
//   console.log(res);

// 14.Maxsus mahsulot qidiruvi: Funksiya mahsulot nomining ichida ma’lum bir so‘z qatnashgan mahsulotlarni qaytarishi kerak.

// function sum(arg, arr) {
//     return arg.filter(product => product.name.includes(arr));
//   }

//   let products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Smartphone", price: 800 },
//     { id: 3, name: "Tablet", price: 600 },
//     { id: 4, name: "Smartwatch", price: 200 }
//   ];
  
//   let res = sum(products, "Smart");
  
//   console.log(res);
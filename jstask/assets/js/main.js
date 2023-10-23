// // 1. a b və c ədədlərimiz var. ax^2+bx+c=0 kvadrat tənliyinin həllini tapıb konsolda çap edin.

// let kok1, kok2;
// let a=3;
// let b=6;
// let c=8;
// let Discriminant = b * b - 4 * a * c;
// if (Discriminant>0) {
// let kok1 = (-b + Math.sqrt(Discriminant)) / (2*a);
// let kok2 = (-b - Math.sqrt(Discriminant)) / (2*a);
// console.log(kok1);
// console.log(kok2);
// };
// if (Discriminant==0) {
//     let kok = -b / (2*a);
//     console.log(kok);
// } else {
//     console.log("köklər 0-dan kiçikdir");
// };





// 2. a ədədimiz var. 1-dən 1000-ə qədər A-ya bölünən bütün ədədləri çap edin.

// let A = 21; 
// for (let i = 1; i <= 1000; i++) {
//     if (i % A === 0) {
//         console.log(i);
//     }
// }





// 3. Bu massivin minimum elementini tapın: 

// const arr = [2, 4, 5, 9, 1];
// let minElement = Math.min(...arr);
// console.log("min element:", minElement);






// 4. Bu massivin maksimum elementini tapın

// const arr = [2, 4, 5, 9, 1];
// let maxElement = Math.max(...arr);
// console.log("max element:", maxElement);






// 5. Bu massivin minimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// const min = Math.min(...arr);
// const index = arr.indexOf(min);
// console.log(index);





// 6. Bu massivin maksimum elementinin indeksini tapın.
// const arr = [2, 4, 5, 9, 1];
// const max = Math.max(...arr);
// const index = arr.indexOf(max);
// console.log(index);






// 7.Tək indeksli massiv elementlərinin cəmini hesablayın
// const arr = [2, 4, 5, 9, 1];
// let sum = 0;
// for (let i = 1; i < arr.length; i+=2) {
//     sum += arr[i];
// }
// console.log(sum);








// 8.Mən Code Academy Tələbəsiyəm. cümlədəki hərfləri kiçik hərfə çevirin.
// let text = "Mən Code Academy Tələbəsiyəm.";
// let kicik = text.toLowerCase();
// console.log(kicik);







// 9. Mətndə başlanğıc və son boşluqları təmizləyin: "            Mən Code Academydə Programing tədrisi alıram            "
// let text = "            Mən Code Academydə Programing tədrisi alıram            ";
// let netice = text.trim();
// console.log(netice);






// 10. Mən Code Academy Tələbəsiyəm. cümləsini sözlərə ayırın
// let text = "Mən Code Academy Tələbəsiyəm";
// const myArray = text.split(" ");
// console.log(myArray);







// 11.  "            Mən Code Academydə Programing tədrisi alıram            " cümləsində neçə hərf olduğunu consolda yazdırın.
// let text = "            Mən Code Academydə Programing tədrisi alıram            " ;
// let bosluq = text.trim();
// let herf = bosluq.replaceAll(' ','').length;
// console.log(herf);



  
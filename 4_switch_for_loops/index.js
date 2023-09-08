// let browser;

// browser = 'Chrome';

// switch (browser) {
//     case 'Edge':
//         alert("You've got the Edge!");
//         break;
    
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these browsers too');
//         break;

//     default:
//         alert('We hope that this page looks ok');
// }

// let a = +prompt(); // prompt faqat string qaytaradi shunga oldiga + qoyib uni raqamga convert qilinmoqda

// if (a == 0) {
//     alert (0);
// } else if (a == 1) {
//     alert(1);
// } else if (a == 2 || a == 3) {
//     alert('2, 3');
// }

// An integer number greater than 1 is called a prime
// if it cannot be devided without a reminder by anything except 1 and itself

// in other words, n > 1 is a prime if it can't be devided by 
// anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a reminder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n;

// For n = 10; the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value

// let num = 10;

// for (let i = 1; i <= num; i++) {
//   let check = 0;

//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       check = 1;
//       break;
//     }
//   }

//   if (i > 1 && check == 0) {
//     console.log(i);
//   }
// }

// Karra jadvalini yaratish
// for (let i = 2; i <= 9; i++) {

//     console.log(`\n${i}lik karra jadvali`);
        
//         for (let j = 1; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`);
//     }
// }
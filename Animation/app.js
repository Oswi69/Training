// let counter = 1;

// while (counter <= 20) {
//     console.log(counter)
//     counter = counter + 1;
// }

// for loop

// for ( i = 1; i <= 5; i++) {
//     console.log(i)
// }

for (i = 1; i <= 15; i++) {
  if (((x = i / 5), x % 1 === 0)) {
    console.log(`${i} - ASAP Frontend`);
    // check if even
  } else if (i % 2 === 0) {
    console.log(`${i} - Frontend`);
    // check if odd
  } else if (i % 2 !== 0) {
    console.log(`${i} - ASAP`);
  }
}

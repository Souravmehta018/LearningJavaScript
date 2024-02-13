for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`outer loop ${i} & loop `+j);
    }
    console.log(`outer loop ${i}`);
}

// break

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`won't print: ${i}`);
        break;
    }
    console.log(`break: ${i}`);
}
// continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log(`won't print: ${i}`);
        continue;
    }
    console.log(`continue: ${i}`);
}



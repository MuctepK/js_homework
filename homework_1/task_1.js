ar = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (let value of ar) {
    if (value === 'молоко')
        console.log('хорошо');
    else if (value === 'пиво')
        console.log('плохо');
}
// ar.forEach((value) => {
//         if (value==='молоко')
//             console.log('хорошо');
//         else if (value==='пиво')
//             console.log('плохо');
//         });
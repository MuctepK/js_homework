ar = ['молоко', 'пиво', 'пиво', 'молоко', 'молоко'];
for (let index in ar) {
    console.log(ar[index]);
    if (ar[index] === 'молоко')
        console.log('хорошо');
    else if (ar[index] === 'пиво')
        console.log('плохо');
}
ar.forEach((value) => {
        if (value==='молоко')
            console.log('хорошо');
        else if (value==='пиво')
            console.log('плохо');
        });
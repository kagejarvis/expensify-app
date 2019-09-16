const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            name: 'Andrew',
            age: 26
        });
        // reject('This is my resolved data');
    }, 1500);

});
console.log('before');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('this is my new promise');
        }, 1500);

    });
}).then((str) => {
    console.log('does this run?', str);
})
    .catch((error) => {
        console.log('error', error);
    });


console.log('after');


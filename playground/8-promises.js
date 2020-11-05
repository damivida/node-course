const doPromise = new Promise((resolve, reject) => {

    setTimeout(() => {
       resolve('This is a promise resolve after 3 sec...');
      //reject('This is a promise reject after 3 sec...')
    }, 3000);
});


doPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


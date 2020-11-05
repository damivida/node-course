const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if( a < 0 || b < 0) {
                return reject('Number must be non-negative.')
            }
            resolve(a+b);
        }, 2000)
    })
}


//classic promisse

/* add(5,6).then((result) => {
    console.log(result);
    return(add(result, 7));
}).then((result2) => {
    console.log(result2);
    //return(result2, 8);
}).catch((e) => {
    console.log('Error' + e);
}) */


// async await
const dowork = async () => {
  const result1 = await add(5,6);
  const result2 = await add(result1, 7);
  const result3 = await add(result2, -8)
  
  return result3;
}



dowork().then((result) => {
    console.log('result', result);
}).catch((error) => {
    console.log('error', error);
})


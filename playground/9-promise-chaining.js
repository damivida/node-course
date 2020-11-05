const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        }, 2000)
    })
}

//wrong approach
/* add(4,5).then((result) => {
    console.log(result); 

    add(result, 8).then((result2) => {
        console.log(result2);
    }).catch((e) => {
        console.log(e);
    })
}).catch((e) => {
    console.log(e);
}) */

add(5,6).then((result) => {
    console.log('First promise: ' + result);
    return add(result,6)
}).then((result2) => {
    console.log('Second promise: ' + result2)
}).catch((e) => {
    console.log(e);
})


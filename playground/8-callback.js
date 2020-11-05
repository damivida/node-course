const doCallback = (callback) => {

    setTimeout(() => {
        callback('This is callback error after 3 sec...')
        //callback(undefined, 'This is callback result after 3 sec...')
    }, 3000);

}


doCallback((error, result) => {
    if(error) {
     return  console.log(error);
    }

    console.log(result);
    
})
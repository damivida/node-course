require('../src/db/mongoose');
const User = require('../src/models/user');


//Chaining promises
/* User.findByIdAndUpdate('5f8e013891c83630d033ff1c', {age: 150}).then((result) => {  
    console.log(result);
    return User.countDocuments({age:150});
}).then((result2) => {
    console.log(result2)
}).catch((e) => {
    console.log(e);
}) */


//async await
const updateAgeAndCount = async (id, age) => {
       const user =  await User.findByIdAndUpdate(id, {age});
       const count = await User.countDocuments({age});
       return count;
}

updateAgeAndCount('5f8e013891c83630d033ff1c', 170).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
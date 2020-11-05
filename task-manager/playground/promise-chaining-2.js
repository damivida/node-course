require('../src/db/mongoose');
const Task = require('../src/models/task');

//chaining promisess
/* Task.findByIdAndDelete('5f91e38b5133de0f00b05ee5').then((result) => {
    console.log('Deleted: ' + result);
    return Task.find({completed:false});
}).then((result2) => {
    console.log(result2);
}).catch((e) => {
    console.log(e);
}) */


//async await
const deleteTaskAndCount = async (id) => {
    const taskDeleted = await Task.findByIdAndDelete(id);
    const taskFlaseCount = await Task.count({completed:false});

    return {taskFlaseCount, taskDeleted};
}


deleteTaskAndCount('5f981c0e11a430201412afd4').then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})
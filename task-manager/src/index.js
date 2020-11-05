const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');
const mininPoolsRouter = require('./routers/mining-pool');

const app = express();
const port = process.env.PORT || 3000;

//convert incoming JSON into an JS object
app.use(express.json());

//use routers
app.use(userRouter);
app.use(taskRouter);
app.use(mininPoolsRouter);


app.listen(port, () => {
    console.log('Server is on port ' + port);
});


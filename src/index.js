const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const userRouter = require('./routers/user.js');
const taskRouter = require('./routers/task.js');

const app = express();
const PORT = process.env.PORT;


const multer = require('multer');
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('upload'), (req, res) => {
    console.log('Upload');
    res.send();
})


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);



app.listen(PORT, () => {
    console.log('Serving on port ' + PORT);
});


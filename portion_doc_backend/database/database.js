const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/portion_doc', {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
// .then(()=> console.log("Connected to MongoDB!!"))
// .catch((err) => console.log("MongoDB Connection Failed"));
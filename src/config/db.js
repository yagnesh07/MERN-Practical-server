// yagnesh
// go9xweuLtgtw8Mgb
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://yagnesh:go9xweuLtgtw8Mgb@cluster0.vp5dd9d.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

module.exports = mongoose;
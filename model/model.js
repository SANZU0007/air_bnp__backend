const mongoose = require('mongoose');

// MongoDB connection
const url = process.env.MONGO_URL;
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error);
  });

// create a schema
const schema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
    unique: true
  },
  Password: {
    type: String
  },
});

// Room booking schema
const bookingSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  guestName: {
    type: String,
    required: true,
  },
  checkInDate: {
    type: Date,
    required: true,
  },
  checkOutDate: {
    type: Date,
    required: true,
  },
});

// Room booking model
const Booking = mongoose.model('Booking', bookingSchema);

// create a model
const model = mongoose.model("Emails", schema, "tokens");

module.exports = { model, Booking };

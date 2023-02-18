const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// connect to MongoDB database
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });


const eventSchema = new mongoose.Schema({
  eventName: String,
  description: String,
  dateTime: Date,
  contactDetails: String,
  eventType: String,
  location: String,
  seatingCapacity: Number
});


const Event = mongoose.model('Event', eventSchema);


app.use(bodyParser.urlencoded({ extended: false }));


app.post('/createEvent', (req, res) => {
  const eventData = {
    eventName: req.body.eventName,
    description: req.body.description,
    dateTime: req.body.dateTime,
    contactDetails: req.body.contactDetails,
    eventType: req.body.eventType,
    location: req.body.location,
    seatingCapacity: req.body.seatingCapacity
  };
  
  const newEvent = new Event(eventData);
  newEvent.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error creating new event');
    } else {
      res.status(200).send('New event created successfully');
    }
  });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

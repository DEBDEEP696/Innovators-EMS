const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  event_name: {
    type: String,
    required: true
  },
  event_date: {
    type: Date,
    required: true
  },
  organizer_email: {
    type: String,
    required: true
  },
  organizer_phone: {
    type: String,
    required: true
  },
  event_description: {
    type: String,
    required: true
  },
  event_type: {
    type: String,
    required: true
  },
  event_location: {
    type: String,
    required: true
  },
  event_status: {
    type: String,
    enum: ['draft', 'published', 'cancelled'],
    default: 'draft'
  },
  max_status: {
    type: Number,
    required: true
  }
});

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

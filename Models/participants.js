const mongoose = require('mongoose');

const participantsSchema = new mongoose.Schema({
  booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  event_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  booking_date: {
    type: Date,
    default: Date.now
  },
  participant_name: {
    type: String,
    required: true
  },
  participant_email: {
    type: String,
    required: true
  },
  participant_phone: {
    type: String,
    required: true
  }
});

const Participants = mongoose.model('Participants', participantsSchema);

module.exports = Participants;

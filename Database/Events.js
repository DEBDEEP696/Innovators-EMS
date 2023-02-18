const Event = require('..Models/EventDetails.js');

const eventData = [
    {
     "Event_id": 1001,
     "event_name": "Music Festival",
     "event_date": "12-Mar-23",
     "organizer_email": "musicfest@gmail.com",
     "organizer_phone": "022-251678",
     "event_description": "A weekend to indulge in warm music with amazing artists and lip-smacking food",
     "event_type": "On-Premise",
     "event_location": "Mumbai",
     "event_status": "Live",
     "max_seats": 250
    },
    {
     "Event_id": 1002,
     "event_name": "Business Conference",
     "event_date": "17-Apr-23",
     "organizer_email": "nyc.co@gmail.com",
     "organizer_phone": "044-781209",
     "event_description": "This conference is held to discuss new trends and opportunities pertaining to the business",
     "event_type": "Virtual",
     "event_location": "Zoom",
     "event_status": "Scheduled",
     "max_seats": 80
    },
    {
     "Event_id": 1003,
     "event_name": "Hip Hop Beginners Class",
     "event_date": "02-Feb-23",
     "organizer_email": "danceguru@gmail.com",
     "organizer_phone": "011-457631",
     "event_description": "What you'll learn - Confidently step into a beginners Hip Hop class and understand the movements",
     "event_type": "On-Premise",
     "event_location": "Delhi",
     "event_status": "Completed",
     "max_seats": 100
    },
    {
     "Event_id": 1004,
     "event_name": "Art &amp; Craft  Workshop",
     "event_date": "20-Mar-23",
     "organizer_email": "craftsshop@gmail.com",
     "organizer_phone": "033-892561",
     "event_description": "Learn the layering technique in poster colours. It is a 3-layer painting which has a combination of brush painting and blending method",
     "event_type": "Virtual",
     "event_location": "Zoom",
     "event_status": "Scheduled",
     "max_seats": 50
    },
    {
     "Event_id": 1005,
     "event_name": "Book Reading Festival",
     "event_date": "19-May-23",
     "organizer_email": "readingfest@gmail.com",
     "organizer_phone": "141-378954",
     "event_description": "A reading festival is a gathering that focuses on celebrating all aspects of books and reading",
     "event_type": "On-Premise",
     "event_location": "Jaipur",
     "event_status": "Live",
     "max_seats": 500
    },
    {
     "Event_id": 1006,
     "event_name": "State Chess Championship",
     "event_date": "15-Apr-23",
     "organizer_email": "chesschamp@gmail.com",
     "organizer_phone": "011-190258",
     "event_description": "We have designed State Chess Championship to celebrate and cherish Indian love and passion for the game",
     "event_type": "On-Premise",
     "event_location": "Delhi",
     "event_status": "Scheduled",
     "max_seats": 40
    },
    {
     "Event_id": 1007,
     "event_name": "Open Mic",
     "event_date": "25-Mar-23",
     "organizer_email": "laughstore@gmail.com",
     "organizer_phone": "022-674381",
     "event_description": "The Laugh Store is giving an opportunity to newe and emerging comedians to try out new material at our open mic",
     "event_type": "On-Premise",
     "event_location": "Mumbai",
     "event_status": "Live",
     "max_seats": 50
    },
    {
     "Event_id": 1008,
     "event_name": "Sudoku Championship",
     "event_date": "17-Feb-23",
     "organizer_email": "sudoku_2023@gmail.com",
     "organizer_phone": "020-892347",
     "event_description": "The championship follows the same rule as Sudoku, and  will have 2 rounds Round 1 \"Qualifier\" and Round 2 \"Finals\".",
     "event_type": "Virtual",
     "event_location": "Watsapp",
     "event_status": "Cancelled",
     "max_seats": 50
    }
   ]

Event.create(eventData, (error, event) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Event created successfully:', event);
  }
});

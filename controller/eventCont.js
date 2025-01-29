const events = require("../models/event");
const organizerModel = require("../models/organizer");
const { v4: uuidv4 } = require("uuid");


exports.createEvent = async (req, res) => {
    try {
        const { organizerId } = req.params;
        const { eventName, category, venue, scheduleDate } = req.body;
        console.log(organizerId);

        const checkOrganizer = await organizerModel.findByPk(organizerId);
        if (!checkOrganizer) {
            return res.status(404).json('Organizer not found')
        }

        const newEvent = await events.create({
            id: uuidv4(),
            eventName,
            category,
            venue,
            scheduleDate,
            organizerId
        })
        res.status(201).json({
            message: 'Event created successful',
            data: newEvent
        })

    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};

exports.createGuest = async (req, res) => {
    try {
        const { id } = req.params
        const eventExist = await events.findByPk(id)
        if (!eventExist) {
            return res.status(404).json("event not found")
        }
        const updateGuest = await eventExist.update(req.body)

        res.status(200).json({
            message:"guest updated ",
            info:updateGuest
        })
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
};

exports.getAllEvents = async (req, res) => {

    try {
        const eventsAvailable = await events.findAll();
        const formattedEvents = eventsAvailable.map(event => ({
            ...event.toJSON(), // Convert Sequelize instance to a plain object
            guests: JSON.parse(event.guests) // Decode the JSON string
        }));

        res.status(200).json({
            message: "All events available",
            data: formattedEvents
        })

    } catch (error) {
        res.status(500).json({
            error: console.error(error)
        })
    }
};

exports.getOneEvent = async (req, res) => {

    try {
        const {id} = req.params
        const oneEvent = await events.findByPk(id);

        res.status(200).json({
            message: " one event found",
            data: oneEvent
        })

    } catch (error) {
        res.status(500).json({
            error: console.error(error)
        })
    }
}


exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { scheduleDate } = req.body;
        
        const oneEvent = await events.findByPk(id);
        
        if (!oneEvent) {
            return res.status(404).json("Product not found");
        }
        
        const updatedEvent = await oneEvent.update({ scheduleDate });
        
        res.status(200).json({
            message: "event updated",
            data: updatedEvent
        });
    } catch (error) {
        res.status(500).json({ error:error.message});
    }
};

exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        
        const oneEvent = await events.findByPk(id);
        
        if (!oneEvent) {
            return res.status(404).json("Product not found");
        }
        
        oneEvent.destroy()        
        res.status(200).json("event deleted");

    } catch (error) {
        res.status(500).json({ error:error.message});
    }
}

// exports.updateEvent = async (req,res) => {
//         try {
//             const {id} = req.params
//             const findEvent = events.findByPk(id)

    
//         } catch (error) {
//             return res.status(500).json({
//                 error: console.error(error)
//             })
//         }
//     }

// exports.fetchEventsByCategory = async (req, res) => {
//     try {
//         const { name } = req.params;

//         const category = await categoryModel.findOne({ where: { name } });
//         if (!category) {
//             return res.status(200).json({
//                 message: "Category not found",
//             });
//         }

//         const events = await event.findAll({ where: { categoryId: category.id } })

//         return res.status(200).json({
//             message: "Fetch events by category",
//             data: events
//         });
//     } catch (error) {
//         return res.status(500).json({
//             error: error.message
//         });
//     }
// };

// exports.fetchEventsByOrganizer = async (req, res) => {
//     try {
//         const { fullname } = req.params;

//         const eventOrganizer = await organizerModel.findOne({ where: { fullname } });
//         if (!eventOrganizer) {
//             return res.status(200).json({
//                 message: "Organizer not found",
//             });
//         }

//         const events = await event.findAll({ where: { organizerId: eventOrganizer.id } })

//         return res.status(200).json({
//             message: "Fetch events by organizer",
//             data: events
//         });
//     } catch (error) {
//         return res.status(500).json({
//             error: console.error(error)
//         })
//     }
// };

// 
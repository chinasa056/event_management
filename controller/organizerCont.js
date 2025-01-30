const organizer = require("../models/organizer")
const event = require("../models/event")
const { v4: uuidv4 } = require("uuid");

// const bcrypt = require("bcrypt");
// const jwt = require('jsonwebtoken');

exports.registerOrganizer = async (req, res) => {
    try {
        const { fullname, email, phone } = req.body;

        const organizerExists = await organizer.findOne({ where: { email: email } });

        if (organizerExists) {
            res.status(401).json({
                message: `organizer with email ${email} already exists`
            })
        }
        const newOrganizer = await organizer.create({
            id: uuidv4(),
            fullname,
            email,
            phone,
        })
        res.status(201).json({
            message: "New organizer created",
            info: newOrganizer
        })
    } catch (error) {
        res.status(500).json({
            error: console.error(error)
        })
    }
};

exports.getAllOrganizers = async (req, res) => {

    try {
        const organizers = await organizer.findAll();

        res.status(200).json({
            message: "All organizers available",
            data: organizers
        })

    } catch (error) {
        res.status(500).json({
            error: console.error(error)
        })
    }
}

exports.getAllOrganizersEvents = async (req, res) => {

    try {
        
        const organizersRecord = await organizer.findByPk(req.params.id, {
            include: [{
                model: event, as: "events",  // Correct alias
                attributes: ["eventName", "category", "venue", "scheduleDate"]
            }]
        })

        res.status(200).json({
            message: "All organizers available",
            data: organizersRecord
        })

    } catch (error) {
        res.status(500).json({
            error: console.error(error)
        })
    }
}

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         const checkOrganizer = await organizer.findOne({ where: { email } });

//         if (!checkOrganizer) {
//             res.status(404).json({
//                 message: 'Email or password incorrect'
//             });
//         }

//         const checkOrganizerPassword = checkOrganizer.password;
//         const checkPassword = bcrypt.compareSync(password, checkOrganizerPassword);

//         if (!checkPassword) {
//             res.status(401).json({
//                 message: 'Wrong password'
//             });
//         }

//         const generateToken = jwt.sign({
//             userId: checkOrganizer.id,
//             email: checkOrganizer.email
//         }, 'secretKey');

//         const result = {
//             fullname: checkOrganizer.fullname,
//             email: checkOrganizer.email,
//             phone: checkOrganizer.phone,
//             token: generateToken
//         }

//         res.status(201).json({
//             message: 'Login successful',
//             info: result
//         })
//     } catch (error) {
//         res.status(500).json({
//             error: console.error(error)
//         })
//     }
// };



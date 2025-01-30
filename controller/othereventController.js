const otherEvents = require("../models/otherEvents")
const { v4: uuidv4 } = require("uuid")

exports.createOtherEvent = async (req, res) => {
    try {
        const others = await otherEvents.create(req.body)

        res.status(201).json({
            message:"created",
            data:others
        })

    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            error:error.message
        })
    }
};

exports.getAllOtherEvents = async(req,res) => {
    try {
        
        const allOtherEvents = await otherEvents.findAll()
        
        res.status(200).json({
            message:"all weddings",
            data:allOtherEvents
        })
    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            error:error.message
        })
    }
}
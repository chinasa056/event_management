const wedding = require("../models/wedding")
const { v4: uuidv4 } = require("uuid")

exports.createwedding = async (req, res) => {
    try {
        const weddingEvent = await wedding.create(req.body)

        res.status(201).json({
            message:"created",
            data:weddingEvent
        })

    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            error:error.message
        })
    }
};

exports.getAllWedding = async(req,res) => {
    try {
        
        const allWedding = await wedding.findAll()
        
        res.status(200).json({
            message:"all weddings",
            data:allWedding
        })
    } catch (error) {
        res.status(500).json({
            message:'internal server error',
            error:error.message
        })
    }
}
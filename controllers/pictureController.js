const Picture = require('../models/Picture');

const fs = require('fs');

exports.create = async (req, res) => {
    
    try {

        const { name } = req.body;

        const file = req.file;

        const picture = new Picture({
            name,
            src: file.path
        });

        await picture.save();

        res.json({ picture, msg: 'Image saved!' });

    } catch(error) {
        res.status(500).json({message: "Could not upload the image"})
    }
};

exports.findAll = async (req, res) => {
    try {
        
        const pictures = await Picture.find();

        res.json(pictures);

    } catch (error) {
        res.status(500).json({message: "Could not fetch the images"})
    }
}

exports.remove = async (req, res) => {
    try {

        const picture = await Picture.findById(req.params.id);

        if (!picture) {
            return res.status(404).json({message: "Image not found"})
        }

        fs.unlinkSync(picture.src);

        await picture.remove();

        res.json({message: "Image removed!"});
        
    } catch (error) {
        res.status(500).json({message: "Could not remove the image."})
    }
}
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        // name of the file + original extension of the file
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

module.exports = upload;

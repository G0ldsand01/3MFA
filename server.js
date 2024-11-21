const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');

// Initialize the Express app
const app = express();
const port = 3000;

// Set up file upload using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');  // Directory where the STL files will be uploaded
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);  // Use the original filename for the uploaded file
  }
});
const upload = multer({ storage: storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
  fs.mkdirSync('uploads');
}

// Serve static files (optional)
app.use(express.static('public'));

// Slice the STL and return G-code
app.post('/slice', upload.single('file'), (req, res) => {
  const filePath = path.join(__dirname, 'uploads', req.file.filename);
  const outputGcodePath = path.join(__dirname, 'uploads', `${req.file.filename}.gcode`);

  // Define CuraEngine command
  // Ensure that CuraEngine is properly installed and available in your PATH
  const curaCommand = `cura_engine slice -v -j /path/to/your/cura_profile.ini -l ${filePath} -o ${outputGcodePath}`;

  exec(curaCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error slicing file: ${error.message}`);
      return res.status(500).send('Error slicing the STL file.');
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).send('Error slicing the STL file.');
    }

    console.log(`CuraEngine Output: ${stdout}`);
    
    // Send the G-code file as a response
    res.download(outputGcodePath, (err) => {
      if (err) {
        console.error("Error sending G-code:", err);
        res.status(500).send("Error sending the G-code file.");
      }
      
      // Clean up the uploaded STL and G-code files
      fs.unlinkSync(filePath);
      fs.unlinkSync(outputGcodePath);
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

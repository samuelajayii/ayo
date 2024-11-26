const cloudinary = require("cloudinary").v2;
const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const app = express();
app.use(cors()); // Enable CORS to allow frontend access
app.use(express.json()); // Parse JSON bodies (if needed for future endpoints)

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

app.get("/api/images-by-tag", async (req, res) => {
    const tag = "test"; // Hardcoded tag

    try {
        const result = await cloudinary.api.resources_by_tag(tag);
        res.json(result.resources); // Send the list of images to the frontend
    } catch (error) {
        console.error("Error fetching images by tag:", error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});


// Start the server
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

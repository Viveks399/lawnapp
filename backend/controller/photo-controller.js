import Photo from "../models/photos.js";

// Add a new photo
export const addPhoto = async (req, res) => {
  const { description, isVisible } = req.body;

  try {
    const photo = new Photo({
      content: req.file.buffer,
      description,
      isVisible,
      mimetype: req.file.mimetype,
    });

    await photo.save();
    res.json({ message: "Photo added successfully", photo });
  } catch (error) {
    res.status(500).json({ message: "Error uploading photo", error });
  }
};

// Get all visible photos
export const getPhotos = async (req, res) => {
  try {
    const photos = await Photo.find({ isVisible: true });

    const photosWithBase64 = photos.map((photo) => {
      const base64Content = Buffer.from(photo.content).toString("base64"); 
      return {
        ...photo._doc,
        content: base64Content,
      };
    });

    res.json(photosWithBase64);
  } catch (error) {
    res.status(500).json({ message: "Error fetching photos" });
  }
};

// Delete a photo by ID
export const deletePhotoById = async (req, res) => {
  try {
    await Photo.findByIdAndDelete(req.params.id);
    res.json({ message: "Photo deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting photo." });
  }
};

import Offer from "../models/offers.js"; // Import the Offer model

// Get Offer Function
export const getOffers = async (req, res) => {
  try {
    console.log("inside getOffers");
    const offers = await Offer.find({ isVisible: true }); // Get only visible offers
    res.json(offers); // Return all offers
  } catch (error) {
    console.error("Error fetching offers:", error);
    res.status(500).json({ message: "Error fetching offers." });
  }
};

// Update Offer Function
export const updateOrCreateOffer = async (req, res) => {
  console.log("im here, update or create offers");
  const { content, isVisible } = req.body;

  try {
    // Create a new offer with the content and visibility
    const offer = new Offer({ content, isVisible });
    await offer.save();

    res.json({ message: "Offer created successfully", offer });
  } catch (error) {
    console.error("Error updating the offer:", error);
    res.status(500).json({ message: "Error creating the offer." });
  }
};

// Delete Offer
export const deleteOffer = async (req, res) => {
  const { id } = req.params;

  try {
    const offer = await Offer.findByIdAndDelete(id); // Find the offer by ID and delete it

    if (!offer) {
      return res.status(404).json({ message: "Offer not found." });
    }

    res.json({ message: "Offer deleted successfully." });
  } catch (error) {
    console.error("Error deleting offer:", error);
    res.status(500).json({ message: "Error deleting offer." });
  }
};

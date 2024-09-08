import dotenv from "dotenv";
import TimeSlot from "../models/timeSlot.js"; // Adjust the path to your TimeSlot model

dotenv.config();

export const generateTimeSlots = async () => {
  const slots = [
    "8AM-9AM",
    "9AM-10AM",
    "10AM-11AM",
    "11AM-12PM",
    "12PM-1PM",
    "1PM-2PM",
    "2PM-3PM",
    "3PM-4PM",
    "4PM-5PM",
  ];

  // Set the start date to August 1st of the current year
  const start = new Date();
  start.setMonth(7); // 7 = August (0-indexed), sets to August
  start.setDate(1); // Start from the 1st of August

  const end = new Date(start); // Copy start date
  end.setFullYear(start.getFullYear() + 1); // One year from this August

  let currentDate = start;

  while (currentDate <= end) {
    const formattedDate = currentDate.toISOString().split("T")[0]; // Format date as YYYY-MM-DD

    console.log(`Generating slots for: ${formattedDate}`);

    for (const slot of slots) {
      // Check if the time slot already exists
      const existingSlot = await TimeSlot.findOne({
        date: formattedDate,
        slot: slot,
      });

      if (!existingSlot) {
        await TimeSlot.create({
          slot,
          date: formattedDate,
          status: "available",
        });
      }
    }

    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  console.log("Time slots generated and inserted successfully!");
};

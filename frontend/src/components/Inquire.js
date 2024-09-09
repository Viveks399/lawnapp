import React, { useState, useEffect } from "react";
import axios from "axios";

const Inquire = () => {
  const [loading, setLoading] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlotText, setSelectedSlotText] = useState("");

  // Fetch available time slots for the selected date
  useEffect(() => {
    if (selectedDate) {
      const fetchTimeSlots = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/api/check/checkSlot`,
            {
              params: { date: selectedDate },
            }
          );
          setTimeSlots(response.data);
        } catch (error) {
          console.error("Error fetching time slots:", error);
        }
      };

      fetchTimeSlots();
    }
  }, [selectedDate]);

  const handleSlotChange = (e) => {
    const selectedIndex = e.target.selectedIndex;
    const selectedOptionText = e.target[selectedIndex].text;

    setSelectedSlot(e.target.value);
    setSelectedSlotText(selectedOptionText);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/check/bookSlot`,
        {
          firstName,
          lastName,
          email,
          phone,
          address,
          message,
          timeSlotId: selectedSlot,
          timeSlotText: selectedSlotText,
          date: selectedDate,
        }
      );

      if (response.data.success) {
        const bookingDate = selectedDate;
        alert(response.data.message);

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setSelectedDate("");
        setSelectedSlot("");
        setMessage("");
        setSelectedSlotText("");

        const updatedSlots = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/check/checkSlot`,
          {
            params: { date: bookingDate },
          }
        );
        setTimeSlots(updatedSlots.data);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error booking time slot:", error);
      alert("There was an error booking the time slot.");
    } finally {
      setLoading(false); // Hide loader when done
    }
  };

  return (
    <div className="bg-gradient-to-r from-green-100 to-gray-100 p-8 rounded-lg shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wider text-gray-800">
          Ready to Transform?
        </h2>
        <h3 className="text-5xl md:text-6xl font-extrabold mt-4 text-green-600">
          Your Perfect Lawn Awaits
        </h3>
        <h4 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-700">
          Expert Care & Unmatched Service
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500">
          <h5 className="text-xl font-bold mb-4 text-green-600">About Us</h5>
          <p className="text-gray-700 leading-relaxed">
            At Green Glow, we're dedicated to making your lawn the envy of the
            neighborhood with our comprehensive services like mowing, edging,
            and cleanups. Trust our experienced team to keep your lawn looking
            its best all year round. Contact us today to transform your outdoor
            space.
          </p>
        </div>

        {/* Inquiry Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500">
          <h5 className="text-xl font-bold text-green-600 mb-4">Inquire</h5>
          <h1 className="mb-1 text-gray-700">
            Fields marked with an * are required
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm mb-2 text-gray-600"
                  htmlFor="firstName"
                >
                  FIRST NAME *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 rounded-md border border-green-500"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-2 text-gray-600"
                  htmlFor="lastName"
                >
                  LAST NAME *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 rounded-md border border-green-500"
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-2 text-gray-600"
                  htmlFor="email"
                >
                  EMAIL *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 rounded-md border border-green-500"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label
                  className="block text-sm mb-2 text-gray-600"
                  htmlFor="phone"
                >
                  PHONE *
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-2 rounded-md border border-green-500"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <div className="md:col-span-2">
                <label
                  className="block text-sm mb-2 text-gray-600"
                  htmlFor="address"
                >
                  ADDRESS *
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 rounded-md border border-green-500"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
                <div>
                  <label
                    className="block text-sm mb-2 text-gray-600"
                    htmlFor="date"
                  >
                    PREFERRED DATE *
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full p-2 rounded-md border border-green-500"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm mb-2 text-gray-600"
                    htmlFor="timeSlot"
                  >
                    PREFERRED TIME SLOT *
                  </label>
                  <select
                    id="timeSlot"
                    value={selectedSlot}
                    onChange={handleSlotChange}
                    className="w-full p-2 rounded-md border border-green-500"
                    required
                  >
                    <option value="" disabled>
                      Select a time slot
                    </option>
                    {timeSlots.map((slot) => (
                      <option key={slot._id} value={slot._id}>
                        {slot.slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                className="block text-sm mb-2 text-gray-600"
                htmlFor="message"
              >
                MESSAGE *
              </label>
              <textarea
                id="message"
                className="w-full p-2 rounded-md border border-green-500"
                rows="4"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* Contact Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform transition duration-500">
          <h5 className="text-xl font-bold text-green-600 mb-4">Contact</h5>
          <p className="mb-2">
            <i className="fas fa-phone text-green-500"></i> 0211367151 /
            0284578125
          </p>
          <p>
            <i className="fas fa-envelope text-green-500"></i>{" "}
            <a
              href="mailto:greenglow.nz@gmail.com"
              className="text-blue-700 hover:text-green-500 transition duration-300"
            >
              greenglow.nz@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Loader Popup Modal */}
      {loading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-500"></div>
            <p className="text-center text-gray-700 mt-4">Processing...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inquire;

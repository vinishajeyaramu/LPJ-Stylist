import React, { useState } from "react";
import './Calendar.css'
const Calendar = () => {
  // ✅ Hooks must be declared at the top before return
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    notes: "",
  });

  // Months array
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Get total days in selected month & year
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setStep(2);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    setStep(3);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  return (
    <>
    <div className="container">
      {/* Step 1: Select Date */}
      {step === 1 && (
        <div className="calendar">
          <h2>Select a Date</h2>

          {/* Month & Year Selection */}
          <div className="month-year-selection">
            <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
              {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
              ))}
            </select>

            <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
              {[...Array(10)].map((_, index) => (
                <option key={index} value={selectedYear - 5 + index}>
                  {selectedYear - 5 + index}
                </option>
              ))}
            </select>
          </div>

          {/* Display Dates */}
          <div className="dates">
            {[...Array(getDaysInMonth(selectedMonth, selectedYear)).keys()].map((day) => (
              <button key={day} onClick={() => handleDateClick(day + 1)} className="date-button">
                {day + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Select Time */}
      {step === 2 && (
        <div className="time-selection">
          <h2>Select a Time on {months[selectedMonth]} {selectedDate}, {selectedYear}</h2>
          <div className="times">
            {["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"].map((time) => (
              <button key={time} onClick={() => handleTimeClick(time)} className="time-button">
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Booking Form */}
      {step === 3 && (
        <form className="booking-form" onSubmit={handleSubmit}>
          <h2>You are booking: Consultation Phone Call</h2>
          <p>{months[selectedMonth]} {selectedDate}, {selectedYear} at {selectedTime}</p>
          
          <input type="text" name="name" placeholder="Name" onChange={handleInputChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleInputChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" onChange={handleInputChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleInputChange} />
          <input type="text" name="city" placeholder="City" onChange={handleInputChange} />
          <input type="text" name="state" placeholder="State" onChange={handleInputChange} />
          <input type="text" name="zip" placeholder="Zip" onChange={handleInputChange} />
          <textarea name="notes" placeholder="Notes" onChange={handleInputChange}></textarea>

          <button type="submit" className="submit-button">Book This Appointment</button>
        </form>
      )}

      {/* Step 4: Confirmation */}
      {step === 4 && (
        <div className="confirmation">
          <h2>Appointment Confirmed!</h2>
          <p>Thank you, {formData.name}. Your appointment on {months[selectedMonth]} {selectedDate}, {selectedYear} at {selectedTime} has been booked.</p>
        </div>
      )}
    </div>
    </>
  );
};

export default Calendar;

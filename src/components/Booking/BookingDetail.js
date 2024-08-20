import React, { useEffect, useState } from 'react';
import ApiService from '../../controllers/ApiService';

const BookingDetail = ({ bookingId }) => {
  const [bookingDetail, setBookingDetail] = useState(null);

  useEffect(() => {
    const fetchBookingDetail = async () => {
      try {
        const data = await ApiService.getBookings(); // Assuming an endpoint to fetch a specific booking
        setBookingDetail(data.find((booking) => booking.id === bookingId));
      } catch (error) {
        console.error('Error fetching booking detail', error);
      }
    };

    fetchBookingDetail();
  }, [bookingId]);

  if (!bookingDetail) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Booking Details</h3>
      <p>Property ID: {bookingDetail.propertyId}</p>
      <p>Date: {bookingDetail.date}</p>
      <p>User: {bookingDetail.userId}</p>
    </div>
  );
};

export default BookingDetail;

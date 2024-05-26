import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListingInfo from "../components/listing/listingInfo";
import useCountries from "../hooks/useCountries";
import Map from "../components/common/map";
import Calendar from "../components/common/calendar";
import ListingHead from "../components/listing/listingHead";
import Layout from "../components/partials/layout/index";
import Home from "../components/home";
import Container from "../components/utils/container";

const InfoPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  /* useEffect(() => {
    axios.get(`/api/listings/${id}`).then(response => {
      setListing(response.data);
      setBookings(response.data.bookings);
    });
  }, [id]); 

  if (!listing) {
    return <div>Loading...</div>;
  } */

  const { getByValue } = useCountries();

  const coordinates = getByValue("FR")?.latlng;

  const disabledDates = bookings.reduce((acc, booking) => {
    const currentDate = new Date(booking.startDate);
    const endDate = new Date(booking.endDate);
    while (currentDate <= endDate) {
      acc.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return acc;
  }, []);

  const handleDateChange = (ranges) => {
    setSelectedRange(ranges);
  };

  return (
    <Layout searchBar={false}>
      <Container> 
      <div className="max-w-7xl mx-auto p-6 py-24 ">
        <div className="mb-6">
          {/*<img src={listing.imageUrl} alt={listing.title} className="w-full h-auto rounded-lg" />*/}
          <ListingHead
            id="1"
            imageSrc="https://images.unsplash.com/photo-1620983566707-8f1e7c9b7d2c"
            title="Villa de luxe"
            locationValue="FR"
            currentUser="1"
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="md:col-span-3">
            <ListingInfo
              /* user={listing.user}
            category={listing.category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.location} */
              category="plage"
              description="hzgdjhgdjqhs"
              roomCount="5"
              guestCount="10"
              bathroomCount="2"
              //locationValue='TN'
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-3">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar
                value={selectedRange}
                onChange={handleDateChange}
                disabledDates={disabledDates}
              />
              <button className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600">
                Reserve
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              {/* <Map center={listing.location.coordinates} /> */}
              <Map center={coordinates} />
            </div>
          </div>
        </div>
        </div>
        </Container>
    </Layout>
  );
};

export default InfoPage;

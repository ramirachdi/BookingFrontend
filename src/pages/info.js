import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListingInfo from "../components/listing/listingInfo";
import useCountries from "../hooks/useCountries";
import Map from "../components/common/map";
import Calendar from "../components/common/calendar";
import ListingHead from "../components/listing/listingHead";
import Layout from "../components/partials/layout/index";
import Container from "../components/utils/container";
import { getListing } from "../services/listing";

const InfoPage = () => {
  const { id } = useParams();
  const [listing, setListing] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

  const { getByValue } = useCountries();

  // const coordinates = getByValue(listing.country)?.latlng;

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

  useEffect(() => {
    getListing(id, setListing);
  }, [id]);

  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <Layout searchBar={false}>
      <Container>
        <div className="max-w-7xl mx-auto p-6 py-24 ">
          <div className="mb-6">
            <ListingHead
              id={id}
              imageSrc={listing.image_url}
              title={listing.title}
              locationValue={listing.country}
              currentUser="1"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="md:col-span-3">
              <ListingInfo
                user={listing.host}
                category={listing.type}
                description={listing.description}
                roomCount={listing.rooms}
                guestCount={listing.capacity}
                bathroomCount={listing.bathrooms}
                locationValue={listing.country}
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
                  Reserver
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Map height={"full"} center={getByValue(listing.country)?.latlng} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default InfoPage;

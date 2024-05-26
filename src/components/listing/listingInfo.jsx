import React from 'react';
import useCountries from '../../hooks/useCountries';
import Avatar from '../utils/avatar.jsx';
import ListingCategory from './listingCategory';
import Map from '../common/map'; 


const ListingInfo = ({
  user,
  category,
  description,
  roomCount,
  guestCount,
  bathroomCount,
  locationValue,
}) => {
 /* const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;*/

  return (
    <div className="flex flex-col col-span-4 gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-1 text-xl font-semibold">
          <div>Hosted by {user?.name}</div>
          {/*<Avatar src={user?.image} alt={user?.name} key={user?.id} />*/}
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <div>{guestCount} guests</div>
          <div>{roomCount} rooms</div>
          <div>{bathroomCount} bathrooms</div>
        </div>
      </div>
      <hr />
      {/*category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={typeof category.description === 'string' ? category.description : ''}
        />
      )*/}
      <hr />
      <div className="text-lg font-light text-neutral-500">{description}</div>
      <hr />
      {/*<Map center={coordinates} />*/}
    </div>
  );
};

export default ListingInfo;

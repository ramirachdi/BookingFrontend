export const getListings = async (setListings) => {
    fetch(`http://localhost:3000/listings`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Cookie': `access-token=${cookies["access-token"]}`,
        },
        // credentials: "include",
        // body: JSON.stringify({
        //     productId: productId
        // })
    }).then(response => response.json())
        .then(data => setListings(data))
        .catch(err => console.log(err))
}

export const createListing = async (data, cookies) => {
    fetch(`http://localhost:3000/listings`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies["access-token"]}`,
        },
        credentials: "include",
        body: JSON.stringify({
            title: data.title,
            description: data.description,
            price: data.price,
            country: data.location.value,
            capacity: data.guestCount,
            rooms: data.roomCount,
            bathrooms: data.bathroomCount,
            image_url: data.imageSrc,
            type: data.category
        })
    }).then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
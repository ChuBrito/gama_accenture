const SimpleSearch = async (searchParams) => {
  const token = localStorage.getItem("token");

  const REQ_METHOD = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      infants: 0,
      children: 0,
      currencyCode: "BRL",
      max: searchParams.max,
      adults: searchParams.adults,
      originCode: searchParams.originCode,
      returnDate: searchParams.returnDate,
      departureDate: searchParams.departureDate,
      destinationCode: searchParams.destinationCode,
    }),
  };

  await fetch(
    "https://javatravelers-backend.azurewebsites.net/tickets/offers",
    REQ_METHOD
  ).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();
      console.log(answer);
    }
  });
};

const LocationSearch = async (location) => {
  const token = localStorage.getItem("token");

  const REQ_METHOD = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify({
      location: location,
    }),
  };

  await fetch(
    "https://javatravelers-backend.azurewebsites.net/tickets/search/location",
    REQ_METHOD
  ).then(async (response) => {
    if (response.ok) {
      const answer = await response.json();
      console.log(answer);
    }
  });
};

export { SimpleSearch, LocationSearch };

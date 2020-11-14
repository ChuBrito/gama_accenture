export const TICKET_MOCK_1 = {
    initialDestination: "New York",
    initialIataCode: "NYC",
    finalDestination: "Madrid",
    finalIataCode: "MAD",
    oneWay: true,
    favorited: false,
    value: 455.45,
    flyInfos: [{
            //infos da ida
            airline: "Gol", // ele envia o codigo ai tem que traduzir pelo campo dictionaries no final da response
            flyType: "Econômica",
            flyDuration: "1:00",
            dates: {
                initialDate: "12/04/2021",
                initialTime: "17:00",
                arriveDate: "12/05/2021",
                arriveTime: "13:00",
            },
        },
        {
            //infos da volta
            airline: "Gol",
            flyType: "Econômica",
            flyDuration: "1:00",
            dates: {
                initialDate: "12/04/2021",
                initialTime: "17:00",
                arriveDate: "12/05/2021",
                arriveTime: "13:00",
            },
        },
    ],
};
export const TICKET_MOCK_2 = {
    initialDestination: "Paris",
    initialIataCode: "PAR",
    finalDestination: "Berlin",
    finalIataCode: "BER",
    oneWay: false,
    value: 385.45,
    favorited: false,
    flyInfos: [{
            //infos da ida
            airline: "Air France", // ele envia o codigo ai tem que traduzir pelo campo dictionaries no final da response
            flyType: "Econômica",
            flyDuration: "1:00",
            dates: {
                initialDate: "19/04/2021",
                initialTime: "14:00",
                arriveDate: "19/04/2021",
                arriveTime: "14:45",
            },
        },
        {
            //infos da volta
            airline: "Air France",
            flyType: "Econômica",
            flyDuration: "1:00",
            dates: {
                initialDate: "23/04/2021",
                initialTime: "20:00",
                arriveDate: "24/04/2021",
                arriveTime: "22:15",
            },
        },
    ],
};

export const MOCK_TICKET_LIST = [TICKET_MOCK_1, TICKET_MOCK_2, TICKET_MOCK_1];

export const MOCK_USER_DATA = {
  name: "Fedrerico Novo",
  email: "fe.novo@fed.com",
  document: "377.670.555-08",
  phone: "11 986111616",
};

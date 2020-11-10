const getUserData = async () => {
    const data = await fetch("https://www.cheapshark.com/api/1.0/deals")
    .then(async (response) => {
        if(response.ok) {
            const answer = await response.json();
            return answer;
        }
    }).then(async (response) => {
        const titleData = response.map(item => item.title);
        return titleData;
    });
    return data;
}

export default getUserData;

/*import { useEffect, useState } from "react";
export default function GetData() {
    const [pokemons, setPokemons] = useState([]);
    const URL_API = "https://pokeapi.co/api/v2/pokemon/";

    const loadPokemons = async () => {
        const response = await fetch(URL_API);
        const data = await response.json();
        console.log(data.results)
    };

    useEffect(() => {
        loadPokemons();
        return () => {
            setPokemons([]);
        };
    }, []);
}*/
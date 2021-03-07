
import React,{useState} from 'react'
const Pokeman = () => {
    const [pokemon, setPokemon] = useState([]);
    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then((jsonResponse) => {
            console.log(jsonResponse);
             setPokemon(jsonResponse.results);
            })
            .catch((error) => {
                console.log("OOPS! Something went wrong!");
                console.log(error);
              });
        return (
        <div className = "name">  
            <button onClick={Pokeman}>Fetch Pokemon</button>
            {
                pokemon.map((mon,index)=>
                <div>
                    <h5>{mon.name}</h5>
                </div>
                  )
            }
        </div>
    );
}
export default Pokeman;
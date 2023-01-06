import React, { useEffect, useState } from "react";
import PokeCard from "src/components/PokeList/PokeCard";
import c from "src/components/PokeList/PokeList.module.scss";

const PokeList = () => {
  const [allPokemons, setAllPokemons] = useState<any>([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0"
    );
    const data = await res.json();

    function createPokemonObject(results: any) {
      results.forEach(async (pokemon: any) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList: any) => [...currentList, data]);
        await allPokemons.sort((a: any, b: any) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
    // console.log(allPokemons);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);
  return (
    <div className={c.app__container}>
      <div className={c.poke__container}>
        <div className={c.all__container}>
          {allPokemons.map((pokemonStats: any, index: number) => (
            <PokeCard
              key={index}
              id={pokemonStats.id.toString().padStart(3, "0")}
              image={
                pokemonStats.sprites.other["official-artwork"].front_default
              }
              name={pokemonStats.name.replace(/^./, (str: string) =>
                str.toUpperCase()
              )}
              type={pokemonStats.types[0].type.name}
              weight={(pokemonStats.weight / 10).toFixed(1)}
              height={(pokemonStats.height / 10).toFixed(1)}
              stats={pokemonStats.stats.map((stat: any) => stat.base_stat)}
              statsName={pokemonStats.stats.map((stat: any) => stat.stat.name)}
              totalStats={pokemonStats.stats
                .map((stat: any) => stat.base_stat)
                .reduce((base_stat: number, acc: number) => base_stat + acc)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeList;

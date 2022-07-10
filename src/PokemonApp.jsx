import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {
  const dispath = useDispatch();

  const { page, pokemons, isLoading } = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispath(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <span>Loading: {isLoading ? "True" : "False"}</span>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
        <li>Hola</li>
      </ul>
      <button
        disabled={isLoading}
        onClick={() => dispath(getPokemons(page + 1))}
      >
        Next
      </button>
    </>
  );
};

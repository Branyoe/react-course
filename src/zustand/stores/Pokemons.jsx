import create from "zustand";
import ApiCall from "../../api";

//crear un store
const usePokemonsStore = create((set, get) => ({
  isLoading: false,
  hasError: false,
  errorMessage: "",
  getPokemons: async () => {
    try {
      set(clearState);

      const pokemonsResponse = await ApiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
      set({ pokemons: pokemonsResponse.results });
    } catch (error) {
      set({
        pokemons: [],
        hasError: true,
        errorMessage: error.message
      })
    } finally {
      set({ isLoading: false })
    }
  },
  pokemons: [],
  getPokemonDetail: async (id = "") => {
    if (!id) return Promise.reject("Id es requerido");
    try {
      set(clearState);

      const pokemonsDetailFound = await ApiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
      set({ pokemonDetail: pokemonsDetailFound });
    } catch (error) {
      set({
        pokemonDetail: {},
        hasError: true,
        errorMessage: error.message
      })
    } finally {
      set({isLoading: false});
    }
  },
  pokemonDetail: {}
}));

const clearState = {
  isLoading: false,
  hasError: false,
  errorMessage: ""
}

export default usePokemonsStore;
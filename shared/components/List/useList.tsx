import { atom, useAtom } from "jotai";
import { atomWithQuery } from "jotai/query";
import { get as getData } from "../../utils/api";
const listAtom = atom<ItemLookUp[]>([]);
const selectedListItemAtom = atom<string>("");

const drinksAtom = atomWithQuery((get) => ({
  queryKey: ["users", get(listAtom)],
  queryFn: async ({ queryKey: [, id] }) => {
    //getData fetches the list, using axios, from our api layter
    const res = getData(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    ).then(({ drinks }) => drinks);

    //return the list of drinks
    return res;
  },
}));
export interface ItemLookUp {
  idDrink: string;
  strCategory: string;
  strDrink: string;
  strIBA: string;
  strDrinkThumb: string;
}
export const useList = () => {
  const [selectedItem, setSelectedItem] = useAtom(selectedListItemAtom);
  const listItemLookup = (id: string) =>
    list.find((item: ItemLookUp) => item.idDrink === id);

  const [list] = useAtom(drinksAtom);
  return { list, listItemLookup, selectedItem, setSelectedItem };
};

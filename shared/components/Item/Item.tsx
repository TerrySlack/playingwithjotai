import { useRouter } from "next/router";
import { useList, ItemLookUp } from "../List/useList";

export const Item = () => {
  const router = useRouter();
  //Pull data from jotai
  const { selectedItem: id, listItemLookup } = useList();
  const selectedItem: ItemLookUp | undefined = listItemLookup(id);
  const onClick = () => {
    //trigger a route change and go home
    router.push("/list");
  };
  return (
    <div className="container">
      <ul>
        <li>{selectedItem?.strCategory}</li>
        <li>{selectedItem?.strDrink}</li>
        <li>{selectedItem?.strIBA}</li>
        <li>
          <a onClick={onClick}>
            <img src={selectedItem?.strDrinkThumb} alt="loading" />
          </a>
        </li>
      </ul>
    </div>
  );
};

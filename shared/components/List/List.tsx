import { Fragment } from "react";
import { useList } from "./useList";
import { useRouter } from "next/router";

export const List = () => {
  const { list, setSelectedItem } = useList();
  const router = useRouter();
  const onClick = (id: string) => {
    //This comes from the method from the hook.  Store the selected item Id, using jotai.
    setSelectedItem(id);

    //trigger a route change and go home
    router.push("/item");
  };

  return (
    list?.length && (
      <div className="container">
        <ul>
          {list.map(
            ({
              idDrink,
              strCategory,
              strDrink,
              strIBA,
              strDrinkThumb,
            }: any) => {
              return (
                <Fragment key={idDrink}>
                  <li>{strCategory}</li>
                  <li>{strDrink}</li>
                  <li>{strIBA}</li>
                  <li>
                    <a
                      onClick={() => {
                        onClick(idDrink);
                      }}
                    >
                      <img src={strDrinkThumb} alt="loading" />
                    </a>
                  </li>
                </Fragment>
              );
            }
          )}
        </ul>
      </div>
    )
  );
};

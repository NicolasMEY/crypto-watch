import React, { useEffect } from "react";
import imgStarEmpty from "../imgs/star-empty.svg";
import imgStarfull from "../imgs/star-full.svg";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = usestate(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes(coinId)) {
        setLike(true);
      }
    }
  });

  // Logique du local storage
  const idChecker = (id) => {
    let favList = null;
    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }
    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    <img
      onclick={() => idChecker(coinId)}
      src={like ? { imgStarfull } : { imgStarEmpty }}
      alt="icon-star"
    />
  );
};

export default StarIcon;

import React, { useEffect, useState } from "react";
import imgStarfull from "../imgs/star-full.svg";
import { useDispatch } from "react-redux";
import { setStableState } from "../../action/stable.action";
import { setListDisplay } from "../../action/list.action";

const TableFilters = () => {
  const [showStable, setShowStable] = useState(true);
  const [showFavList, setShowFavlist] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStableState(showStable));
    dispatch(setListDisplay(showFavList));
  }, [showStable, showFavList]);

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        <div className="stable-checkbox-container">
          <input
            type="checkbox"
            id="stableCoin"
            defaultChecked={true}
            onChange={() => setShowStable(!showStable)}
          />
          <label htmlFor="stableCoin">
            {showStable ? "Avec stable coin" : "Sans stable coin"}
          </label>
        </div>
        <div
          className={showFavList ? "no-list-btn" : "no-list-btn active"}
          onClick={() => setShowFavlist(false)}
        >
          <p>Aucune liste</p>
        </div>
        <div
          className={showFavList ? "fav-list active" : "fav-list"}
          onClick={() => setShowFavlist(true)}
        >
          <p>Liste des favoris</p>
          <img src={imgStarfull} alt="icon-star" />
        </div>
      </div>
    </div>
  );
};

export default TableFilters;

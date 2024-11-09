import React from "react";
import imgChartIcon from "../imgs/chart-icon.svg";
import imgInfoIcon from "../imgs/info-icon.svg";

// Fonction pour afficher les coins qui valorisent plusieurs chiffres aprés la virgule et qui peuvent sembler être = à 0 sinon (affichage de centimes de centimes)
const TableLine = ({ coin, index }) => {
  const priceFormater = (num) => {
    if (Math.round(num).toString().length < 4) {
      return new Intl.NumberFormat("us-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 7,
      }).format(num);
    } else {
      return num;
    }
  };

  const mktCapFormater = (num) => {
    //Pour éclater un number il faut le passer en string
    let newNum = String(num).split("").slice(0, -6); // on retire les 6 derniers éléments du tableau crée avec split, pour retirer les 000 000 des milliards
  };
  return (
    <div className="table-line">
      <div className="infos-container">
        <span>*</span>
        <p>{index + 1}</p>
        <div className="img">
          <img src={coin.image} height="20" alt="logo" />
        </div>
        <div className="infos">
          <div className="chart-img">
            <img src={imgChartIcon} alt="chart-icon" />
          </div>
          <h4>{coin.name}</h4>
          <span>- {coin.symbol.toUpperCase()}</span>
          <a
            target="_blank"
            href={
              "https://www.coingecko.com/fr/pi%C3%A8ces/" +
              coin.name
                .toLowerCase()
                .replace(" ", "-")
                .replace(" ", "-")
                .replace(" ", "-")
            }
          >
            <img src={imgInfoIcon} alt="info-icon" />
          </a>
        </div>
      </div>
      <p>{priceFormater(coin.current_price).toLocaleString()} $</p>
      <p className="mktcap">{mktCapFormater(coin.market_cap)} Md$</p>
    </div>
  );
};

export default TableLine;

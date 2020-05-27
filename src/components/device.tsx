import React, { ReactElement } from "react";
import style from "./device.module.scss";
import favorites from "../assets/icons/favorites-active.svg";
import * as Api from "../../types/api";

type Props = {
  data: Api.Device;
};

export const Device = ({ data }: Props): ReactElement => {
  const variant = data?.variants?.find(
    (variant) => variant.id === data?.featuredVariantId
  );

  return (
    <article className={style.device} data-testid="device">
      <div className={style.headlines}>
        <h1>
          <span className={style.brand}>{data.brandName} </span>
          <span className={style.terminal}>{data.name}</span>
        </h1>
      </div>
      <div className={style.photo}>
        <img
          src={`/static/devices/${variant?.image}`}
          alt={variant?.imageAlt}
        />
      </div>
      <div className={style.properties}>
        <ul className={style.design}>
          <li>{variant?.color}</li>
          <li>{variant?.size}</li>
        </ul>
        <img className={style.favorites} src={favorites} alt="Favorites" />
        <p
          className={style.description}
          dangerouslySetInnerHTML={{ __html: data.descriptionHtml }}
        />
      </div>
    </article>
  );
};

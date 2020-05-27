import React, { ReactElement, Fragment, useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

import largeHero from "../assets/photos/5349.jpg";
import style from "./sample.module.scss";
import { Spinner } from "./spinner";
import { Device } from "./device";
import * as Api from "../../types/api";

export const Sample = (): ReactElement => {
  const [data, setData] = useState<Api.Device>();

  const renderDevice = (): ReactElement =>
    !data ? <Spinner className={style.spinner} /> : <Device data={data} />;

  useEffect(() => {
    axios("/api/device/379")
      .then((result: AxiosResponse<Api.Device>) => {
        setData(result?.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <header className={style.hero}>
        <img src={largeHero} />
      </header>
      <main className={style.main}>
        <div className={style.gutter}>{renderDevice()}</div>
      </main>
    </Fragment>
  );
};

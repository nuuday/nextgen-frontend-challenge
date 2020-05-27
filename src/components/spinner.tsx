import React, { ReactElement } from "react";
import style from "./spinner.module.scss";

type Props = {
  className?: string;
};

export const Spinner = ({ className }: Props): ReactElement => (
  <svg className={[style.spinner, className].join(" ")} data-testid="spinner">
    <circle />
  </svg>
);

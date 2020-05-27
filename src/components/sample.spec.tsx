import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { mocked } from "ts-jest/utils";
import axios, { AxiosResponse } from "axios";

import { Sample } from "./sample";

jest.mock("axios");

const device: AxiosResponse = {
  data: {},
  status: 200,
  statusText: "OK",
  config: {},
  headers: {},
};

describe("Testing <Sample />", () => {
  test("Show spinner then device", async () => {
    mocked(axios).mockResolvedValue(device);

    const { queryByTestId } = render(<Sample />);

    expect(queryByTestId("spinner")).toBeInTheDocument();

    await waitFor(() => {
      expect(queryByTestId("device")).toBeInTheDocument();
    });
  });
});

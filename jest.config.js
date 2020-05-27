module.exports = {
  roots: ["src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  transform: {
    "\\.(ts|tsx)?$": "ts-jest",
    "\\.(jpg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/jest-file-transformer.js",
  },
};

import path from "path";
import { Configuration } from "webpack";

const paths = {
  dist: path.join(__dirname, "dist"),
};

module.exports = ({ production }: Record<string, boolean>) => {
  const config: Configuration = {
    mode: production ? "production" : "development",
    entry: "./src/index.tsx",
    devtool: production ? "source-map" : "eval-source-map",
    output: {
      path: paths.dist,
      filename: "index.js",
      library: "noya-library-mui",
      libraryTarget: "umd",
      globalObject: "this",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    // externals: {
    //   react: "React",
    //   "react-dom": "ReactDOM",
    // },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: "ts-loader",
          options: {
            compilerOptions: {
              declaration: true,
              declarationDir: paths.dist,
            },
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  };

  return config;
};

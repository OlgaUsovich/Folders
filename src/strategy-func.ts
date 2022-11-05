import { fileStrategy, folderStrategy } from "./components";

export const strategyFunc = (
  strategy: any,
  name: string,
  type: string,
  ...args: any
) => {
  return strategy(name, type, ...args);
};

export const chooseStrategy = (type: "FILE" | "FOLDER") => {
  return type === "FILE" ? fileStrategy : folderStrategy;
};

import { fileStrategy } from "./components/File"
import { folderStrategy } from "./components/Folder"

export const strategyFunc = (strategy: any, name: string, type: string, ...args: any) => {
    return strategy(name, type, ...args)
}

export const chooseStrategy = (type: "FILE" | "FOLDER") => {
    return type === "FILE" ? fileStrategy : folderStrategy
}
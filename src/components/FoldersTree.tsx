import { folderStrategy } from "./Folder";

export interface IFile {
  name: string;
  type: "FILE";
}

interface IFolder {
  name: string;
  type: "FOLDER";
  children: (IFolder | IFile)[];
}

export const FoldersTree = ({data}: any) => {
  return folderStrategy(data.name, data.type, data.children)
};

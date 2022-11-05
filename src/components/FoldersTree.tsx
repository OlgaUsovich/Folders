import { FileStategy } from "./File";
import { FolderStategy } from "./Folder";

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
  return data.type === "FOLDER"
    ? <FolderStategy name={data.name} type={data.type} children={data.children} />
    : <FileStategy name={data.name} type={data.type} />;
};

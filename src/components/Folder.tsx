import { fileStrategy, IFile } from "./File";
import { v4 as uuidv4 } from 'uuid';

interface IFolder {
  name: string;
  type: "FOLDER";
  children: (IFolder | IFile)[];
}

export const Folder = ({name, type, children}: IFolder) => {
  return (
    <div>
      Folder:{name}
      <ul>
        {children.map((child) =>
          child.type === "FILE"
          ? <li key={uuidv4()}>{fileStrategy(child.name, child.type)}</li>
          : <li key={uuidv4()}>{folderStrategy(child.name, child.type, child.children)}</li>
        )}
      </ul>
    </div>
  );
};

export const folderStrategy = (name: string, type: "FOLDER", children: (IFolder | IFile)[]) => {
    return <Folder name={name} type={type} children={children} />
}
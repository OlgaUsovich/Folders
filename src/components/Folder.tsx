import { FileStategy, IFile } from "./File";
import { v4 as uuidv4 } from 'uuid';

interface IFolder {
  name: string;
  type: "FOLDER";
  children: (IFolder | IFile)[];
}

export const FolderStategy = ({name, type, children}: IFolder) => {
  return (
    <div>
      Folder:{name}
      <ul>
        {children.map((child) =>
          child.type === "FILE"
          ? <li key={uuidv4()}><FileStategy name={child.name} type={child.type} /></li>
          : <li key={uuidv4()}><FolderStategy name={child.name} type={child.type} children={child.children} /></li>
        )}
      </ul>
    </div>
  );
};

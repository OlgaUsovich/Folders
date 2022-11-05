export interface IFile {
    name: string;
    type: "FILE"
}

export const FileStategy = ({name, type}: IFile) => {
    return <div>File: ${name}</div>
}
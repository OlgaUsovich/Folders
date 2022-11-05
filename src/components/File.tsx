export interface IFile {
    name: string;
    type: "FILE"
}

export const File = ({name, type}: IFile) => {
    return <div>File: {name}</div>
}

export const fileStrategy = (name: string, type: "FILE") => {
    return <File name={name} type={type}/>
}
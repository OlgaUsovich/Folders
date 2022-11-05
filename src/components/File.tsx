export interface IFile {
    name: string
}

export const File = ({ name }: IFile) => {
    return <div>File: {name}</div>
}

export const fileStrategy = (name: string) => {
    return <File name={name}/>
}
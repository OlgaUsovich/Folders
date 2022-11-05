import { IData } from "../App"

export const File = ({ name }: Omit<IData, "type">) => {
    return <div>File: {name}</div>
}

export const fileStrategy = (name: string) => {
    return <File name={name}/>
}
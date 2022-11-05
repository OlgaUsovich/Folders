export const strategyFunc = (strategy: any, name: string, type: string, ...args: any) => {
    return strategy(name, type, ...args)
}
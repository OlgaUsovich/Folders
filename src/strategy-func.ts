export const strategyFunc = (strategy: any, name: string, type: string, ...args: any) => {
    console.log(strategy(name, type, ...args))
    console.log(strategy)
    return strategy(name, type, ...args)
}
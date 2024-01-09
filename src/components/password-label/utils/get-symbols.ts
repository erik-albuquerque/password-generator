const getSymbols = (str: string) =>
  [...str.matchAll(/[^a-zA-Z0-9\s]/g)].map(({ index, 0: symbol }) => ({
    symbol,
    position: index
  }))

export { getSymbols }

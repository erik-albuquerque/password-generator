const getNumbers = (str: string) =>
  [...str.matchAll(/[0-9]/g)].map(({ index, 0: letter }) => ({
    letter,
    position: index
  }))

export { getNumbers }

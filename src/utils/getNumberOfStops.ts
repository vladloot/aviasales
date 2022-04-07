const numberOfTransfers: number = 1;

export const getNumberOfStops = (number: number): string => {
  if (number === numberOfTransfers) {
    return `${number} пересадка`;
  }
  if (number > numberOfTransfers) {
    return `${number} пересадки`;
  }
  if (!number) {
    return `Без пересадок`;
  }
  return 'Без пересадок';
};

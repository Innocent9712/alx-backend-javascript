export default function cleanSetFromArray(set, startString) {
  const newArr = [];
  if (startString === '' || startString === undefined) {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newArr.push(value.slice(startString.length));
    }
  }
  return newArr.join('-');
}

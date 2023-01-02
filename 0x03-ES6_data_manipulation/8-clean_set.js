export default function cleanSetFromArray(set, startString) {
  const newArr = [];
  if (startString === '' || startString === undefined) {
    return '';
  }
  for (const value of set) {
    if (value.startsWith(startString)) {
      newArr.push(value.split(startString)[1]);
    }
  }
  return newArr.join('-');
}

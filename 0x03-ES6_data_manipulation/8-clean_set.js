export default function cleanSet(set, startString) {
  const newArr = [];
  if (startString === '' || startString === undefined) {
    return '';
  }
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      newArr.push(value.slice(startString.length));
    }
  })
  return newArr.join('-');
}

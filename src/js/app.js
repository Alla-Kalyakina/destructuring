export default function orderByProps(obj, [...keys]) {
  const includedKeys = [];
  const sortedKeys = [];
  for (const property in obj) {
    if (keys.includes(property)) {
      includedKeys.push({
        key: property,
        value: obj[property],
      });
    } else {
      sortedKeys.push({
        key: property,
        value: obj[property],
      });
    }
  }
  sortedKeys.sort((a, b) => {
    if (Object.values(a) < Object.values(b)) {
      return -1;
    }
    return 1;
  });
  return [...includedKeys, ...sortedKeys];
}

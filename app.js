const queryParams = (search, take) => {
  const query = { search, take };
  const queryString = Object.keys(query).map(value => `${value}=${query[value]}`).join('&');
  return queryString;
}
const result = queryParams('Вася', 10);

console.log(result);
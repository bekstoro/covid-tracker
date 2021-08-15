export function fetchProvinces() {
  return fetch('https://corona.lmao.ninja/v2/historical/usacounties')
    .then(res => res.json())
    .catch(e => console.error(e));
}

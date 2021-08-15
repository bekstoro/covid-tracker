export function fetchReportsByCountry(country, period) {
  return fetch(`https://corona.lmao.ninja/v2/historical/${country}?lastdays=${period + 1}`)
    .then(res => res.json())
    .catch(e => console.error(e));
}

export function fetchReportsByCountryAndDate() {
  return new Promise((resolve) =>
    resolve({
      date: '01/01/2021',
      states: {
        alabama: { cases: 1232, deaths: 1 },
        alaska: { cases: 39, deaths: 2 },
        'american samoa': { cases: 291, deaths: 3 },
        arizona: { cases: 298, deaths: 4 },
        arkansas: { cases: 123, deaths: 5 },
        california: { cases: 372, deaths: 6 },
        colorado: { cases: 23, deaths: 7 },
        connecticut: { cases: 18, deaths: 8 },
        delaware: { cases: 292, deaths: 9 },
        'diamond princess': { cases: 27, deaths: 10 },
        'district of columbia': { cases: 99, deaths: 11 },
        florida: { cases: 282, deaths: 12 },
        georgia: { cases: 999, deaths: 13 },
        'grand princess': { cases: 289, deaths: 14 },
        guam: { cases: 456, deaths: 15 },
        hawaii: { cases: 278, deaths: 16 },
        idaho: { cases: 673, deaths: 17 },
        illinois: { cases: 92, deaths: 18 },
        indiana: { cases: 198, deaths: 19 },
        iowa: { cases: 38, deaths: 20 },
        kansas: { cases: 382, deaths: 21 },
        kentucky: { cases: 43, deaths: 22 },
        louisiana: { cases: 8, deaths: 23 },
        maine: { cases: 393, deaths: 24 },
        maryland: { cases: 393, deaths: 25 },
        massachusetts: { cases: 484, deaths: 26 },
        michigan: { cases: 399, deaths: 28 },
        minnesota: { cases: 59, deaths: 29 },
        mississippi: { cases: 10, deaths: 30 },
        missouri: { cases: 4, deaths: 31 },
        montana: { cases: 291, deaths: 32 },
        nebraska: { cases: 484, deaths: 33 },
        nevada: { cases: 33, deaths: 34 },
        'new hampshire': { cases: 87, deaths: 35 },
        'new jersey': { cases: 392, deaths: 36 },
        'new mexico': { cases: 100, deaths: 27 },
        'new york': { cases: 2, deaths: 1 },
        'north carolina': { cases: 44, deaths: 11 },
        'north dakota': { cases: 989, deaths: 1 },
        'northern mariana islands': { cases: 88, deaths: 0 },
        ohio: { cases: 383, deaths: 0 },
        oklahoma: { cases: 22, deaths: 0 },
        oregon: { cases: 989, deaths: 0 },
        pennsylvania: { cases: 99, deaths: 0 },
        'puerto rico': { cases: 11, deaths: 1 },
        'rhode island': { cases: 22, deaths: 2 },
        'south carolina': { cases: 33, deaths: 0 },
        'south dakota': { cases: 44, deaths: 1 },
        tennessee: { cases: 55, deaths: 0 },
        texas: { cases: 66, deaths: 0 },
        utah: { cases: 0, deaths: 0 },
        vermont: { cases: 77, deaths: 1 },
        'virgin islands': { cases: 98, deaths: 15 },
        virginia: { cases: 22, deaths: 19 },
        washington: { cases: 11, deaths: 1 },
        'west virginia': { cases: 90, deaths: 1 },
        wisconsin: { cases: 13, deaths: 1 },
        wyoming: { cases: 12, deaths: 0 },
      },
    })
  );
}

export function fetchReportsByProvince(province, period) {
  if (!province) return;
  
  return fetch(`https://corona.lmao.ninja/v2/historical/usacounties/${province}?lastdays=${period + 1}`)
    .then(res => res.json())
    .catch(e => console.error(e));
}

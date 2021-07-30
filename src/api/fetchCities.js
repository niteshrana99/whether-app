export const fetchCities = async (searchTerm) => {
    const url = `https://places-dsn.algolia.net/1/places/query`;
    const res = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            query:searchTerm,
            type: 'city',
            language: 'en',
        })
    })
    const response = await res.json();
    return response.hits.map(item => item.locale_names[0]);
}
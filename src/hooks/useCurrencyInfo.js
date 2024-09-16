import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    console.log(currency,'llllllllllll');
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res))
        console.log('data', data);
    }, [currency])
    return data
}

export default useCurrencyInfo;
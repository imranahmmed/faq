import React, { useState, useEffect } from 'react'

const useDataFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error("Data Fetching is not successfull");
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setData(data.data)
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(error.message);
                setIsLoading(false);
            });
    }, [url]);
    return { data, isLoading, isError }
}

export default useDataFetch
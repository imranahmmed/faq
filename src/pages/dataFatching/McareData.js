import React, { useState, useEffect } from 'react';
import styles from './dataFetching.module.css';

const McareData = () => {
    const [productDatas, setproductDatas] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(null)

    const loadingMassage = <div className={styles.dataisloading}><h2>DATAS ARE LOADING ...</h2></div>
    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str;
        }
    }
    
    useEffect(() => {
        fetch("https://nextgenitltd.com/mcare_backend_v2/api/products")
            .then((response) => {
                if (!response.ok) {
                    throw Error("Data Fetching is not successfull");
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setproductDatas(data.data)
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(error.message);
                setIsLoading(false);
            });
    }, []);

    const allLoadedProducts = productDatas && productDatas.map((product, index) => {
        const { mainimage, name, manufacturer } = product
        return (
            <div className={styles.productCard} key={index}>
                <img src={mainimage} />
                <h3>{truncateString(name, 20)}</h3>
                <div>
                    <p>{product.brand}</p>
                    <h6>{truncateString(manufacturer, 25)}</h6>
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Datas</h1>
            {isLoading && loadingMassage}
            <div className={styles.container}>
                <section className={styles.section}>
                    {isError && <p style={{color: 'red'}}>{isError}</p>}
                    {allLoadedProducts}
                </section>
            </div>
        </div>
    )
}

export default McareData
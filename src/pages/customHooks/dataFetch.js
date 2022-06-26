import React, { useState, useEffect } from 'react';
import styles from '../dataFatching/dataFetching.module.css';
import useDataFetch from './useDataFetch';

const DataFetch = () => {
    const { data, isLoading, isError } = useDataFetch("https://nextgenitltd.com/mcare_backend_v2/api/products")
    const loadingMassage = <div className={styles.dataisloading}><h2>DATAS ARE LOADING ...</h2></div>
    const errorMassage = <h2 style={{ color: 'red' }}>{isError}</h2>

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num) + "..."
        } else {
            return str;
        }
    }

    const allLoadedProducts = data && data.map((product, index) => {
        const { mainimage, name, manufacturer } = product
        return (
            <div className={styles.productCard} key={index}>
                <img src={mainimage} alt={name} />
                <h3>{truncateString(name, 20)}</h3>
                <div>
                    <p>{product.brand}</p>
                    <h6>{truncateString(manufacturer, 25)}</h6>
                </div>
            </div>
        )
    });


    return (
        <div>
            <h1>Datas</h1>
            <div className={styles.container}>
                <section className={styles.section}>
                    {isError && errorMassage}
                    {isLoading && loadingMassage}
                    {allLoadedProducts}
                </section>
            </div>
        </div>
    )
}

export default DataFetch
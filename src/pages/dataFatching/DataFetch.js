import React, { useState, useEffect } from 'react';
import styles from './dataFetching.module.css';

const DataFetch = () => {
  const [todos, setTodos] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(null)


  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          if (!res.ok) {
            throw Error("Fetching is not successfull");
          } else {
            return res.json();
          }
        })

        .then((data) => {
          setTodos(data);
          setIsLoading(false);
          setIsError(null);
        })
        .catch((error) => {
          setIsError(error.message);
          setIsLoading(false);
        });
  }, []);


  




  const todosElements = todos && todos.map((todo) => {
    return (<h4 key={todo.id}>{todo.title}</h4>)
  })


  const loadingMassage = <div className={styles.dataisloading}><h2>TODOS IS LOADING ...</h2></div>

  // const errorMassage = <h2>Fetching is not successfull...</h2>
  return (
    <div>
      <h1>Todos</h1>
      {isError  && <p>{isError}</p>}
      {isLoading && loadingMassage}
      {todosElements}
    </div>
  )
}

export default DataFetch
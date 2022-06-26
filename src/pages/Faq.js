import React, {useState} from 'react'
import style from './faqs.module.css';
const Faq = ({ id, question, answer }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={style.singleFaq} onClick={() => {setToggle(!toggle)}}>
            <div className={style.heading}>
                <h3>{question}</h3>
                <button onClick={() => {setToggle(!toggle)}}>
                    {toggle ? '-' : '+'}
                </button>
            </div>
            {
                toggle && <p>{answer}</p>
            }
        </div>
    )
}

export default Faq
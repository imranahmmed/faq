import React, { useState } from 'react';
import style from './faqs.module.css';
import { faqsData } from '../data';
import Faq from './Faq';


const Faqs = () => {
    const [faqs, setFaqs] = useState(faqsData);
    const faqsDatas = faqs.map((faq) => (
        <Faq key={faq.id} {...faq} />
    ))



    return (
        <main className={style.container}>
            <section className={style.faqs}>
                <h1 className={style.section_heading}>THIS IS FAQ PROJECT</h1>
                {faqsDatas}
            </section>
        </main>
    )
}

export default Faqs

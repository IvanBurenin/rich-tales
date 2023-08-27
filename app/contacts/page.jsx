import Link from 'next/link'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export const metadata = {
    title: 'Связаться с нами',
    description: 'The main section of the portfolio website of Ivan Burenin',
}

export default function Contacts() {
    return(
        <>
            <section className={styles.contactsPage}>
                <div className={mainStyles.container}>
                    <div className={styles.contactsInner}>
                        <h3 className={`${mainStyles.title} ${styles.title}`}>
                            Мы всегда готовы ответить на ваши вопросы и обеспечить вас надежным обслуживанием.
                        </h3>
                        <ul className={styles.contacts}>
                            <li className={styles.contact}>
                                <p className={styles.text}>
                                    Вы можете связаться с нами любым удобным для вас способом:
                                </p>
                            </li>
                            <li className={styles.contact}>
                                <Link href='tel:78885553535'>
                                    Телефон: +7 888 555 35 35
                                </Link>
                            </li>
                            <li className={styles.contact}>
                                <Link href='mailto:emaildoesntexist@gmail.com'>
                                    E-Mail: emaildoesntexist@gmail.com
                                </Link>
                            </li>
                        </ul>
                        <div className={styles.address}>
                            <div className={styles.addressLeft}>
                                <p className={`${mainStyles.text} ${styles.addressText}`}>
                                    Мы также приглашаем вас посетить наш магазин, где вы сможете увидеть часы вживую и получить консультацию от наших экспертов
                                </p>
                                <Link target='a_blank' href='https://www.google.com/maps/place/%D0%A2%D0%B2%D0%B5%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+22%D0%90+%D1%81%D1%82%D1%80%D0%BE%D0%B5%D0%BD%D0%B8%D0%B5+3,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+127006/@55.7675407,37.601525,17.25z/data=!4m6!3m5!1s0x46b54a3f4fa6e1a1:0xcbd26d4ab36ef069!8m2!3d55.767577!4d37.602612!16s%2Fg%2F11csjj88x5?entry=ttu'>
                                    Адрес магазина: Тверская ул., 22а стр.3, Москва, 115114
                                </Link>
                            </div>
                            <div className={styles.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1887.3758868763523!2d37.6008032421558!3d55.76752038962193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a3f4fa6e1a1%3A0xcbd26d4ab36ef069!2z0KLQstC10YDRgdC60LDRjyDRg9C7LiwgMjLQkCDRgdGC0YDQvtC10L3QuNC1IDMsINCc0L7RgdC60LLQsCwgMTI3MDA2!5e0!3m2!1sru!2sru!4v1692119753448!5m2!1sru!2sru" width={542} height={257} style={{border:'0'}} loading={'lazy'}>
                                </iframe>
                            </div>
                        </div>
                        <p className={mainStyles.text}>
                            Наша команда  всегда рада помочь вам выбрать идеальные часы, предоставить дополнительную информацию о продуктах или помочь совершить покупку. Не стесняйтесь обращаться к нам, мы готовы помочь вам сделать правильный выбор и предоставить вам незабываемый опыт покупки дорогих часов. Мы ценим каждого нашего клиента и стремимся обеспечить высокий уровень обслуживания.
                        </p>
                        <div className={styles.buttons}>
                            <Link href='/'>
                                <button className={mainStyles.btn}>
                                    На главную
                                </button>
                            </Link>
                            <Link href='/catalogue'>
                                <button className={mainStyles.btn}>
                                    Каталог
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
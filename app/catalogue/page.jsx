'use client'

import { useState } from 'react'

import FiltersData from '../database/FiltersData'
import WatchesData from '../database/WatchesData'

import WatchItem from '../components/WatchItem/WatchItem'

import styles from './page.module.css'
import mainStyles from '../main.module.css'

export default function Catalogue() {
    const [searchValue, setSearchValue] = useState('');
    const [openedFilter, setOpenedFilter] = useState('');
    const [selectedFilters, setSelectedFilters] = useState({});
    const [resetFilter, setResetFilter] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    // Отслеживаем поиск
    const handleSearch = (event) => {
        setSearchValue(event.target.value)
    };

    // Делаем кнопку удаления для поиска
    const cleanSearch = () => {
        setSearchValue('')
    };

    // Делаем стейт для разворачивания фильтра
    const openingFilter = (obj) => {
        if (openedFilter === obj.filter) {
            setOpenedFilter(null)
        } else {
            setOpenedFilter(obj.filter)
        };
    };

    // Передаем данные в фильтр
    const handleFilter = (filterKey, filterValue) => {
            setSelectedFilters((prevFilters) => ({
                ...prevFilters,
                [filterKey]: filterValue,
            }));
        setResetFilter(null);
    };

    // Очищаем фильтр при нажатии на кнопку
    const cleanFilter = (filterKey) => {
        setSelectedFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };
            delete updatedFilters[filterKey];
            return updatedFilters;
        });
        setResetFilter(filterKey);
    };

    // Фильтрованные часы
    const filteredWatches = WatchesData.filter((watch) => {
        const isMatched = Object.keys(selectedFilters).every((filterKey) => {
            const filterValue = selectedFilters[filterKey];
            if (filterValue === "") {
                return true;
            };
            const foundFilter = watch.filters.find((filter) => filter.key === filterKey);
            return foundFilter && foundFilter.keyText === filterValue;
        });
    
        if (searchValue !== '') {
            const searchQuery = searchValue.toLowerCase();
            return isMatched && watch.title.toLowerCase().includes(searchQuery);
        };
        
        return isMatched;
    });

    // Пагинация товаров
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredWatches.slice(indexOfFirstItem, indexOfLastItem);
    const pageNumbers = Math.ceil(filteredWatches.length / itemsPerPage);

    const prevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };
    
    const nextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, pageNumbers));
    };

    return(
        <section className={styles.catalogue}>
            <div className={mainStyles.container}>
                <div className={styles.catalogueInner}>
                    <div className={styles.top}>

                        <div className={styles.filterTop}>
                            <h3 className={mainStyles.title} style={{textTransform: 'capitalize'}}>Фильтрация:</h3>
                            <div className={styles.selectedFilters}>
                                {Object.entries(selectedFilters).map(([filterKey, filterValue]) => (
                                    <div key={filterKey} className={styles.selectedFilter} onClick={() => cleanFilter(filterKey)}>
                                        <span className={`${styles.filterKey} ${styles.filteredKey}`}>{filterValue}</span>
                                        <svg className={styles.closeIcon} xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                            <path d="M11.4336 10.5L18.5088 17.5854L17.5859 18.5083L10.5005 11.4331L3.41504 18.5083L2.49219 17.5854L9.56738 10.5L2.49219 3.41455L3.41504 2.4917L10.5005 9.56689L17.5859 2.4917L18.5088 3.41455L11.4336 10.5Z" fill="#F3F3F3"/>
                                        </svg>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.filters}>
                            {FiltersData.map((obj, index) => (
                                <div key={index} onClick={() => openingFilter(obj)} className={styles.filter}>
                                    <p className={styles.filterTitle}>{obj.filter}</p>
                                    <svg className={`${styles.filterIcon} ${openedFilter  == obj.filter ? styles.filterIconActive : ''}`} xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                                        <path d="M11 6L6 1L1 6" stroke="#F3F3F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <ul className={`${styles.filterInner} ${openedFilter == obj.filter ? styles.filterActive : ''}`}>
                                        {obj.items.map((item, index) => (
                                            <li key={index} onClick={() => handleFilter(obj.filter, item.key)} className={styles.filterKey}>{item.key}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        <div className={styles.searching}>
                            <input type="text" className={styles.search} value={searchValue} onChange={handleSearch} placeholder='Найдите нужную модель'/>
                            <svg onClick={cleanSearch} className={`${styles.searchIcon} ${searchValue == '' ? '' : styles.searchIconActive}`} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                <path d="M9.43359 8.5L16.5088 15.5854L15.5859 16.5083L8.50049 9.43311L1.41504 16.5083L0.492188 15.5854L7.56738 8.5L0.492188 1.41455L1.41504 0.491699L8.50049 7.56689L15.5859 0.491699L16.5088 1.41455L9.43359 8.5Z" fill="#F3F3F3"/>
                            </svg>
                        </div>
                        
                    </div>
                    
                    <div className={styles.watches}>
                        {currentItems.length >= 1 ? (
                            currentItems.map((watch) => (
                                <WatchItem key={watch.parentId} watch={watch}/>
                            ))
                        ) : (
                            <div className={styles.watchesClean}>
                                <p className={mainStyles.text}>
                                    К сожалению, по заданным фильтрам не найдено ни одних часов в нашем каталоге. Попробуйте изменить параметры фильтрации или вернуться к полному списку, чтобы найти подходящие часы.
                                </p>
                            </div>
                        )}
                    </div>

                    <div className={styles.paginations}>
                        <span onClick={prevPage} className={`${styles.pagination} ${styles.pagePagination}`}>Предыдущая</span>
                        <img onClick={prevPage} className={styles.paginationArrow} src="/rich-tales/arrow-left.svg" alt="" />
                        {Array.from({ length: pageNumbers }, (_, index) => (
                            <span key={index} className={`${styles.pagination} ${currentPage === index + 1 ? styles.paginationActive : ''}`} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </span>
                        ))}
                        <img onClick={nextPage} className={styles.paginationArrow} src="/rich-tales/arrow-right.svg" alt="" />
                        <span onClick={nextPage} className={`${styles.pagination} ${styles.pagePagination}`}>Следующая</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
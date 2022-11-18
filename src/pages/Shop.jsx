import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import '../styles/shop.css'
import products from '../assets/data/products';
import { useState } from 'react';
import ProductList from '../UI/ProductList';
import CommoSection from '../UI/CommoSection';

const Shop = () => {

    const [productsData, setProductsData] = useState(products)

    const handleFilter = (e) => {
        const filterValue = e.target.value;

        if (filterValue === 'all') {
            setProductsData(products)
        } else if (filterValue !== '') {
            const filterProducts = products.filter((item) => item.category === filterValue)

            setProductsData(filterProducts)
        }
    }
    // const handleSearch = e => {
    //     const searchItem = e.target.value.toLowerCase();
    //     const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchItem.toLowerCase()))

    //     setProductsData(searchedProducts)
    // }
    const handleSearch = (e) => {
        const searchItem = e.target.value.toLowerCase();
        const searchedProducts = products.filter((item) => item.productName.toLowerCase().includes(searchItem))
        setProductsData(searchedProducts)
    }
    return (
        <Helmet title="Shop">
            <CommoSection title='Products' />
            <section>
                <Container>
                    <Row>
                        <Col lg='3' md='6'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option value="all">Filter By Category</option>
                                    <option value="sofa">Sofa</option>
                                    <option value="mobile">Mobile</option>
                                    <option value="chair">Chair</option>
                                    <option value="watch">Watch</option>
                                    <option value="wireless">Wireless</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='3' md='6' className='text-end'>
                            <div className="filter__widget">
                                <select>
                                    <option value="all">Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        <Col lg='6' md='12'>
                            <div className='search__box'>
                                <input type="text" placeholder='Search.....' onChange={handleSearch} />
                                <span>
                                    <i className='ri-search-line'></i>
                                </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='pt-0'>
                <Container>
                    <Row>
                        {
                            productsData.length === 0 ? <h1 className='text-center fs-4'>No products are found!</h1>
                                :
                                (<ProductList data={productsData} />)
                        }
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Shop;
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../components/Services/Services'
import ProductList from '../UI/ProductList'
import products from '../assets/data/products'
import Clock from '../UI/Clock'
import counterImg from '../assets/images/counter-timer-img.png'

const Home = () => {
    const year = new Date().getFullYear();

    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSaleProducts, setBestSaleProducts] = useState([])
    const [newArrivalsProducts, setNewArrivalsProducts] = useState([])
    const [wirelessProducts, setWirelessProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(() => {
        const filterTrendingProducts = products.filter((item) => item.category === 'chair')
        const filterBestSaleProducts = products.filter((item) => item.category === 'sofa')
        const filterNewArrivalsProducts = products.filter((item) => item.category === 'mobile')
        const filterPopularProducts = products.filter((item) => item.category === 'watch')
        const filteredWirelessProducts = products.filter((item) => item.category === "wireless")

        setTrendingProducts(filterTrendingProducts)
        setBestSaleProducts(filterBestSaleProducts)
        setNewArrivalsProducts(filterNewArrivalsProducts)
        setWirelessProducts(filteredWirelessProducts)
        setPopularProducts(filterPopularProducts)
    }, [])

    return (
        <Helmet title={"Home"}>
            <section className='hero__section'>
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className='hero__content'>
                                <p className='hero__heading'>
                                    Trending product in {year}
                                </p>
                                <h2 className='hero__subheading'>
                                    Make Your Interior More Minimalistic & Modern
                                </h2>
                                <p className='hero__text'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, reiciendis nulla? Culpa quasi illo adipisci veniam impedit quis debitis minima?
                                </p>
                            </div>
                            <motion.button whileHover={{ scale: 1.2 }} className='buy__btn'>
                                <Link to='/shop' className='buy__btn-link'>SHOP NOW</Link>
                            </motion.button>

                        </Col>
                        <Col lg='6' md='6'>
                            <div className='hero__img'>
                                <img src={heroImg} alt="heroImg" />
                            </div>
                        </Col>
                    </Row>

                </Container>
            </section>
            <Services />
            <section className='category__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-3'>
                            <h2 className='section__title'>Trending Products</h2>
                        </Col>
                        <ProductList data={trendingProducts} />
                    </Row>
                </Container>
            </section>
            <section className='category__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-3'>
                            <h2 className='section__title'>Best Sales</h2>
                        </Col>
                        <ProductList data={bestSaleProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg='6' md='6' className='count__down-col'>
                            <div className="clock__top-content">
                                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
                            </div>
                            <Clock />

                            <motion.button whileHover={{ scale: 1.2 }} className='buy__btn store__btn'><Link to='shop' className='link'>Visit Store</Link></motion.button>
                        </Col>
                        <Col lg='6' md='6' className='text-end counter__img'>
                            <img src={counterImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='category__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-3'>
                            <h2 className='section__title'>New Arrivals</h2>
                        </Col>
                        <ProductList data={newArrivalsProducts} />
                        <ProductList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>
            <section className='category__products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center mb-3'>
                            <h2 className='section__title'>Popular in category</h2>
                        </Col>
                        <ProductList data={popularProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home
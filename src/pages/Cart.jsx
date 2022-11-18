import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import '../styles/cart.css'
import CommoSection from '../UI/CommoSection'
import tdImg from '../assets/images/arm-chair-01.jpg'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/cart.css'
import { cartActions } from '../redux/slices/cartSlice'
import { Link } from 'react-router-dom'
const Cart = () => {

    const carItems = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    return (
        <Helmet title='Cart'>
            <CommoSection title='Shopping Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                            {
                                carItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) : (
                                    <table className='table bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Title</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carItems.map((item, index) => (
                                                    <Tr item={item} key={index} />
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                )
                            }

                        </Col>
                        <Col lg='3'>
                            <div>
                                <h6 className='d-flex align-items-center justify-content-between'>Subtotal
                                    <span className='fs-4 fw-bold'>${totalAmount}</span>
                                </h6>
                            </div>
                            <p className='fs-6 mt-2'>taxes and shipping will calculate in checkout</p>
                            <div>
                                <button className='buy__btn w-100'><Link className='' to='/checkout'>Checkout</Link>
                                </button>
                                <button className='buy__btn w-100'><Link className='' to='/shop'>Continue Shopping</Link>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

const Tr = ({ item }) => {

    const dispatch = useDispatch();

    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }

    return <tr>
        <td>
            <img src={item.imgUrl} alt="" />
        </td>
        <td>
            {item.productName}
        </td>
        <td>
            ${item.price}
        </td>
        <td>
            {item.quantity}
        </td>
        <td>
            <motion.i whileTap={{ scale: 1.2 }}
                onClick={deleteProduct}
                className='ri-delete-bin-line'></motion.i>
        </td>
    </tr>
}

export default Cart
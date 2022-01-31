// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Product = () => {
  const accessToken = Cookies.get('jwt_token')
  if (accessToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
          alt="products"
          className="product-img"
        />
      </div>
    </>
  )
}

export default Product

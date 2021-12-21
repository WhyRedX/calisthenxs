import React from 'react'
import { Link } from 'react-router-dom'
import SHOP_ITEM_DATA from '../../../data/SHOP_ITEM_DATA'
import { Shop_item } from './Shop_item'

const shop_item_function = (item) => {
  return(
    <Shop_item
    item_image={item.item_image}
    item_name={item.item_name}
    item_price={item.item_price}
  />
  )
}
export function Shop() {
  return (
    <section id="shop-section">
      <div className="section-content">
        <div id="side-navbar" className="side-navbar">
            <div className="side-navbar-container">
              <ul>
                  <li><h1>SHOP</h1></li>
                  <Link to="#">
                  <li><i class="fa fa-shopping-cart" aria-hidden="true"></i> MY CART</li>
                  </Link>
                  <Link to="#">
                  <li><i class="fa fa-truck" aria-hidden="true"></i> MY ORDER</li>
                  </Link>
                  <Link to="#">
                  <li><i class="fa fa-gift" aria-hidden="true"></i> COUPON CODE</li>
                  </Link>
                  <Link to="/">
                  <li><i class="fa fa-home" aria-hidden="true"></i> BACK TO HOME</li>
                  </Link>
              </ul>
            </div>
        </div>
        <div id="shop-container" className="shop-container">
          <div className="shop-head">
            <h1>TIME TO <span>SHOP</span></h1>
          </div>
          <div className="shop-list">
            {SHOP_ITEM_DATA.map(shop_item_function)}
          </div>
        </div>
      </div>
    </section>
  )
}

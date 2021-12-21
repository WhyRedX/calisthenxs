import React from 'react'
import "./Shop.css"

export function Shop_item(props) {
    return (
        <div className="shop-item">
            <div className="item-image">
                <img src={props.item_image} alt="item-image"/>
                <div className="buy-item">BUY</div>
            </div>
            <div className="item-detail">
                <h1>{props.item_name}</h1>
                <p><span>{props.item_price}</span></p>
            </div>
        </div>
    )
}

import React from "react";
// import SHOP_DATA from './shop.data.js'
import CollectionPreview from "../../Component/collection-preview/collection-preview.component.jsx";
import { SHOP_DATA } from "./shop.data.js";


class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA,
        }
    }
    render() {
        const { collections } = this.state;
        // console.log(collections);
        // debugger;
        return (<div className="shop-page">
            {collections.map(({ id, ...otherprops }) => (
                <CollectionPreview key={id} {...otherprops} />
            ))}
            {/* console.log(collections);*/
           /* title={item.title} items={item.items} */}
        </div>
        )
    }
}

export default ShopPage;
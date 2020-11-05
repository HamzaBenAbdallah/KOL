import { Component } from 'react';
import CollectionPreview from '../components/CollectionPreview';

import SHOP_DATA from './Shop.Data';

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA,
    };

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({ id, ...otherCollection }) => (
                    <CollectionPreview key={id} {...otherCollection} />
                ))}
            </div>
        );
    }
}

export default ShopPage;

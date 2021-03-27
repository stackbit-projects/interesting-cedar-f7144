import React from 'react';
import _ from 'lodash';

import FeaturedGrid from './FeaturedGrid';

export default class FeaturedProductsSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let featured_products = _.get(section, 'featured_products', null);
        return (
            <section className="content__row"  data-id={_.get(section, 'section_id', null)}>
                    <FeaturedGrid {...this.props} products={featured_products} site={this.props.pageContext.site} />
                </section>
        );
    }
}

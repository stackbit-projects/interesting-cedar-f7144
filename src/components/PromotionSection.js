import React from 'react';
import _ from 'lodash';

import Picture from './Picture';
import {toStyleObj, withPrefix, Link, classNames} from '../utils';

export default class PromotionSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section className="content__row content__row--full-width promo__section"  data-id={_.get(section, 'section_id', null)}>
                <div className="promo">
                    <div className="promo__message-container" {...(_.get(section, 'background_image', null) ? ({style: toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\')')}) : null)}>
                        {_.get(section, 'cta', null) && ((() => {
                            let cta_style = _.get(section, 'cta.style', null) || 'primary';
                            return (
                                <Link className={classNames('link', 'promo__link', {'link--light-filled': cta_style === 'primary', 'link--light': cta_style === 'secondary', 'link--light-borderless': cta_style === 'link'})} to={_.get(section, 'cta.url', null)}>
                                    {_.get(section, 'cta.title', null)}
                                    {_.get(section, 'cta.arrow', null) && (
                                    <svg width="26" height="14" viewBox="0 0 26 14" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.682 6.079h-22.682v1.712h22.814l-4.574 4.528 1.194 1.182 6.566-6.5-6.566-6.5-1.194 1.182 4.442 4.397z" />
                                    </svg>
                                    )}
                                </Link>
                            );
                        })())}
                    </div>
                </div>
            </section>
        );
    }
}

import React from 'react';
import PropTypes from 'prop-types';

import './item-photo.scss';

export default class Header extends React.Component {

    render() {
        return (
            <div className="feed__item">
                <header className="feed__item__header">
                    <p>login</p>
                </header>
                <div className="feed__item__content">
                    <img className="feed__item__content__img" src="https://sun1-2.userapi.com/c830400/v830400676/64b9a/FZL3f-nToDo.jpg" alt=""/>
                </div>
                <div className="feed__item__footer">
                    <section className="feed__item__description__likes">34 likes</section>
                    <section className="feed__item__description__description"><span>login</span>something description</section>
                </div>
            </div>
        );
    }
}

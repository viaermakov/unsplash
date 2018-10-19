
import React, { Component } from 'react';

import ItemPhoto from 'src/components/blocks/item-photo';

import './feed.scss';

export default class Feed extends Component {

    render() {
        return (
            <div className="feed">
                <ItemPhoto />
            </div>
        );
    }
}
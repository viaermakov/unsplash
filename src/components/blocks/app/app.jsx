import React from 'react';
import PropTypes from 'prop-types';


import Layout from 'src/components/blocks/layout';
import Header from 'src/containers/blocks/header';

import './app.scss';

export default class AppPage extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <Layout type="main">
                <Header />
                <Layout type="center">
                    {children}
                </Layout>
            </Layout>
        );
    }
}

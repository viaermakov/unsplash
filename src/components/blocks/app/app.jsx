import React from 'react';
import PropTypes from 'prop-types';

import Layout from 'src/components/blocks/layout';
import Header from 'src/containers/blocks/header';

import './app.scss';

export const AppPage = ({ children }) => (
    <Layout type="main">
        <Header />
        <Layout type="center">
            {children}
        </Layout>
    </Layout>
)

AppPage.propTypes = {
    children: PropTypes.node
}

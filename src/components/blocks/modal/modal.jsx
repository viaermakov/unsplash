import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';
import Layout from 'src/components/blocks/layout';

export const Modal = ({ children, handlerOnClose }) => {
    const closeModal = (e) => {
        if (e.target.classList.contains("layout-overlay")) {
            handlerOnClose(e)
        }
    }
    return (
        <Layout type="overlay" onClick={closeModal}>
            <div id="modal" className="modal">
                {children}
            </div>
        </Layout>
    )
};

Modal.propTypes = {
    children: PropTypes.node,
    handlerOnClose: PropTypes.func
}
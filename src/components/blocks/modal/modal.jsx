import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';
import Layout from 'src/components/blocks/layout';


export const Modal = ({ children, type, handlerOnClose }) => {

    const closeModal = (e) => {
        if (e.target.classList.contains("layout-overlay")) {
            handlerOnClose(e)
        }
    }

    return (
        type == "default"
            ? <Layout type="overlay" onClick={closeModal}>
                <div id="modal" className={`modal modal--${type}`}>
                    {children}
                </div>
              </Layout>
            : <div id="modal" className={`modal modal--${type}`}>
                {children}
              </div>
    )
};

Modal.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    handlerOnClose: PropTypes.func
}

Modal.defautProps = {
    type: "default"
}
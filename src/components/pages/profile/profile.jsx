
import React from 'react';
import PropTypes from 'prop-types';


import './profile.scss';

export const Profile = ({ photos, handlerOpenModal }) => (
    <div className="profile">
        <div className="profile__header">
            <section className="user-info">
                <div className="user-info__avatar">
                    <img className="user-info__avatar__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />
                </div>
                <div className="user-info__desc">
                    <p className="user-info__desc__login" >Login__s14</p>
                    <div className="user-info__desc__socia">
                        <p className="user-info__desc__socia--clmn">Followers:<b> 243</b></p>
                        <p className="user-info__desc__socia--clmn">Follow: <b> 243</b></p>
                    </div>
                    <div className="user-info__desc__about">
                        <section className="user-info__desc__about__name">
                            <p>Name</p>
                            <p>Location</p>
                        </section>
                        <section>
                            <p>Bio adas asd sad as dsa d sad as d sadasdsadas as d asd asd sad sa dasd</p>

                        </section>
                    </div>
                </div>
            </section>
        </div>
        <div className="profile__gallery">
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
            <div className="profile__gallery__item">
                <img className="profile__gallery__item__img" src="https://images.unsplash.com/photo-1540587659271-5a67befab04a?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjM4NjY3fQ&s=d6f5622362ac4f589400ef518fc01d0d" alt="" />  
            </div>
        </div>
    </div>
);

Profile.propTypes = {
    photos: PropTypes.array,
    handlerOpenModal: PropTypes.func
}
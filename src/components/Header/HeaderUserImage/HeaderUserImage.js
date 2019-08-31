/* eslint-disable max-len */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Img } from '../../common';
import profileImagePlaceHolder from '../../../assets/images/profile_plaholder.png';
import './HeaderUserImage.scss';

class HeaderUserImage extends Component {
  render() {
    const { className } = this.props;
    const image = localStorage.getItem('image');
    return (
      <div className={className}>
        <Img imgSrc={(image && `https://res.cloudinary.com/djxhcwowp/image/upload/v${image}`) || profileImagePlaceHolder} width="45px" imgClass="radius-5" />
      </div>
    );
  }
}

HeaderUserImage.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
};

HeaderUserImage.defaultProps = { className: 'HeaderUserImage' };

export default connect()(HeaderUserImage);

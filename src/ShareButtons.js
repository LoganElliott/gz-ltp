import React, { Component } from 'react';

import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  GooglePlusIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
} from 'react-share';

const shareUrl = 'https://fixour.city';
const title = 'Fix Our City';
const hashtag = '#fixourcity';

class ShareButtons extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
      }
    };

    let facebook =
      <FacebookShareButton
        url={shareUrl}
        qoute={title}
        hashtag={hashtag}
        >
        <FacebookIcon
          size={32}
          round />
      </FacebookShareButton>;

    let twitter =
      <TwitterShareButton
        url={shareUrl}
        title={title}
        hashtag={hashtag}
        >
        <TwitterIcon
          size={32}
          round />
      </TwitterShareButton>;

    let googlePlus =
      <GooglePlusShareButton
        url={shareUrl}
        >
        <GooglePlusIcon
          size={32}
          round />
      </GooglePlusShareButton>;

    let linkedin =
      <LinkedinShareButton
        url={shareUrl}
        title={title}
        >
        <LinkedinIcon
          size={32}
          round />
      </LinkedinShareButton>;

    let pintereset =
      <PinterestShareButton
        url={shareUrl}
        media={'https://fixour.city/LongTermPlan2018ShareGraphic.png'}
        >
        <PinterestIcon size={32} round />
      </PinterestShareButton>;
    return(
      <div style={styles.container}>
        {facebook}
        {twitter}
        {googlePlus}
        {linkedin}
        {pintereset}
      </div>
    );
  }
}

export default ShareButtons;
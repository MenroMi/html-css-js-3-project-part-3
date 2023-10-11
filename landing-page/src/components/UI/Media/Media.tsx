import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

interface IMediaProps extends React.HTMLAttributes<HTMLLIElement> {
  media: string;
  classNameIcon?: string;
}

const Media = ({className, classNameIcon, media}: IMediaProps) => {
  const getMediaIcon = () => {
    switch (media) {
      case 'facebook':
        return faFacebookF;
      case 'instagram':
        return faInstagram;
      case 'twitter':
        return faTwitter;
      default:
        return faQuestion;
    }
  };

  return (
    <li className={className}>
      <FontAwesomeIcon icon={getMediaIcon()} className={classNameIcon} />
    </li>
  );
};

export default Media;

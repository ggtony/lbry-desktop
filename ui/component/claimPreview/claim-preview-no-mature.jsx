// @flow
import classnames from 'classnames';
import React from 'react';

type Props = {
  isChannel: boolean,
  type: string,
};

function ClaimPreviewNoMature(props: Props) {
  const { isChannel, type } = props;
  return (
    <li
      className={classnames('claim-preview__wrapper', {
        'claim-preview__wrapper--channel': isChannel && type !== 'inline',
        'claim-preview__wrapper--inline': type === 'inline',
      })}
    >
      <div className={classnames('claim-preview', { 'claim-preview--large': type === 'large' })}>
        <div className="media__thumb" />

        <div className="section__subtitle">{__('Mature content hidden by your preferences')}</div>
      </div>
    </li>
  );
}

export default ClaimPreviewNoMature;

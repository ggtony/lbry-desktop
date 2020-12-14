// @flow
import classnames from 'classnames';
import React from 'react';

type Props = {
  isChannel: boolean,
  type: string,
};

function ClaimPreviewNoContent(props: Props) {
  const { isChannel, type } = props;
  return (
    <li
      className={classnames('claim-preview__wrapper', {
        'claim-preview__wrapper--channel': isChannel && type !== 'inline',
        'claim-preview__wrapper--inline': type === 'inline',
      })}
    >
      <div className={classnames('claim-preview', { 'claim-preview--large': type === 'large' })}>
        <div className={'claim-preview__null-label empty'}>{__('* space crickets *')}</div>
      </div>
    </li>
  );
}

export default ClaimPreviewNoContent;

// @flow
import * as React from 'react';
import Page from 'component/page';
import VideoJs from 'component/viewers/videoViewer/internal/videojs';

export default function AdsTestPage() {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.adspruce.com/1/adsprucetag.js?pid=8394&sid=2"';
    script.defer = true;

    // $FlowFixMe
    document.head.appendChild(script);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <Page className="ads-test">
      <h1>ads test</h1>
      {show && (
        <div style={{ marginTop: '5rem' }}>
          {/* $FlowFixMe */}
          <VideoJs adsTest />
        </div>
      )}
    </Page>
  );
}

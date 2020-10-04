import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import React from 'react';

ReactGA.initialize('UA-49560931-1');

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
}

export function gaEvent(name: string, action: string) {
  ReactGA.event({
    category: name,
    action: action,
    label: name,
  });
}

const TrackPageView = () => {
  usePageViews();
  return null;
}

export default TrackPageView;


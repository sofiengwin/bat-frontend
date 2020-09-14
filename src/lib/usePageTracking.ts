import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import React from 'react';

ReactGA.initialize('UA-000000-01');

export default function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ReactGA.pageview(location.pathname);
  }, [location]);
}
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useHistory } from 'react-router-dom';

const Marketing = () => {
  const marketingRef = useRef();
  const history = useHistory();

  const onMarketingNavigate = (marketingLocation) => {
    const { pathname } = history.location;

    if (marketingLocation !== pathname) {
      history.push(marketingLocation);
    }
  };

  useEffect(() => {
    const { onParentNavigate } = mount(marketingRef.current, {
      onMarketingNavigate
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={marketingRef}></div>;
};

export default Marketing;

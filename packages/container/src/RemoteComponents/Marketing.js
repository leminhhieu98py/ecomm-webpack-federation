import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

const Marketing = () => {
  const marketingRef = useRef();

  useEffect(() => {
    mount(marketingRef.current);
  }, []);

  return <div ref={marketingRef}></div>;
};

export default Marketing;

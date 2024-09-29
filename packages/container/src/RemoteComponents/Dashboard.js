import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';

const Dashboard = () => {
  const dashboardRef = useRef();

  useEffect(() => {
    mount(dashboardRef.current);
  }, []);

  return <div ref={dashboardRef}></div>;
};

export default Dashboard;

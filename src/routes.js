import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import DashboardView from 'src/views/reports/DashboardView';
import SettingsView from 'src/views/settings/SettingsView';

const routes = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
    
  { path: 'dashboard', element: <DashboardView /> },
      { path: 'settings', element: <SettingsView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
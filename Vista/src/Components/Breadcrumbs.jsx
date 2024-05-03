import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter((path) => path);

  const breadcrumbs = [{ label: 'Home', url: '/' }, ...paths.map((path, index) => ({
    label: path,
    url: `/${paths.slice(0, index + 1).join('/')}`
  }))];

  return (
    <div className="breadcrumbs">
      {breadcrumbs.map(({ label, url }, index) => (
        <span key={index}>
          {index > 0 && ' / '}
          <Link to={url}>{label}</Link>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumbs;

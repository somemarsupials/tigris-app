import React from 'react';
import { Link } from 'react-router-dom';
import { TabLink } from '../shared';

export default function () {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <TabLink show={'Login with Spotify'} href={'http://localhost:5000/auth/spotify/authorise'}/>
    </div>
  );
}

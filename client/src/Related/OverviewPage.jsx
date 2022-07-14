import React, {
  Component, useState, useEffect, useRef,
} from 'react';
import axios from 'axios';
function OverviewPage({data}) {
  return (
    <div className="overview">
      <h1>Product Overview</h1>
      <h2>Current Product is...</h2>
      <b>{data.data.data.name}</b>
    </div>
  );
}

export default OverviewPage;

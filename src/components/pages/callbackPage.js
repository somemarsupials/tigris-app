import React from 'react';

export default function (props) {
  if (props.error) {
    let { data, status } = props.error;
    return <span>{data.message} | {status}</span>;
  }
  else {
    return <span>Loading info...</span>;
  }
}

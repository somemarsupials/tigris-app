import React from 'react';

export default function (props) {
  let handler = function () {
    let tab = window.open(props.href, '_blank');
    tab.focus();
  };

  return (
    <a onClick={handler}>{props.show}</a>
  );
};

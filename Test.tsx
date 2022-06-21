import React from 'react';

export default function Test() {
  const data = () => 'hello from esbuild, typescript & rollup';
  return <div>{data()}</div>;
}

'use client';

import React from "react";

export default function Page() {


  const [count, setCount] = React.useState(0);

  console.log('Page');
  return (
    <>
      <h1>Hello, Next.js!</h1>
      <div>
      <input value={count} onChange={
        (e) => setCount(Number(e.target.value))
      } />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      </div>
      <div>
        <p>You clicked {count} times</p>
      </div>
      </>

  );
}

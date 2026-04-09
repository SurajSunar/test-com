import { useEffect } from 'react';

export function TestComMylib() {
  const defaultVal = 'This is test message';
  useEffect(() => {
    //add logic here for init
  });

  return (
    <div>
      <h1>Welcome to {defaultVal}</h1>
    </div>
  );
}

export default TestComMylib;

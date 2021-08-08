import { useEffect, useState } from "react";

export const useLoopedEvent = (event, timeout, ...loopedEventArgs) => {
  const [state, setState] = useState(0);

  useEffect(() => {
    // сделать так, чтобы пока элемент не видно, запросы не делал.
    const interval = setInterval(() => {
      event(...loopedEventArgs);
    }, timeout);

    return () => clearInterval(interval);
  }, [state]);

  function loopedEvent(...args) {
    event(...args);
    setState(Math.random());
  }

  return loopedEvent;
};

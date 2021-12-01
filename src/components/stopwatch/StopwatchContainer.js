import React from "react";
import { buffer, debounceTime, filter, fromEvent, interval, map, scan } from "rxjs";
import { useRef, useState, useEffect } from "react";
import { toStopWatch } from "../../utils";
import { Stopwatch } from "../../components";

const StopwatchContainer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const intervalRef = useRef(null);
  const waitButtonRef = useRef(null);

  // subscribe to rxjs interval
  const subscribeToInterval = (initSeconds = 0) => {
    if (intervalRef.current) return;

    intervalRef.current = interval(1000)
      .pipe(scan(time => time + 1, initSeconds))
      .subscribe(setSeconds);
  };

  // un subscribe to rxjs interval
  const unSubscribeToInterval = () => {
    if (!intervalRef.current) return;

    intervalRef.current.unsubscribe();
    intervalRef.current = null;
  };

  // start button event handler
  const onHandleStart = () => {
    // seconds > 0 ? setSeconds(seconds) : setSeconds(0);
    setIsStarted(true);
    seconds > 0 ? subscribeToInterval(seconds) : subscribeToInterval();
    // subscribeToInterval();
  };

  // stop button event handler
  const onHandleStop = () => {
    setSeconds(0);
    setIsStarted(false);
    unSubscribeToInterval();
  };

  // restart button event handler
  const onHandleReset = () => {
    setSeconds(0);
    setIsStarted(true);
    unSubscribeToInterval();
    subscribeToInterval();
  };

  useEffect(() => {
    const _waitBtn = fromEvent(waitButtonRef.current, "click");
    const _buffer = _waitBtn.pipe(debounceTime(300));

    const _subscribeWaitdBtn = _waitBtn
      .pipe(
        buffer(_buffer),
        map(list => list.length),
        filter(x => x === 2)
      )
      .subscribe(() => {
        if (!intervalRef.current) return;
        setIsStarted(false);
        unSubscribeToInterval();
      });

    return () => _subscribeWaitdBtn.unsubscribe();
  }, []);
  return (
    <Stopwatch
      result={toStopWatch(seconds)}
      isStarted={isStarted}
      waitButtonRef={waitButtonRef}
      onHandleStart={onHandleStart}
      onHandleStop={onHandleStop}
      onHandleReset={onHandleReset}
    />
  );
};

export default StopwatchContainer;

import React from "react";
import { StopwatchStyled } from "./StopwatchStyled";

const Stopwatch = ({ result, isStarted, onHandleStop, waitButtonRef, onHandleReset, onHandleStart }) => {
  return (
    <StopwatchStyled>
      <div className="Stopwatch__wrap">
        <h2 className="Stopwatch__title">Stopwatch</h2>
        <p className="Stopwatch__text">{result}</p>
        {isStarted ? (
          <button className="Stopwatch__button" onClick={onHandleStop}>
            <span className="Stopwatch__button-text"> Stop</span>
          </button>
        ) : (
          <button className="Stopwatch__button" onClick={onHandleStart}>
            <span className="Stopwatch__button-text"> Start</span>
          </button>
        )}
        <button className="Stopwatch__button" ref={waitButtonRef}>
          <span className="Stopwatch__button-text"> Wait</span>
        </button>
        <button className="Stopwatch__button" onClick={onHandleReset}>
          <span className="Stopwatch__button-text"> Reset</span>
        </button>
      </div>
    </StopwatchStyled>
  );
};

export default Stopwatch;

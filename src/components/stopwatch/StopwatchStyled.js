import styled from "styled-components";

export const StopwatchStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  .Stopwatch {
    &__wrap {
      background-image: url("https://cdn-icons-png.flaticon.com/512/4893/4893021.png");
      background-size: 100% auto;
      background-position: center;
      background-repeat: no-repeat;
    }
    &__title,
    &__text,
    &__button-text {
      text-align: center;
      font-family: Raleway;
      font-style: normal;
      font-weight: 400;
      font-feature-settings: "lnum";
    }

    &__title {
      color: #e0e0e0;
      font-weight: 700;
      font-size: 28px;
      border-bottom: 2px solid;

      margin: 20px 0 0 0;
    }
    &__text {
      color: #828282;
      font-size: 24px;

      margin: 15px 0;
    }
    &__button {
      background: #f31d42;
      box-shadow: inset 0 6px 5px hsla(0, 0%, 100%, 0.3);
      border-radius: 30px;
      min-height: 20px;
      min-width: 40px;
      outline: none;
      border: none;
      cursor: pointer;
      transition: 0.2s ease;
      margin: 5px;
      &:hover {
        transform: scale(1.1);
      }
    }

    &__button-text {
      color: #fff;
    }
  }
`;

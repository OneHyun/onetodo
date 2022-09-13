import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ThemeBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  width: 5rem;
  height: 1.5rem;
  margin-left: 10px;
  margin-top: 10px;

  background-color: ${(props) => props.theme.cardBgColor};
  border: 1px solid white;
  border-radius: 1rem;
`;

const ThemeBtn = styled.div`
  position: absolute;
  left: -0.1rem;
  width: 1.5rem;
  height: 1.5rem;

  margin: 0;
  z-index: 1;
  transition: transform 0.3s linear;

  background-color: ${(props) => props.theme.accentColor};
  border: none;
  border-radius: 50%;
`;

const Input = styled.input`
  position: absolute;
  left: 0rem;
  width: 90%;
  height: 1rem;

  cursor: pointer;
  opacity: 0;
  z-index: 2;

  border: none;
  border-radius: 50%;
  &:checked + ${ThemeBtn} {
    transform: translateX(3.6rem);
  }
`;

const Emoji = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 24px;
  font-size: 1rem;
  position: relative;
`;

const LightModeEmoji = styled.div`
  width: 30%;
  position: absolute;
  left: 0.2rem;
  color: red;
`;

const DarkModeEmoji = styled.div`
  width: 30%;
  position: absolute;
  right: 1rem;
  color: yellow;
`;

const ThemeToggle = () => {
  return (
    <>
      <ThemeBtnContainer>
        <Emoji>
          <LightModeEmoji>
            <FontAwesomeIcon icon={faSun} />
          </LightModeEmoji>
        </Emoji>
        <Input type="checkbox"></Input>
        <ThemeBtn></ThemeBtn>
        <Emoji>
          <DarkModeEmoji>
            <FontAwesomeIcon icon={faMoon} />
          </DarkModeEmoji>
        </Emoji>
      </ThemeBtnContainer>
    </>
  );
};

export default ThemeToggle;

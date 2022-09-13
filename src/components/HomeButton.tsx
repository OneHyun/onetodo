import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React from "react";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 45px;
  height: 45px;
  margin-left: 10px;

  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.textColor};
  box-shadow: 1px 1px 2px ${(props) => props.theme.textColor};
`;

const HomeBtn = () => {
  return (
    <>
      <Link to={`/`}>
        <ButtonContainer>
          <FontAwesomeIcon icon={faHouse} />
        </ButtonContainer>
      </Link>
    </>
  );
};

export default HomeBtn;

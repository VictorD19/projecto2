import styled from "styled-components";

export const Switch = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  height: 25px;
  width: 45px;
  border-radius: 16px;
  display: inline-block;
  position: relative;
  margin: 0;
  border: 1px solid #474755;
  background: linear-gradient(180deg, #2d2f39 0%, #1f2027 100%);
  transition: all 0.2s ease;
  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    box-shadow: 0 1px 2px rgba(44, 44, 44, 0.2);
    transition: all 0.2s cubic-bezier(0.5, 0.1, 0.75, 1.35);
  }
  :checked {
    border-color: ${({ theme})=> theme.color.blue_light};
    :after {
      transform: translatex(20px);
    }
  }
`;

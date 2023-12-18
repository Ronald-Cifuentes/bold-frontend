import styled from 'styled-components'

export const TooltipContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 20px;
  background: white;
  border: none;
  border-radius: 20px;
  padding: 12px 10%;
  font-size: 24px;
  font-weight: 500;
  color: #202e71;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const AppContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const TooltipPop = styled.div<{ $visible: boolean }>`
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
  width: 400px;
  background: white;
  color: #132268;
  text-align: center;
  border-radius: 20px;
  padding: 5px 15px;
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 0;
  box-shadow: 0px 2px 5px #94949424;
`

export const FormX = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`

export const HeaderTooltip = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 12px;
`

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
`

export const Item = styled.div`
  display: flex;
  padding: 11px;
`

export const Checkbox = styled.input`
  width: 28px;
  margin-right: 24px;
`

export const BtnApply = styled.button`
  margin: 30px 49px;
  background: #e9a3a6;
  color: white;
  border: 0;
  border-radius: 40px;
  padding: 20px;
  font-size: 24px;
  font-weight: 500;
`

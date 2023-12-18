import styled, { css } from 'styled-components'

export const SectionLayoutContainer = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(33%, 1fr) minmax(66%, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  }
`

export const Card = styled.div`
  height: 226px;
  background: white;
  border-radius: 20px;
  box-shadow:
    0px 2px 4px 0px rgb(136 144 195 / 10%),
    0px 0px 0px 0 rgba(37, 44, 97, 0.15);
  white-space: nowrap;
`

export const CardTitle = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(90deg, rgba(98, 49, 94, 1) 0%, rgba(178, 102, 120, 1) 100%);
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: scroll;
  padding: 0 29px;
  box-sizing: border-box;
`

export const CardTitleText = styled.h1`
  color: white;
`

export const IconInfo = styled.img`
  width: 24px;
  margin-left: 10px;
`

export const AutoDimentionCard = css`
  width: 100%;
  overflow: scroll;
  scroll-behavior: smooth;
`

export const CardContent = styled.div`
  height: calc(100% - 76px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  ${AutoDimentionCard}
`

export const Total = styled.div`
  min-width: 230px;
  font-size: 40px;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(98, 49, 94, 1) 0%, rgba(178, 102, 120, 1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`

export const Date = styled.div`
  min-width: 120px;
  font-size: 18px;
  color: #313e7b;
  text-align: center;
`

export const Active = css`
  background-color: #e4e5ec;
`

export const Filters = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: white;
  min-height: 55px;
  flex-wrap: wrap;
`

export const Filter = styled.label<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  background-color: white;
  color: #202e71;
  border: none;
  border-radius: 20px;
  padding: 5px 10%;
  height: 35px;
  font-size: 20px;
  font-weight: 500;
  ${({ $active }) => $active && Active}
`

export const Radio = styled.input.attrs({ type: 'radio' })`
  display: none;
`

export const WrapBtnFilter = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const BtnFilter = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  background-color: white;
  border: none;
  border-radius: 20px;
  padding: 12px 10%;
  font-size: 22px;
  font-weight: 400;
  color: #202e71;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`

export const IconFilter = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 10px;
`

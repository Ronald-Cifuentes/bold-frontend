import styled from 'styled-components'

export const SectionSalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  margin-top: 20px;
  border-radius: 20px;
  white-space: nowrap;
`

export const Subtitle = styled.p`
  height: 54px;
  font-size: 28px;
  background: linear-gradient(90deg, rgba(20, 34, 104, 1) 0%, rgba(87, 47, 94, 1) 100%);
  color: white;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  padding: 0 29px;
  overflow: scroll;
`

export const AutoDimensionTable = styled.div`
  width: 100%;
  height: 320px;
  box-sizing: content-box;
  overflow: scroll;
  scroll-behavior: smooth;
  border-radius: 0 0 20px 20px;
`

import styled from '@emotion/styled'

export const SummaryCard = styled.div`
  box-shadow: 0px 0px 4px rgb(0 0 0 / 16%);
  box-sizing: border-box;
  background-color: #fff;
  width: 180px;
  height: 220px;
  border-radius: 5px;
  margin: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 426px) and (max-width: 1024px) {
    padding: 8px 10px;
    height: 130px;
  }

  @media (max-width: 425px) {
    min-width: 222px;
    height: 134px;
  }

  background-color: '#fff';
`

import styled from '@emotion/styled'

export const Card = styled.div`
  width: 100%;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 16%);
  box-sizing: border-box;
  background-color: #fff;
`

export const SummaryCard = styled(Card)(
  ({ theme }) => `
    min-width: 153px;
    height: 141px;
    padding: 8px;

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
  `,
)

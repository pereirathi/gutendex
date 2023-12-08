import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const SkeletonContainer = styled.div`
  display: flex;
  width: 96%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: ${theme.sizes.Space3X};
`

export const SummaryCard = styled.div`
  width: 200px;
  min-height: 220px;
  min-height: 240px;
  border-radius: 10px;
  margin: ${theme.sizes.Space3X};
  padding: ${theme.sizes.Space3X};
  background-color: ${theme.colors.White};
  box-sizing: border-box;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 16%);
`

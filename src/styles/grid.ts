export const grid = () => {
  return `
      width: 100%;
      display: grid;
      grid-column-gap: 32px;
      grid-template-columns: repeat(12, 1fr);


      @media (min-width: 1366px) and (max-width: 1919px) {
        grid-column-gap: 24px;
        column-gap: 24px;
      }
    
      @media (min-width: 1024px) and (max-width: 1365px) {
        grid-column-gap: 16px;
        column-gap: 16px;
      }
    
      @media (min-width: 413px) and (max-width: 1023px) {
        grid-column-gap: 16px;
        column-gap: 16px;
        grid-template-columns: repeat(4, 1fr);
      }
    
      @media (max-width: 412px) {
        grid-column-gap: 16px;
        column-gap: 16px;
        grid-template-columns: repeat(4, 1fr);
      }
    `
}

export const gridColumn = (mobileColumn: string, deskColumn: string) => {
  return `
  grid-column: ${deskColumn};

    
  @media (max-width: 1023px) {
    grid-column: ${mobileColumn};
  }
 
    `
}

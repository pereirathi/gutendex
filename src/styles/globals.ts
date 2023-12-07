import { css } from '@emotion/react'

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html {
    height: 100%;
  }

  body {
    background: #d3d3d3;
    height: 100%;
    min-height: 100%;
  }

  #app {
    height: 100%;
  }

  .hidden-page {
    display: none;
  }

  .overlay {
    z-index: 2147483603;
  }

  @media print {
    .hidden-page {
      display: block !important;
    }

    .hidden-print,
    #app {
      height: auto;
    }

    #app :not(.hidden-page) {
      display: none !important;
    }
  }

  table {
    border-collapse: collapse;
  }

  @page {
    margin: 0;
  }
`

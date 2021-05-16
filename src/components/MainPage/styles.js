import styled from 'styled-components'

export const ArticleWrapper = styled.div`
  margin: 3px;
  border: 1px solid grey;
  img {width: 100%;}
  .text {
    background: #1b1b65;
    color: white;
    padding: 6px;
  }
`
export const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  select {
    margin-left: 16px;
    background: transparent;
    border: none;
    border-bottom: 1px solid grey;
    width: 180px;
  }
  #bookmark-btn {
    background: #1b1b65;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
  }
`

export const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const Card = styled.div`
  max-width: 420px;
  cursor: pointer;
  max-width: 420px;
  min-width: 350px;
  flex: 1;
  :hover {
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  }
  ${props => {
    if(props.index===0) {
      return ``
    } else { return ``}
  }}
`

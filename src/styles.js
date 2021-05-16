import styled from 'styled-components'

export const Wrapper = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`


export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  flex: 1; */
  overflow: auto;
  height: inherit;
  .inner-container {
    margin:auto;
    max-width: 1080px;
    min-width: 980px;
    /* background: pink; */
    margin-bottom: 36px;
    margin-top: 36px;
  }
`
export const SearchInput = styled.input`
  transition: 0.5s;
  background: transparent;
  border: none;
  color: white;
  ${props => {
    if(props.toggle) {
      return `
        width: 180px;
        background: #ffffff4d;
        border-bottom: 1px solid white;
        `
    } else {
      return `width: 0px;
      background: transparent;
      `
    }
  }}
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0a357b;
  min-height: 20px;
  padding: 18px;
  .inner-header {
    max-width: 1080px;
    display: flex;
    justify-content: space-between;
    flex: 1;
    position: relative;
    #search-icon {
      position: absolute;
      right: 0px;
      padding: 6px;
    }
    span {
      display: flex;
      position: absolute;
      bottom: -18px;
      right: 20px;
      height: 30px;
    }
  }

`
export const Footer = styled.div`
  background: #0a357b;
  height: 200px;
`

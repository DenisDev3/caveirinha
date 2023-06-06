import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.verde};
  padding: 24px;
  margin-right: 100px;
  margin-left: 100px;
  border-radius: 16px;
  margin-bottom: 20px;
  display: flex;
  aling-items: center;
  justify-content: space-between;

  a {
    color: ${cores.branca};
    text-decoration: none;
    font-weight: bold;
  }

  div {
    display: flex;
    aling-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
`
export const LinkCart = styled.a`
    display: flex:

    img {
        margin-left: 16px;
    }

`

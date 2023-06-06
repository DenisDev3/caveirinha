import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  color: ${cores.branca};
  padding: 32px 0;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branca};
  font-size: 16px;
  margin-top: 16px;
  font-weight: bold;
`
export const Links = styled.ul`
  margin-top: 16px;
  display: flex;
  font-size: 14px;
`

export const Link = styled.a`
  color: ${cores.branca};
  text-decoration: none;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

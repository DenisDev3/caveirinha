import { Container, FooterSection, Link, Links, SectionTitle } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link> TECIDOS </Link>
          </li>
          <li>
            <Link> COLAS </Link>
          </li>
          <li>
            <Link> LINHAS </Link>
          </li>
          <li>
            <Link> MANTAS </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link> Novidades </Link>
          </li>
          <li>
            <Link> Promoções </Link>
          </li>
          <li>
            <Link>Em Breve </Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; Caveirinha Todos os direitos reservados</p>
    </div>
  </Container>
)
export default Footer

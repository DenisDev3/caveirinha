import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { Action } from '../../components/Gallery/styles'
import tnt from '../../assets/images/produtos/tnt/tnt (1).jpg'
const Product = () => {
  const { id } = useParams()

  return (
    <>
      <Hero />
      <Section title="Sobre o Produto" background="black">
        <p>
          TNT LISO Santa Fé Gramatura: 40g Largura: 1,40 metros Comprimento: 50
          metros Composição: 100% Polipropileno venda mínima a partir de 5
          metros linear. Tnt 40g Liso é utilizado em confecções de máscaras,
          decorações, embalagens, brinquedos, confecções em geral , indústria
          moveleira, tapeçaria, artesanatos em geral e muitas outras aplicações.
        </p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          COMO UTILIZÁ-LO? Então, é muito fácil, por exemplo, o TNT se dá bem
          com cola quente, fita dupla face, super cola, costura e até amarração!
          Dá para aproveitar em qualquer ambiente ou produto, inclusive para
          sobreposição com outros tecidos! Se você gosta de gastar pouco e de
          deixar seu ambiente lindo, fazendo você mesmo, em materiais de cores
          vibrantes, o TNT é o seu produto. E para ajudar você a ter o melhor do
          TNT, separamos o TNT Alia Premium, eleito o de maior qualidade pelos
          especialistas no produto. Produzido num processo altamente cuidadoso
          de spunbond, em cores homogêneas, e com toque perfeito, desenvolvido
          especialmente para quem valoriza detalhes. Nosso Tnt é feito de
          Polipropileno Premium, com Super Pigmentação e Fórmula Secreta para um
          toque perfeito. O que permite uma composição única para seus trabalhos
          manuais ou para decorações. Entregue em embalagem dupla para não sujar
          ou conter qualquer dano, nosso Tnt possui a qualidade mais desejada de
          toda a região. Confira detalhadamente sua opção de compra:
        </p>
      </Section>
      <Gallery name="Produto TNT" defaultCover={tnt} />
    </>
  )
}

export default Product

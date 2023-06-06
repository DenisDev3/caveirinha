import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque do dia</Tag>
      <div>
        <Titulo>Tecidos e Mantas com Desconto</Titulo>
        <Precos>
          CUPOMS <span>R$ 20,00</span> <br />a R$ 50,00 reais de desconto
        </Precos>
      </div>
      <Button type="link" to="/produto" title="Aproveite a oferta">
        Conferir
      </Button>
    </div>
  </Imagem>
)

export default Banner

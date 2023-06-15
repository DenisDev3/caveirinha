import bannerImg from '../../assets/images/banner.jpg'
import Button from '../Button'
import Tag from '../Tag'

import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>Tecido</Tag>
        <Tag>TNT</Tag>
      </div>

      <Infos>
        <h2>TNT LISO Santa Fé</h2>
        <p>
          <span> R$: 5,80 </span>
          por 2,80
        </p>
        <Button
          type="button"
          title="clique aqui pra adicionar ao carrinho"
          variant="primary"
        >
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero

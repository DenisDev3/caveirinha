import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'

import tnt2 from '../../assets/images/tnt2.png'
import vinil from '../../assets/images/vinil.png'
import tnt3 from '../../assets/images/gramatura2.png'
import tecido from '../../assets/images/tecido.png'
import nylon from '../../assets/images/nylon.png'
import cola from '../../assets/images/cola.png'
import cola2 from '../../assets/images/cola2.png'
import bisnaga from '../../assets/images/bisnaga.png'
import { title } from 'process'
import Carousel from '../../components/Carousel'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'TNT',
    description:
      '40g Largura: 1,40 metros Comprimento: 50 metros Composição: 100% olipropileno',
    title: 'TNT LISO Santa Fé',
    system: 'Tecido',
    infos: ['10%', 'R$ 2,80'],
    image: tnt2
  },
  {
    id: 2,
    category: 'OxFord',
    description: 'Composição: 100% Poliéster, Largura do Tecido: 1,50 metros',
    title: 'Tecido Oxford Liso',
    system: 'Tecidos',
    infos: ['10%', 'R$ 10,50'],
    image: tecido
  },
  {
    id: 3,
    category: 'TNT',
    description: 'Largura: 1,40cmGramatura: 80 Composição: 100% polipropileno',
    title: 'TNT GRAMATURA 80',
    system: 'Tecido',
    infos: ['10%', 'R$ 6,50'],
    image: tnt3
  },
  {
    id: 4,
    category: 'Vinil',
    description:
      'O Vini Adesivo é um revestimento prático e criativo para a decoração',
    title: 'VINIL ADESIVO PRETO BRILHO 50CM',
    system: 'Revestimento',
    infos: ['10%', 'R$ R$9,00'],
    image: vinil
  }
]

const Limitado: Game[] = [
  {
    id: 5,
    category: 'Linha',
    description: 'Linhas 100% Poliamida com acabamento bondeado ou mole',
    title: 'Linha Nylon Settanyl Cone',
    system: 'Settanyl',
    infos: ['R$23,00'],
    image: nylon
  },
  {
    id: 6,
    category: 'Cola',
    description: 'Adesivo a base de solvente para colagem',
    title: 'Cola De Contato Kisafix',
    system: 'Kisafix',
    infos: ['R$12,40'],
    image: cola
  },
  {
    id: 7,
    category: 'Cola',
    description: 'Adesivo de contato que apresenta aderência rápida',
    title: 'Cola Vinil',
    system: 'KisaFix',
    infos: ['R$10,00'],
    image: cola2
  },
  {
    id: 8,
    category: 'Cola',
    description: 'Cola de contato em bisnaga de 75g',
    title: 'Adesivo de Contato Bisnaga 75g',
    system: 'KisaFix',
    infos: ['9,00'],
    image: bisnaga
  }
]

const Home = () => (
  <>
    <Carousel />
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="white" />
    <ProductsList games={Limitado} title="Estoque Limitado" background="gray" />
  </>
)

export default Home

import Card from './Components/Card'
import './App.css'

function App() {

  return (
    <>
    <h1 className='Tips'>Tips & Travel</h1>
    <div className='Tenerife'><Card title='Tenerife' description='The largest of Spains Canary Islands, Tenerife boasts beautiful beaches, volcanic landscapes, and a year-round warm climate perfect for adventures.' img='https://www.barcelo.com/guia-turismo/wp-content/uploads/que-visitar-en-tenerife-2.jpg'/>
    <Card title='London'description='A vibrant blend of history and modernity, London captivates with its iconic landmarks, world-class museums, and bustling city life.' img='https://babylontours.com/wp-content/uploads/2016/09/london-441853_960_720.jpg'/>
    <Card title='Marrakech' description='Known for its rich colors and aromas, Marrakech enchants with its ancient souks, stunning palaces, and the lively atmosphere of Jemaa el-Fnaa square.' img='https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/koutoubia-mosque-minaret-located-at-medina-quarter-of-marrakesh-morocco-balate-dorin.jpg?itok=08hAHERp'/>
    </div></>
  )
}

export default App

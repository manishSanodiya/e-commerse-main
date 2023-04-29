
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import MusicItems from "./MusicItems";
import { Col } from "react-bootstrap";


const productsArr = [
  {
   id:'A1',
    title: "Colors",

    price: 100,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
   id:'A2',
    title: "Black and white Colors",

    price: 50,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
   id:'A3',
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:'A4',
    title: "Blue Color",

    price: 100,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


const Music = () => {
  
 const musicList = productsArr.map((item) => (
  <MusicItems
  imageUrl={item.imageUrl}
  title={item.title}
  price={item.price}
  id={item.id}
  key={item.id}
  />
          
 ))
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Music</h1>
      <Container>
        <Row>
        <Col xs={6} md={6}>
         {musicList}
         </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Music;

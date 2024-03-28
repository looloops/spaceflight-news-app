import { Card, Button, Col } from "react-bootstrap";
import Article from "../interfaces/Article";

interface ArticleProps {
  article: Article;
}

const SingleArticle = ({ article }: ArticleProps) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <Card className="m-2">
        <Card.Img variant="top" src={article.image_url} />
        <Card.Body>
          <Card.Text>{article.title}</Card.Text>
          <Button>Vai all'articolo</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleArticle;

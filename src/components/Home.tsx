import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Article from "../interfaces/Article";
import SingleArticle from "./SingleArticle";

const Home = () => {
  const baseUrl = "https://api.spaceflightnewsapi.net/v3/blogs";
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await fetch(baseUrl);
      if (res.ok) {
        const data: Article[] = await res.json();
        setArticles(data);
        console.log(articles);
      } else {
        console.log("Si è verificato un problema: ", res.status);
      }
    } catch (error) {
      console.log("Errore nel recupero dei dati: ", error);
    }
  };
  return (
    <Container>
      <Row>
        {articles.map((article) => (
          <SingleArticle article={article} key={article.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Home;

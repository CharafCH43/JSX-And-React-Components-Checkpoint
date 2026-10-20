import React from "react";
import { Container, Card, Button, Badge } from "react-bootstrap";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import "./App.css";

// Remplace par ton prénom, ou laisse une chaîne vide.
const firstName = "Charaf";

function App() {
  return (
    <div className="app-wrapper">
      <Container className="py-5">
        <header className="text-center mb-5">
          <Badge bg="primary" className="mb-3 px-3 py-2">
            REACT CHECKPOINT
          </Badge>
          <h1 className="page-title">Discover Our Product</h1>
          <p className="text-secondary">
            Quality, comfort and style in one place.
          </p>
        </header>

        <Card className="product-card mx-auto border-0">
          <Image />

          <Card.Body className="p-4 p-md-5">
            <Badge bg="success" className="mb-3">
              Featured Product
            </Badge>

            <Name />
            <Price />
            <Description />

            <div className="d-grid mt-4">
              <Button
                variant="dark"
                size="lg"
                onClick={() => alert("Thank you for your interest!")}
              >
                Discover Now →
              </Button>
            </div>
          </Card.Body>
        </Card>

        <div className="greeting text-center mt-5">
          <h2>Hello, {firstName.trim() || "there"}!</h2>

          {firstName.trim() !== "" && (
            <div className="mt-3">
              <img
                src="https://i.pravatar.cc/120?img=12"
                alt={`${firstName}'s avatar`}
                className="user-avatar"
              />
              <p className="text-secondary mt-2">
                Welcome to my React application.
              </p>
            </div>
          )}
        </div>

        <footer className="text-center mt-5 text-secondary">
          Built with React & React-Bootstrap
        </footer>
      </Container>
    </div>
  );
}

export default App;

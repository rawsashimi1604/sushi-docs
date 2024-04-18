import React from "react";

import Header from "../components/typography/Header";
import Container from "../components/layout/Container";

function NotFound() {
  return (
    <Container>
      <div className="py-2">
        <Header text="404 Not Found" />
        <p>
          The page you requested could not be found. Please try another page!
        </p>
      </div>
    </Container>
  );
}

export default NotFound;

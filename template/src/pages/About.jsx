import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const AboutPage = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>

        <p>That feels like an existential question, don't you think?</p>

        <LinkContainer to='/'>
          <Button>Go To Home</Button>
        </LinkContainer>
      </main>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};

export default AboutPage;

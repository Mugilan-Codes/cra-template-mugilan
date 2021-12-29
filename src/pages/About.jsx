import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const AboutPage = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>

        <p>That feels like an existential question, don't you think?</p>

        <Button as={Link} to='/'>
          Go to Home
        </Button>
      </main>

      <nav>
        <Link to='/'>Home</Link>
      </nav>
    </>
  );
};

export default AboutPage;

import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>

        <p>You can do this, I believe in you.</p>

        <LinkContainer to='/about'>
          <Button>Go To About</Button>
        </LinkContainer>
      </main>

      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
};

export default HomePage;

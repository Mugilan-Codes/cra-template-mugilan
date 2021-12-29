import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const HomePage = () => {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>

        <p>You can do this, I believe in you.</p>

        <Button as={Link} to='/about'>
          Go To About
        </Button>
      </main>

      <nav>
        <Link to='/about'>About</Link>
      </nav>
    </>
  );
};

export default HomePage;

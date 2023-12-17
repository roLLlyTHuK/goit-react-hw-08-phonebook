import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { Link } from 'react-router-dom';

const styles = {
  container: {
    minHeight: '800px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const Home = () => {
  const user = useSelector(selectUser);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the phonebook,</h1>
      <h1 style={styles.title}>
        {user.name ? `${user.name}` : 'guest, please '}
        {!user.name && (
          <>
            <Link to="/register">register</Link> or{' '}
            <Link to="/login">log in</Link>.
          </>
        )}
      </h1>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the phonebook</h1>
    </div>
  );
};

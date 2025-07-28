import Title from "./widgets/Title";

function App() {
  const styles = {
    backdrop: {
      backgroundColor: '#101C2D',
      width: '100%',
      height: '100vh',
      position: 'absolute',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }

  return (
    <div style={styles.backdrop}>
      <Title />
    </div>
  );
}

export default App;
import Title from "./widgets/Title";
import Bio from "./widgets/Bio";

function App() {
  const styles = {
    backdrop: {
        backgroundColor: '#101C2D',
        width: '100%',
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
        <Bio />
    </div>
  );
}

export default App;
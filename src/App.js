import Title from "./widgets/Title";
import About from "./widgets/About";
import Inspirations from "./widgets/Inspirations";

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
        <About />
        <Inspirations />
    </div>
  );
}

export default App;
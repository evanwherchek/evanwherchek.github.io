import Title from "./widgets/Title";
import { motion } from "motion/react"

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
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        >
        <Title />
      </motion.p>

    </div>
  );
}

export default App;
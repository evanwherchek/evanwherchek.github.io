import lindenSvg from '../assets/linden.svg';
import oakSvg from '../assets/oak.svg';
import { motion } from "motion/react"

function Title() {
    const styles = {
        h1: {
            fontFamily: 'Poly',
            color: 'white',
            fontStyle: 'italic',
            fontWeight: '100',
            fontSize: '5vw',
            marginBottom: '0',
            textAlign: 'center',
        },
        h2: {
            fontFamily: 'Poly',
            color: 'white',
            fontWeight: '100',
            fontSize: '3vw',
            marginTop: '0',
            textAlign: 'center',
        },
        leaf: {
            height: '5vw',
            width: '5vw',
            marginTop: '20px',
            marginLeft: '10px',
            marginRight: '10px',
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 3 }}>
                    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <img style={styles.leaf} src={lindenSvg} alt="Linden" />
                        <h1 style={styles.h1}>Evan Herchek</h1>
                        <img style={styles.leaf} src={oakSvg} alt="Oak" />
                    </div>
                    <h2 style={styles.h2}>Software Developer</h2>
                </motion.p>
            </motion.div>
        </div>
    );
}

export default Title;
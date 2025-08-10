import { motion } from "motion/react"

function Inspirations() {
    const styles = {
        h2: {
            fontFamily: 'Poly',
            color: 'black',
            fontWeight: '100',
            fontSize: '2vw',
            marginTop: '0',
            textAlign: 'start',
            textDecoration: 'underline',
        },
        p1: {
            fontFamily: 'Poly',
            color: 'black',
            fontWeight: '100',
            fontSize: '2vw',
            marginLeft: '1vw',
            marginRight: '1vw',
        },
        p2: {
            fontFamily: 'Poly',
            color: '#365b95',
            fontWeight: '100',
            fontSize: '2vw',
            marginLeft: '1vw',
            marginRight: '1vw',
        },
        img: {
            width: '25vw',
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <h2 style={styles.h2}>Things that I enjoy</h2>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={styles.p1}>Software engineering</p><p style={styles.p2}>Cooking</p><p style={styles.p1}>Learning</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={styles.p2}>Analytical thinking</p><p style={styles.p1}>Travel</p><p style={styles.p2}>Automation</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={styles.p1}>Business strategy</p><p style={styles.p2}>Gardening</p><p style={styles.p1}>Fencing</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={styles.p2}>Data science</p><p style={styles.p1}>Capital management</p><p style={styles.p2}>Skiing</p>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <p style={styles.p1}>History</p><p style={styles.p2}>Design</p><p style={styles.p1}>Hiking</p>
                </div>
            </motion.div>
        </div>
    );
}

export default Inspirations;
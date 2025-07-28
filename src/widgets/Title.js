import lindenSvg from '../assets/linden.svg';
import oakSvg from '../assets/oak.svg';
import { useInView } from 'react-intersection-observer';

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
            height: '7vw',
            width: '7vw',
        }
    }

    const { ref, inView } = useInView ({
        threshold: 0.1,
        triggerOnce: true
    });

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-5000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={styles.leaf} src={lindenSvg} alt="Linden" />
                <h1 style={styles.h1}>Evan Herchek</h1>
                <img style={styles.leaf} src={oakSvg} alt="Oak" />
            </div>
            <h2 style={styles.h2}>Software Developer</h2>
        </div>
    );
}

export default Title;
import headshot from '../assets/headshot.png';

function Bio() {
    const styles = {
        h2: {
            fontFamily: 'Poly',
            color: 'white',
            fontWeight: '100',
            fontSize: '3vw',
            marginTop: '0',
            textAlign: 'start',
        },
        p: {
            fontFamily: 'Poly',
            color: 'white',
            fontWeight: '100',
            fontSize: '2vw',
        },
        img: {
            width: '30vw',
        }
    }

    return (
        <div style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <img style={styles.img} src={headshot} alt="Evan Herchek" />
                <div style={{width: '5vw'}}/>
                <div style={{width: '50vw'}}>
                    <h2 style={styles.h2}>Hello!</h2>
                    <p style={styles.p}>My name is Evan and I am a Software Developer currently based in St. Louis at National Information Solutions Cooperative. Every day, I contribute to a back end Java and SQL program used in the generation of utility billing statements for rural electric cooperatives.</p>
                </div>
            </div>
        </div>
    );
}

export default Bio;
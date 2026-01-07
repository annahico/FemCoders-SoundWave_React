import Button from '../components/atoms/Button';

const Home = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Home Page (Under Construction)</h1>
            <p>Here I can see how my button-engine Atom looks:</p>

            {/* Uso el componente Button */}
            <Button onClick={() => alert('¡Botón funcionando!')}>
                Join Now
            </Button>
        </div>
    );
};

export default Home;
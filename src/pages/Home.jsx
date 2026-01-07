import Button from '../components/atoms/Button';

const Home = () => {
    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>Página de Inicio (En construcción)</h1>
            <p>Aquí puedo ver cómo queda mi atom de button:</p>

            {/* Uso el componente Button */}
            <Button onClick={() => alert('¡Botón funcionando!')}>
                Join Now
            </Button>
        </div>
    );
};

export default Home;
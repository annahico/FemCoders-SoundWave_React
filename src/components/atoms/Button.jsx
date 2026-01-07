import './Button.css';

const Button = ({ children, type = "button", onClick }) => {
    return (
        <button
            className="btn-primary"
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
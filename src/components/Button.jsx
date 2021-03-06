import './Button.scss';

const Button = ({ children, ...otherProps }) => (
    <button className='button' {...otherProps}>
        {children}
    </button>
);

export default Button;

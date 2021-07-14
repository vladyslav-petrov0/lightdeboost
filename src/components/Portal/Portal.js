import ReactDOM from 'react-dom';

const Portal = ({ isOpen, children, to }) => {
    if (!isOpen) {
        return children;
    }

    return (
        ReactDOM.createPortal(children, to)
    );
};

export default Portal;
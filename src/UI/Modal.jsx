import classes from "./styles/Modal.module.css"


const Modal = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.backdrop}>
                <div className={classes.modal}>
                    <div className={classes.card}>
                        { props.children }
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Modal;
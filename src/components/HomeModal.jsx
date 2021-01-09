import Modal from 'react-modal';
import { useState } from 'react';
import { Button } from '@material-ui/core'



const customStyles = {
    overlay: {
        backgroundColor: "#212121",
      },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: "#212121",
        color: "blueviolet",
    }
};

function HomeModal(props) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {

    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={openModal}>
                {props.buttonText}
            </Button>
            <Modal
                style={customStyles}
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                ariaHideApp={false}
                centered
            >
                {props.children}
            </Modal>
        </div>
    )
}

export default HomeModal;
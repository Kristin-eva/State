import './Modal.css'
type Props={
    modalTitle: string;
    modalDescription: string;
    modalImg: string;
    closeModal: ()=> void;
}
const Modal = ({modalTitle, modalDescription,modalImg,closeModal}:Props) => {
    return(
        <div className='container'>
        <div className='modal'>
        <button onClick={closeModal}>Back</button>
        <h1 className='title'>{modalTitle}</h1>
        <p className='description'>{modalDescription}</p>
        <img className='mynd' src={modalImg}/>
        </div>
        </div>
        
    )
}
export default Modal
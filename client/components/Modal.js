import ReactDOM from "react-dom"

import { AiOutlineCloseCircle } from "react-icons/ai"


const Modal = ({ show, close, title, children, Form }) => {
  return (
    <>
     {
     show ?
     
      <div
        className="modalContainer"
        onClick={() => close()}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title"> {title} </h2>
            
              <AiOutlineCloseCircle className="close__svg" size={20} color={`#000`} onClick={() => close()}/>
            
          </header>
          <main className="modal_content"> 
            {children} 
            <Form/>
          </main>
          <footer className="modal_footer">
            <button className="modal-close" onClick={() => close()}>
              Cancel
            </button>

            <button className="submit">Apply</button>
          </footer>
        </div>
      </div>
      : null
     }
    </>
  )
}

export default Modal
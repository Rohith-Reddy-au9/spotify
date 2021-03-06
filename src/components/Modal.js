import React from 'react'

const Modal = ({ children, show, close }) => {
  if (!show) return null

  return (
    <div className="Modal" css={CSS}>
      <div className="modal-content">
        <i className="fa fa-times" onClick={close} />
        {children}
      </div>
    </div>
  )
}


export default Modal

// React
import { HTMLAttributes, Fragment, useRef } from "react"
// Styled components
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "./Modal.styled"
import { IoIosClose } from "react-icons/io"

interface ModalProps {
  show: boolean
  onClose: any
  children: any
  title: string
}

import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

const Modal = (props: ModalProps) => {
  const { show, onClose, children, title } = props

  const [isBrowser, setIsBrowser] = useState(false)
  const ref = useRef<Element | null>(null)

  useEffect(() => {
    setIsBrowser(true)
    ref.current = document.getElementById("modal-root") as HTMLElement
  }, [])

  const handleCloseClick = (e: any) => {
    e.preventDefault()
    onClose()
  }

  const modalContent = show ? (
    <StyledModalOverlay>
      <StyledModal>
        <StyledModalHeader>
          <button className="button-close" onClick={handleCloseClick}>
            <IoIosClose className="icon" />
          </button>
        </StyledModalHeader>
        {title && <StyledModalTitle>{title}</StyledModalTitle>}
        <StyledModalBody>{children}</StyledModalBody>
      </StyledModal>
    </StyledModalOverlay>
  ) : null

  if (isBrowser && ref.current) {
    return ReactDOM.createPortal(modalContent, ref.current)
  } else {
    return null
  }
}

export default Modal

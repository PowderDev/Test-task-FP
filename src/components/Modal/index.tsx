import clsx from "clsx"
import { MouseEvent, ReactNode, useCallback, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import useKey from "../../hooks/useKey"
import styles from "./index.module.scss"

export type ModalProps = {
  isOpen: boolean
  children?: ReactNode
  className?: string
  overlayClassName?: string
  onRequestClose?: () => any
}

export function Modal({
  isOpen,
  onRequestClose,
  children,
  className,
  overlayClassName,
}: ModalProps) {
  const [mounted, setMounted] = useState(false)
  const onOverlayClick = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (!(event.target as HTMLElement).closest(`.${styles.root}`)) {
        onRequestClose?.()
      }
    },
    [onRequestClose]
  )

  useKey("Escape", isOpen ? onRequestClose : undefined, [isOpen])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("body-noscroll")
      return () => {
        document.body.classList.remove("body-noscroll")
      }
    }
  }, [isOpen])

  return isOpen && mounted
    ? createPortal(
        <div className={clsx(styles.overlay, overlayClassName)} onClick={onOverlayClick}>
          <div className={clsx(styles.root, className)}>{children}</div>
        </div>,
        document.body
      )
    : null
}

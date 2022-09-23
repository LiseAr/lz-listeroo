import React, { ReactNode, RefObject } from 'react'
import { Form as Unform } from '@unform/web'
import { FormHandles } from '@unform/core'

interface IForm {
  formRef: RefObject<FormHandles>
  children: ReactNode | ReactNode[]
}

const Form = ({ children, formRef }: IForm) => {

  return (
    <Unform ref={formRef} onSubmit={() => {}}>
      {children}
    </Unform >
  )
}

export { Form }

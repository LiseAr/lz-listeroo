import React, { useRef, useState } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

interface IUseForm {
  schema: any
}
export const useForm = ({ schema }: IUseForm) => {

  const formRef = useRef<FormHandles>(null)
  const [error, setError] = useState<any>()

  const verifyFields = async () => {

    setError(undefined);
    if (formRef?.current) {
      const data = formRef.current.getData()
      try {
        formRef.current.setErrors({});
        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const validationErrors: any = {};
          err.inner.forEach((error: any) => {
            if (error?.path)
              validationErrors[error.path] = error.message;
          });
          setError(validationErrors);
          formRef.current.setErrors(validationErrors);
          throw Error('')
        }
      }
    }


  }

  return {
    formRef, error, verifyFields
  }

}
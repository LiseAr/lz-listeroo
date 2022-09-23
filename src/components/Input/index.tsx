import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'
import { TextField } from '@mui/material'

interface Props {
  name: string
  label: string
}

type IInput = JSX.IntrinsicElements['input'] & Props

const Input = ({ name, ...rest }: IInput) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, defaultValue, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref: any) => {
        if (ref) { return ref?.current?.value || '' }
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  return (
    <TextField
      name={name}
      inputRef={inputRef}
      type="text"
      id="outlined-basic"
      label={rest?.label}
      variant="outlined"
    />

    // <input
    //   name={name}
    //   ref={inputRef}
    //   type="text"
    //   {...rest}
    // />
  )
}

export default Input
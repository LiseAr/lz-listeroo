import React, { useState } from 'react'
import { Form } from '../../../components/Form'
import Input from '../../../components/Input'
import { useForm } from '../../../hooks/useForm'

import schema from './schema'
import { fields, selectFieldsOptions } from './fields'
import { Button } from '@mui/material'
import Select from '../../../components/Select'


const CreateList = () => {

  const { formRef } = useForm({ schema })
  const [fieldsSelect, setFieldsSelect] = useState([])

  const handleCreate = () => {

    const data = formRef.current?.getData()
    console.log(
      {
        ...data,
        fields: fieldsSelect
      }
    )
  }

  const handleAddField = () => {
    const data = formRef.current?.getData()
    if (data)
      //@ts-ignore
      setFieldsSelect((prev: any) => [...prev, data.fields])
  }

  return (
    <>
      <Form formRef={formRef}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 20,
            gap: 15
          }}
        >
          {fields.map(
            (field: any) => field.type === 'select' ?
              (<div
                style={{
                  display: 'flex',
                  width: 300,
                  gap: 10
                }}
              >
                <Select name={field.name} label={field.label} options={field.options} />
                {field.name === 'fields' &&
                  <Button variant='contained' onClick={handleAddField}>add</Button>
                }
              </div>
              )
              :
              (
                <Input name={field.name} label={field.label} />
              )
          )}
        </div>
      </Form>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: 20,
          gap: 15
        }}
      >
        {fieldsSelect.map(
          (fieldSelect) => (<div>{
            selectFieldsOptions.filter(
              (field: any) => field.id === fieldSelect
            )[0].label
          }</div>)
        )}
        <Button variant='contained' onClick={handleCreate}>Create</Button>
        <Button variant='outlined' href='/'>Cancel</Button>
      </div>
    </>
  )
}

export { CreateList }
import React from 'react'

const selectFieldsOptions = [
  {
    id: 1,
    label: 'Twitter Handle',
  },
  {
    id: 2,
    label: 'Public Wallets',
  },
  {
    id: 3,
    label: 'URL',
  },
  {
    id: 4,
    label: 'Twitter Followers',
  }
]

const fields = [
  {
    name: 'listName',
    label: 'List name',
    type: 'text',
  },
  {
    name: 'rankMetricName',
    label: 'Rank Metric name',
    type: 'text',
  },
  {
    name: 'people',
    label: 'List of',
    type: 'select',
    options: [
      {
        id: 1,
        label: 'People',
      },
      {
        id: 2,
        label: 'Organizations',
      }
    ]
  },
  {
    name: 'fields',
    label: 'Fields',
    type: 'select',
    options: selectFieldsOptions
  }
]

export { fields, selectFieldsOptions }
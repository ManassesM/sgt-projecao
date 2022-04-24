import * as yup from 'yup'

const number = /^[1-3]$/ // matches number between 1 and 3

export const validationSchema = yup.object({
  title: yup.string().required(),
  description: yup.string(),
  priority: yup.string().matches(number)
})

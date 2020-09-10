import { AiOutlineFieldNumber } from 'react-icons/ai'
import { createDefaultWidgetValues } from '../utils'

/** {
    "type" : "Number",
    "config" : {
      "label" : "number",
      "placeholder" : "Some number"
    }
  } */

const { TYPE_NAME, FormFields, schema, create } = createDefaultWidgetValues('Number')

const createMock = (maybeMock) => maybeMock || Math.floor(Math.random() * 9999)

const Meta = {
  icon: AiOutlineFieldNumber,
  title: 'Number',
  description: 'Numbers'
}

export default {
  createMock,
  create,
  FormFields,
  TYPE_NAME,
  schema,
  Meta
}

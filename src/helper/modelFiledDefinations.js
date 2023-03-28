import validator from 'validator'
import mongoose from 'mongoose'
export default {
  stringOnly: {
    type: String,
    default: '',
  },
  stringAndRequired: {
    type: String,
    required: true,
  },
  NumberWithDecimal: {
    type: mongoose.Schema.Types.Decimal128,
    default: 0,
  },
  stringAndUnique: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  numberOnly: {
    type: Number,
  },
  NumberWithRequired: {
    type: Number,
    required: true,
  },
  NumberOnly: {
    type: Number,
  },
  NumberWithRequiredAndUnique: {
    type: Number,
    required: true,
    unique: true,
  },
  dateHandling: {
    type: Date,
    required: true,
  },
  emailEntry: {
    type: String,
    unique: true,
    required: true,
    validate: [validator.isEmail, 'Enter a Valid Email'],
  },
  NumberWithPhoneNumberValidation: {
    type: Number,
    minLength: [10, 'Number Must of Length 10 '],
    maxLength: [10, 'Number Must of Length 10 '],
  },
  DecimalNumberEntry: {
    type: mongoose.Schema.Types.Decimal128,
    default: 0.0,
  },
  stringWithDefault: {
    type: String,
    default: 'Pending',
  },
  enumAndRequired: (list) => {
    return {
      type: String,
      enum: list,
      required: true,
    }
  },
  booleanAndRequired: (defaultVal = 0) => {
    return {
      type: Boolean,
      required: true,
      default: defaultVal,
    }
  },
  boolean: (defaultVal = 0) => {
    return {
      type: Boolean,
      default: defaultVal,
    }
  },
}

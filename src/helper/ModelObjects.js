import validator from 'validator'
import mongoose from 'mongoose'
export default {
  stringValueWithDefaultEmpty: {
    type: String,
    default: '',
  },
  stringValueRequired: {
    type: String,
    required: true,
  },
  NumberWithDecimal: {
    type: mongoose.Schema.Types.Decimal128,
    default: 0,
  },
  stringUniqueLowerCase: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  stringUniqueUpperCase: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
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

  boolean: (defaultVal = 0) => {
    return {
      type: Boolean,
      default: defaultVal,
    }
  },
}

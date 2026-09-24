import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String },
  email: { type: String, required: true },
  agencyName: { type: String, default: '' },
  patientName: { type: String, default: '' },
  specialty: { type: String, default: '' },
  ehrSoftware: { type: String, default: '' },
  message: { type: String, required: true },
  read: { type: Boolean, default: false },
}, { timestamps: true })

export default mongoose.model('Contact', contactSchema)

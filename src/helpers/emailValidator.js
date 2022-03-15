export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Aadhaar can't be empty."
  if (email.length < 12) return 'Aadhar Number must be 12 characters long.'
  if (email.length > 12) return 'Aadhar Number must be 12 characters long.'
  return ''
}

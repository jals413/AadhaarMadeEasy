export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Aadhaar Number can't be empty."
  if (email.length = 12) return 'Ooops! Enter Valid Aadhaar Number.'
  return ''
}

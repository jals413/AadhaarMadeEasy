export function passwordValidator(password) {
  if (!password) return "OTP can't be empty."
  if (password.length = 6) return 'OTP should be 6 digits only.'
  return ''
}

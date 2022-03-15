export function passwordValidator(password) {
  if (!password) return "OTP can't be empty."
  if (password.length < 6) return 'OTP must be 6 characters long.'
  if (password.length > 6) return 'OTP must be 6 characters long.'
  return ''
}

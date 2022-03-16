export function passwordValidator(password) {
  if (!password) return <Text>OTP can't be empty.</Text>
  if (password.length < 6) return <Text>OTP must be 6 characters long.</Text>
  if (password.length > 6) return <Text>OTP must be 6 characters long.</Text>
  return ''
}

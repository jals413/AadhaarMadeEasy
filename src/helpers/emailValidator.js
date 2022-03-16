export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return <Text>Aadhaar can't be empty.</Text>
  if (email.length < 12) return <Text>Aadhar Number must be 12 characters long.</Text>
  if (email.length > 12) return <Text>Aadhar Number must be 12 characters long.</Text>
  return ''
}

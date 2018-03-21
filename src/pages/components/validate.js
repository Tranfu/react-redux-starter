export function required(value) {
  if (value === 0) {
    return undefined
  }
  return (value ? undefined : 'required')
}

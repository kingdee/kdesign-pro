export default function access(initialState: { access: string } | undefined) {
  const { access } = initialState ?? {}
  return {
    canAdmin: access === 'kdcloud',
  }
}

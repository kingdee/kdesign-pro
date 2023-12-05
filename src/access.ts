export default function access(initialState: { access: string } | undefined) {
  const { access: as } = initialState ?? {}
  return {
    canAdmin: as === 'kdcloud',
  }
}

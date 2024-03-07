export default function access(initialState: { access: string } | undefined) {
  const { access: as } = initialState ?? {}
  return {
    isAdmin: as === 'kdcloud',
    accessible: (value: string) => {
      return as === 'kdcloud' || !value
    },
  }
}

export default function assert(val: boolean, message: string) {
  if (!val) {
    throw new Error(message)
  }
}

import bar from '@/bar'

const foo = (n1: number, n2: number, n3?: number): number => {
  if (n3) return bar(n3)

  return n1 + n2
}

export default foo

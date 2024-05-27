import foo from '@/foo'

describe('Test', () => {
  test('should call foo', () => {
    const result = foo(1, 2)
    expect(result).toBe(3)
  })

  test('should call bar', () => {
    const result = foo(1, 2, 3)
    expect(result).toBe(6)
  })
})

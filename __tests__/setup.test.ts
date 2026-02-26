/**
 * Basic test to verify Jest and testing setup is working correctly
 */
describe('Testing Setup', () => {
  it('should run tests successfully', () => {
    expect(true).toBe(true)
  })

  it('should have access to testing-library/jest-dom matchers', () => {
    const element = document.createElement('div')
    element.textContent = 'Hello World'
    document.body.appendChild(element)
    expect(element).toBeInTheDocument()
  })
})

import { vitest } from 'vitest'

export const getMockEvent = (inputs: { [key: string]: string }) => {
  const mockPreventDefault = vitest.fn()

  // Create a mock event
  const mockEvent = {
    preventDefault: mockPreventDefault,
    currentTarget: {
      elements: {
        namedItem(name: string): HTMLInputElement | null {
          if (name in inputs) {
            const inputElement = document.createElement('input');
            inputElement.value = inputs[name];
            return inputElement;
          }
          return null;
        },
      }
    },
  } as unknown as React.FormEvent<HTMLFormElement>

  return mockEvent
}
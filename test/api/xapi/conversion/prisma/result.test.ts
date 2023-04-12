import { resultToPrisma, result } from 'lib/types/x-api/result'
import { z } from 'zod'

describe('Conversion - Statment - Result', () => {
  test('result', async () => {
    const correct = [
      { score: { scaled: 0.5 } },
      { score: { scaled: 0.5 }, duration: 'P1Y2M10DT2H30M' },
      { score: { scaled: 0.5 }, duration: 'P3Y6M4DT12H30M5S', success: true },
      { response: "I'm a response", success: true, completion: true },
    ] as z.infer<typeof result>[]
    correct.forEach((value) => {
      expect(() => {
        resultToPrisma(value)
      }).not.toThrowError()
    })
  })
})

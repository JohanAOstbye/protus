import { duration, result, score } from 'lib/types/x-api/result'

describe('Type - Statment - Result', () => {
  test('score', async () => {
    const malformed = [
      { scaled: 2 },
      { scaled: -1.01 },
      { scaled: 0.5, raw: 0.5, min: 1, max: 0 },
    ]
    const correct = [
      { scaled: 0.5 },
      { scaled: 0.5, min: 1, max: 0 },

      { scaled: 0.5, min: 0, max: 1, raw: 0.5 },
      { scaled: 0.5, min: 0, max: 1 },
      { scaled: 0.5, min: 0, raw: 0.5 },
    ]
    malformed.forEach((value) => {
      expect(() => {
        score.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(score.parse(value)).toStrictEqual(value)
    })
  })
  test('duration', async () => {
    const malformed = ['P', 'PT6', 'P2T']
    const correct = [
      'P3Y6M4DT12H30M5S',
      'P1M',
      'P1D',
      'P2MT30M',
      'PT6H',
      'PT30M',
    ]
    malformed.forEach((value) => {
      expect(() => {
        duration.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(duration.parse(value)).toBe(value)
    })
  })
  test('result', async () => {
    const malformed = [
      { score: { scaled: 2 } },
      { score: { scaled: -1.01 } },
      { score: { scaled: 0.5 }, duration: 'P' },
      { score: { scaled: 0.5 }, duration: 'PT' },
      //   { success: 'fail' },
    ]
    const correct = [
      { score: { scaled: 0.5 } },
      { score: { scaled: 0.5 }, duration: 'P1Y2M10DT2H30M' },
      { score: { scaled: 0.5 }, duration: 'P3Y6M4DT12H30M5S', success: true },
      { response: "I'm a response", success: true, completion: true },
    ]
    malformed.forEach((value) => {
      expect(() => {
        result.parse(value)
      }).toThrowError()
    })
    correct.forEach((value) => {
      expect(result.parse(value)).toStrictEqual(value)
    })
  })
})

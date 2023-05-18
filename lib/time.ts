import { Duration, parse } from 'tinyduration'

export const totalDuration = (durations: string[]): Duration => {
  let test = durations.reduce<Duration>(
    (acc, cur) => {
      let c = parse(cur)
      return {
        years: (acc.years || 0) + (c.years || 0),
        months: (acc.months || 0) + (c.months || 0),
        weeks: (acc.weeks || 0) + (c.weeks || 0),
        days: (acc.days || 0) + (c.days || 0),
        hours: (acc.hours || 0) + (c.hours || 0),
        minutes: (acc.minutes || 0) + (c.minutes || 0),
        seconds: (acc.seconds || 0) + (c.seconds || 0),
      }
    },
    { hours: 0, minutes: 0, seconds: 0 }
  )
  return test
}

export const averageDuration = (
  durations: string[],
  count?: number
): Duration => {
  let total = totalDuration(durations)
  if (!count) count = durations.length
  return {
    years: (total.years || 0) / count,
    months: (total.months || 0) / count,
    weeks: (total.weeks || 0) / count,
    days: (total.days || 0) / count,
    hours: (total.hours || 0) / count,

    minutes: (total.minutes || 0) / count,
    seconds: (total.seconds || 0) / count,
  }
}

export const durationToMinutes = (duration: Duration): number => {
  let { years, months, weeks, days, hours, minutes, seconds } = duration
  let result = 0
  result += (years || 0) * 365 * 24 * 60
  result += (months || 0) * 30 * 24 * 60
  result += (weeks || 0) * 7 * 24 * 60
  result += (days || 0) * 24 * 60
  result += (hours || 0) * 60
  result += minutes || 0
  result += (seconds || 0) / 60
  return result
}

export const durationToSeconds = (duration: Duration): number => {
  let { years, months, weeks, days, hours, minutes, seconds } = duration
  let result = 0
  result += (years || 0) * 365 * 24 * 60 * 60
  result += (months || 0) * 30 * 24 * 60 * 60
  result += (weeks || 0) * 7 * 24 * 60 * 60
  result += (days || 0) * 24 * 60 * 60
  result += (hours || 0) * 60 * 60
  result += (minutes || 0) * 60
  result += seconds || 0
  return result.toFixed(2)
}

export const durationToString = (duration: Duration): string => {
  let seconds = durationToMinutes(duration) * 60
  let years = Math.floor(seconds / (365 * 24 * 60 * 60))
  seconds -= years * 365 * 24 * 60 * 60
  let months = Math.floor(seconds / (30 * 24 * 60 * 60))
  seconds -= months * 30 * 24 * 60 * 60
  let days = Math.floor(seconds / (24 * 60 * 60))
  seconds -= days * 24 * 60 * 60
  let hours = Math.floor(seconds / (60 * 60))
  seconds -= hours * 60 * 60
  let minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  let result = ''
  if (years > 0) {
    result += `${years} years, `
  }
  if (months > 0) {
    result += `${months} months, `
  }
  if (days > 0) {
    result += `${days} days, `
  }
  if (hours > 0) {
    result += `${hours} hours, `
  }
  if (minutes > 0) {
    result += `${minutes} minutes, `
  }
  if (seconds > 0) {
    result += `${seconds.toFixed(2)} seconds`
  }

  if (result == '') {
    result = '0 seconds'
  }

  return result
}

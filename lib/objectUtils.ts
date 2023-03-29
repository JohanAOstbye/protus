export const isDeepEqual = (object1: any, object2: any) => {
  if (object1 === undefined || object2 === undefined) return false
  const objKeys1 = Object.keys(object1)
  const objKeys2 = Object.keys(object2)

  if (objKeys1.length !== objKeys2.length) return false

  for (var key of objKeys1) {
    const value1 = object1[key]
    const value2 = object2[key]

    const isObjects = isObject(value1) && isObject(value2)

    if (
      (isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false
    }
  }
  return true
}

const isObject = (object: any) => {
  return object != null && typeof object === 'object'
}

export function removeNullUndefined<T>(obj: T): NonNullable<T> {
  return Object.fromEntries(
    Object.entries(obj as any)
      .filter(([_, v]) => v != null)
      .map(([k, v]) =>
        typeof v === 'object'
          ? [k, removeNullUndefined(v)]
          : ([k, v] as [string, any])
      )
  ) as NonNullable<T>
}

interface Person {
  name: string
  age: number
}

// 通过 keyof 拿到接口的属性名，并存在一个联合类型中
type T1 = keyof Person // "name" | "age"
// 将 属性值类型组成了联合类型
type T2 = Person[T1]  // string | number
// 通过传入属性名直接取类型
type T3 = Person['name']




// keyof T => "name" | "age" | "gender"
function pluck<T, U extends Array<keyof T>>(obj: T, keys: U) {
  return keys.map(n => obj[n])
}

// const result = pluck({name: '123', age: 123, gender: 'male'}, ['name', 'age'])

const result2 = pluck({name: '123', age: 123, gender: 'male'}, ['name', 'age', 'gender'])

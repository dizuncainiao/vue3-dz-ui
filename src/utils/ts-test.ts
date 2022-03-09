class Person<T> {
  constructor(name: T) {
  }
}

const p2: Person<string> = {name: 'foo'}

const p = new Person<string>('foo')

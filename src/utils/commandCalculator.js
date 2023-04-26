export class StoreCalculator {
  constructor(value) {
    this.value = value
    this.commands = []
  }

  execute = (command) => {
    this.value = command.execute(this.value)
    this.commands.push(command)
  }
}
export const store = new StoreCalculator(0)

export class AddOperation {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
  execute = (value) => Number((this.firstValue + this.secondValue).toFixed(3))
}

export class SubOperation {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
  execute = (value) => Number((this.firstValue - this.secondValue).toFixed(3))
}

export class MulOperation {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
  execute = (value) => Number((this.firstValue * this.secondValue).toFixed(3))
}

export class DivOperation {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
  execute = (value) => Number((this.firstValue / this.secondValue).toFixed(3))
}

export class RemainderOperation {
  constructor(firstValue, secondValue) {
    this.firstValue = firstValue
    this.secondValue = secondValue
  }
  execute = (value) => Number((this.firstValue % this.secondValue).toFixed(3))
}

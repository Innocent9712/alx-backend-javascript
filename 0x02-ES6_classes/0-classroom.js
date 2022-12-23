export default class classRoom {
  /* eslint-disable no-underscore-dangle */
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }

  set maxStudentsSize(newNumber) {
    if (typeof newNumber === 'number') {
      this._maxStudentsSize = newNumber;
    }
  }

  get maxStudentsSize() {
    return this._numberStudents;
  }
}

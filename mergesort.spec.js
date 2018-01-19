describe('Split Array', function() {
  it('is able to split an even-length array into two halves', function() {
    expect(split([6, 5, 3, 1, 8, 7, 2, 4])).toEqual([[6, 5, 3, 1], [8, 7, 2, 4]])
  })
  it('is able to split an odd-length array into two halves', function() {
    expect(split([6, 5, 3, 1, 8, 7, 2, 4, 9])).toEqual([[6, 5, 3, 1], [8, 7, 2, 4, 9]])
  })
})

describe('Merge Arrays', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([[1, 3, 5, 8], [2, 4, 6, 7]])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
})

const { makeNumArr, getMean, getMode, getMedian } = require('./math');


describe('Make string into array of nums', function () {
    test('should make string into array of nums', function () {
      const res = makeNumArr("1,2,3,4")
      expect(res).toEqual([1,2,3,4])
    })
  })


describe('Get Mean', function () {
    test('should get mean of nums', function () {
      const res = getMean([1,2,3,4])
      expect(res).toEqual(2.5)
    })

    test('should get mean of nums even with negative int', function () {
        const res = getMean([1,2,-3,4,5])
        expect(res).toEqual(1.8)
      })
  })

describe('Get Median', function () {
    test('should get median of odd number of nums', function () {
      const res = getMedian([1,2,3,4,5])
      expect(res).toEqual(3)
    })

    test('should get median of even number of nums', function () {
        const res = getMedian([1,2,4,5])
        expect(res).toEqual(3)
      })
  })

  describe('Get Mode', function () {
    test('should get mode of nums', function () {
      const res = getMode([1,2,3,4,3])
      expect(res).toEqual(3)
    })
  })
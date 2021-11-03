describe('Binary Search Algorithm', () => {
  it('should find 42 and return true when [33, 52, 75, 123, 63, 55, 74, 345, 42, 754, 23, 4, 17, 36] is passed in', () => {
    const array = [33, 52, 75, 123, 63, 55, 74, 345, 42, 754, 23, 4, 17, 36];
    const result = arraySearch(array, 42);
    expect(result).toBe(true);
  });
  it('should return false when 42 is searched for when [33, 52, 75, 123, 63, 55, 74, 345, 754, 23, 4, 17, 36] is passed in', () => {
    const array = [33, 52, 75, 123, 63, 55, 74, 345, 754, 23, 4, 17, 36];
    const result = arraySearch(array, 42);
    expect(result).toBe(false);
  });

})
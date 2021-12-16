
const helper = require('../../../src/utils/helper.util')

describe('Helper Utils test', () => {
  describe('getOffset', () => {
    it('Should get the offset without params will return 0', () => {
      expect(helper.getOffset()).toBe(0);

    });
    it('Should get the offset 0 for page 1 with 10 items per page', () => {
      expect(helper.getOffset(1, 10)).toBe(0);

    });
    it('Should get the offset 11 for page 2 with 10 items per page', () => {
      expect(helper.getOffset(2, 10)).toBe(10);
    });
  });

  describe('emptyOrRows', () => {
    it('Should get empty array if rows is empty', () => {
      expect(helper.emptyOrRows()).toEqual([]);

    });
    it('Should get arrary if rows is filled', () => {
      expect(helper.emptyOrRows([1])).toEqual([1]);

    });    
  });
});

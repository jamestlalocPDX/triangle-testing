import { Triangle } from '../src/logic';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2, 4, 5);
    expect(triangle.side1).toEqual(3);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
});
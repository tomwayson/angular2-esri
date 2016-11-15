// simple test to make sure testing works

import Graphic = require('esri/graphic');

describe('simple test', () => {
  it('should pass', () => {
    let graphic = new Graphic(null, null, {
      test: 'test attribute'
    })
    expect(graphic.attributes.test).toEqual('test attribute');
  })
});
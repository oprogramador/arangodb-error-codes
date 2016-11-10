import _ from 'lodash';
import codes from '../index';
import { expect } from 'chai';

describe('codes', () => {
  it('is an object', () => {
    expect(codes).to.be.an('object');
  });

  it('contains only numbers as values', () => {
    _.mapValues(codes, code => expect(code).to.be.a('number'));
  });
});

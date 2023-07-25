import { FirstLetterOnlyPipe } from './first-letter-only.pipe';

describe('FirstLetterOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new FirstLetterOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});

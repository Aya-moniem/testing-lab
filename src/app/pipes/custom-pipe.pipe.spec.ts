import { CustomPipePipe } from './custom-pipe.pipe';

describe('CustomPipePipe', () => {
  let pipe:CustomPipePipe;
  beforeEach(()=>{
    pipe = new CustomPipePipe();
  });
  it('check if pass', () => {
   
    expect(pipe.transform(4)).toBe(16);
  });
  it('check if not a numer', () => {
    
    expect(pipe.transform('aya')).toBe('not a number');
  });
});

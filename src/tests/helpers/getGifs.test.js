import { getGifs } from '../../helpers/getGifs';

describe('getGifs test',()=>{
    test('debe traer 10 elementos de la api', ()=> { 
        return getGifs('One Punch').then( gifs => {
            expect(gifs.length).toBe(10);
        })
    })
    test('debe traer 0 elementos de la api', ()=> { 
        return getGifs('').then( gifs => {
            expect(gifs.length).toBe(0);
        })
    })
})
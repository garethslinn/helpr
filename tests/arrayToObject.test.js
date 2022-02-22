import { objectToArray} from '../dist/index.js';

describe('objectToArray', () => {
    test('is an array', () => {
        let result = objectToArray({firstName: 'Mike', lastName: 'Jones', age: 34, registered: true})
        expect(Array.isArray(result)).toBe(true);
    });
    test('has array value of Mike', () => {
        let result = objectToArray({firstName: 'Mike', lastName: 'Jones', age: 34, registered: true})
        expect(result[0]).toBe('Mike');
    });
});

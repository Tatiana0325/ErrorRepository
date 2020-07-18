import ErrorRepository from '../js/index';

const err = new ErrorRepository();

test('Ошибка есть', () => {
    expect(err.translate(101)).toBe('Ошибка1');
});

test('Ошибка есть', () => {
    expect(err.translate(102)).toBe('Ошибка2');
});

test('Ошибка есть', () => {
    expect(err.translate(103)).toBe('Ошибка3');
});

test('Ошибки нет', () => {
    expect(err.translate(104)).toBe('Unknown error');
})
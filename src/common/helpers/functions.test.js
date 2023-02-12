import { throttle } from './functions';

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

it('throttle должен вызываться', () => {
    const mockedFunction = jest.fn();

    throttle(mockedFunction, 1000)();

    expect(setTimeout).toHaveBeenCalledTimes(1);
});

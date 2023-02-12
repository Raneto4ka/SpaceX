/**
 * Throttle для повторящихся функций
 *
 * @param func
 * @param wait
 * @returns {function(...[*]=): void}
 */
export function throttle(func, wait = 100) {
    let timer = null;

    return function(...args) {
        if (timer === null) {
            timer = setTimeout(() => {
                func.apply(this, args);
                timer = null;
            }, wait);
        }
    };
}

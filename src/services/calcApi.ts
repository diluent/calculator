const resource = (path: string) => {
    return fetch(path, {
        mode: 'cors',
    })
    .then((res) => res.json())
    .catch(() => ({error: 'api error'}));
}

export const sum = async (number1: number, number2: number) => {
    return resource(`sub/?number=${encodeURIComponent(number1)}&number=${encodeURIComponent(number2)}`);
};

export const sub = async (number1: number, number2: number) => {
    return resource(`sub/?number=${encodeURIComponent(number1)}&number=${encodeURIComponent(number2)}`);
};

export const mult = async (number1: number, number2: number) => {
    return resource(`mult/?number=${encodeURIComponent(number1)}&number=${encodeURIComponent(number2)}`);
};

export const div = async (number1: number, number2: number) => {
    return resource(`div/?number=${encodeURIComponent(number1)}&number=${encodeURIComponent(number2)}`);
};

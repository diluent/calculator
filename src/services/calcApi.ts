const BASE_URL = 'http://localhost:3001'; // TODO: extract to env 

const resource = (path: string) => {
    const url = `${BASE_URL}/${path}`;
    return fetch(url, {
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

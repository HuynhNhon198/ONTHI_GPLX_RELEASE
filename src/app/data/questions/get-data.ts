import { getA1 } from './a1';
import { getA2 } from './a2';
import { getB2 } from './b2';

const getData = (type: string) => {
    let data = [];
    switch (type) {
        case 'a1':
            data = getA1();
            break;
        case 'a2':
            data = getA2();
            break;
        case 'b2':
            data = getB2();
            break;
    }
    return data;
};

export function getListQuestions(type: string) {
    const data = getData(type)
    .map(x => {
        return {
            num: x.num,
            time: x.time,
            id: x.id,
            q_length: x.questions.length
        };
    });
    return data;
}

export function getQuestions(type: string, id: string) {
    return getData(type).find(x => x.id === id);
}

import { getA1, getTipA1 } from './a1';
import { getA2, getTipA2 } from './a2';
import { getB2, getTipB2 } from './b2';
import { getTipB1 } from './b1';

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

export function getTips(type: string) {
    let data = [];
    switch (type) {
        case 'a1':
            data = getTipA1();
            break;
        case 'a2':
            data = getTipA2();
            break;
        case 'b1':
            data = getTipB1();
            break;
        case 'b2':
            data = getTipB2();
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

export function getAllQuestions(type: string) {
    const allQuestions = [];
    const data = getData(type);
    for (const questions of data) {
        for (const q of questions.questions) {
            // if (q.img.length > 0) {
            //     const vitri = Number(q.img.match(/\d+/)[0]);
            //     if (255 < vitri && vitri < 356) {
            //         signData.push(q);
            //     }
            // }
            // console.log(allQuestions, q.question.trim().toLowerCase() );
            if (allQuestions.findIndex(x => x.questions === q.question) === -1) {
                allQuestions.push(q);
            }
        }
    }

    return {
        questions: allQuestions,
        time: 1200
    };
}

export function getCate(typeBig: string, length?: boolean) {
    // console.log(typeBig);
    const all = getAllQuestions(typeBig).questions;

    const filterType = (x, min: number, max: number) => {
      if (x.img === '') {
        return false;
      }
      const vitri = Number(x.img.match(/\d+/)[0]);
      return (min < vitri && vitri < max);
    };

    const signs = all.filter(x => filterType(x, 255, 356));
    const shapes = all.filter(x => filterType(x, 355, 451));
    // console.log(all);
    const list = {
      all: length ? all.length : all,
      signs: length ? signs.length : signs,
      shapes: length ? shapes.length : shapes
    };
    return list;
}


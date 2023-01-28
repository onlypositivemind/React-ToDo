import { ITodo } from '../types';

export const getNumberedArr = (arr: ITodo[]): ITodo[] => arr.map((todo, i) => ({ ...todo, order: i + 1 }));
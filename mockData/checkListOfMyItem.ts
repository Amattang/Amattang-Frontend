import { myItemType } from '../types/checkListTypes';

export const response: myItemType[] = [
  {
    categoryName: '내일까지 체크',
    questionId: 'test123123',
    question: [
      {
        checked: true,
        content: '관리비 확인',
      },
      {
        checked: false,
        content: '몰라 일단 뭐 그래 확인',
      },
    ],
  },
  {
    categoryName: '모레까지 체크',
    questionId: 'test1232123',
    question: [
      {
        checked: true,
        content: '관리비몰라 일단 확인',
      },
    ],
  },
];

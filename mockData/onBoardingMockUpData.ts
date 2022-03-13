import { checkListTypes } from '../types/checkListTypes';

export const response: checkListTypes[] = [
  {
    questionId: 'question1',
    question: '창틀이 깨끗한가요?',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: '곰팡이가 없는지 확인 후 청소를 요청하세요',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId1',
      ans: [
        { type: '예', val: false, redType: false },
        { type: '아니오', val: false, redType: true },
      ],
    },
  },
  {
    questionId: 'question2',
    question: '갈라진 틈이 있나요?',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: '벽의 틈새를 통해 벌레가 출몰한다',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId2',
      ans: [
        { type: '예', val: false, redType: false },
        { type: '아니오', val: false, redType: true },
      ],
    },
  },
  {
    questionId: 'question3',
    question: '변기의 물이 잘 내려가나요?',
    mainCategory: '외부 시설',
    subCategory: '세면대 물을 틀어 놓은 상태로 변기 물을 내려보세요요요요요요 ',
    rule: null,
    description: '오래된 건물의 고층이라면 특히 주의해주세요',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId3',
      ans: [
        { type: '예', val: false, redType: false },
        { type: '아니오', val: false, redType: true },
      ],
    },
  },
  {
    questionId: 'question4',
    question: '이중 잠금 장치가 설치 되어 있나요?',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: '설치를 요구할 수 있어요',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId4',
      ans: [
        { type: '예', val: false, redType: false },
        { type: '아니오', val: false, redType: true },
      ],
    },
  },
  {
    questionId: 'question5',
    question: '주변 편의시설을 확인하세요',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: '',
    description: '주소 입력시 표시되는 지도를 활용하세요',
    emoji: ':)',
    type: 'D',
    answer: {
      answerId: 'answer5',
      ans: [
        {
          type: '병원',
          val: false,
        },
        {
          type: '편의점',
          val: false,
        },
        {
          type: '마트',
          val: false,
        },
        {
          type: '약국',
          val: false,
        },
        {
          type: '공원',
          val: false,
        },
        {
          type: '세탁소',
          val: false,
        },
      ],
    },
  },
];

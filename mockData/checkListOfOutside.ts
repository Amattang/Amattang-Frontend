import { checkList } from '../types/checkListTypes';

export const response: checkList[] = [
  {
    questionId: 'questio7n21',
    question: '주차 공간이 있나요?',
    mainCategory: '외부 시설',
    subCategory: '지정주차 또는 상시주차가 가능한지 물어보세요',
    rule: null,
    description: null,
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answe7Id11',
      ans: [
        { type: '네', val: false, redType: false },
        { type: '아니오', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'ques6tion12',
    question: '주차비를 입력하세요',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'B',
    answer: {
      answerId: 'answer6Id2',
      ans: [{ type: '', description: '만원' }],
    },
  },
  {
    questionId: 'questi3on110',
    question: '주변 편의시설을 확인하세요',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: '주소 입력시 표시되는 지도를 활용하세요',
    emoji: ':)',
    type: 'D',
    answer: {
      answerId: 'answer3Id110',
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
          type: '세탁소',
          val: false,
        },
        {
          type: '공원',
          val: false,
        },
      ],
    },
  },
  {
    questionId: 'quest2ion221',
    question: '무인 택배함이 설치되어 있나요?',
    mainCategory: '외부 시설',
    subCategory: '주로 건물 1층에 위치해요',
    rule: null,
    description: '무인 택배함은 분실 위험을 줄일 수 있어요',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'ans2werId131',
      ans: [
        { type: '네', val: false, redType: false },
        { type: '아니오', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'que1stion221',
    question: '건물 관리인이 계시나요',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answ1erId131',
      ans: [
        { type: '네', val: false, redType: false },
        { type: '아니오', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'question2231',
    question: '1층 상가가 없나요',
    mainCategory: '외부 시설',
    subCategory: null,
    rule: null,
    description:
      '상가가 있으면 바퀴벌레가 출현할 확률이 높아요 환기시 음식 냄새가 들어올 수 있어요',
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId1321',
      ans: [
        { type: '네', val: false, redType: false },
        { type: '아니오', val: false, redType: false },
      ],
    },
  },
];

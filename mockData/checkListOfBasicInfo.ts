import { checkList } from '../types/checkListTypes';

export const response: checkList[] = [
  {
    questionId: 'question11',
    question: '체크리스트의 이름을 정하세요',
    mainCategory: '기본 정보',
    subCategory: '주황색 건물, 편의점 앞집 등 스스로 기억에 남을 만한 단어로 적어보세요',
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'B',
    answer: {
      answerId: 'answerId11',
      ans: [{ type: '' }],
    },
  },
  {
    questionId: 'question12',
    question: '주소를 작성하세요',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: '계약 전 시간대를 달리하여 재 방문하고 집 주변을 둘러볼 수 있어요\n',
    emoji: ':)',
    type: 'M',
    answer: {
      answerId: 'answerId2',
      ans: [{ type: '' }, { type: '', val: false, redType: true }],
    },
  },
  {
    questionId: 'question13',
    question: '사진을 찍어 기록하세요',
    mainCategory: '기본 정보',
    subCategory: '세면대 물을 틀어 놓은 상태로 변기 물을 내려보세요요요요요요 ',
    deleted: true,
    rule: null,
    description: '오래된 건물의 고층이라면 특히 주의해주세요',
    emoji: ':)',
    type: 'C',
    answer: {
      answerId: 'answerId3',
      ans: [
        { type: 'https://picsum.photos/id/23/200/100' },
        { type: 'https://picsum.photos/id/24/200/100' },
        { type: 'https://picsum.photos/id/25/200/100' },
      ],
    },
  },
  {
    questionId: 'question14',
    question: '집의 종류가 무엇인가요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId14',
      ans: [
        { type: '원룸', val: false, redType: false },
        { type: '투룸', val: false, redType: false },
        { type: '투룸 이상', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'question5',
    question: '집의 구조가 어떠한가요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: '',
    description: null,
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answer5',
      ans: [
        { type: '오픈형', val: false, redType: false },
        { type: '분리형', val: false, redType: false },
        { type: '복층', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'question16',
    question: '집의 평수는 얼마인가요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'B',
    answer: {
      answerId: 'answerId16',
      ans: [{ type: '', description: '평' }],
    },
  },
  {
    questionId: 'question17',
    question: '계약의 형태가 어떠한가요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'A',
    answer: {
      answerId: 'answerId17',
      ans: [
        { type: '월세', val: false, redType: false },
        { type: '전세', val: false, redType: false },
      ],
    },
  },
  {
    questionId: 'question18',
    question: '보증금과 월세를 확인하세요',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'B',
    answer: {
      answerId: 'answerId18',
      ans: [{ type: '', description: '만원' }],
    },
  },
  {
    questionId: 'question19',
    question: '관리비는 얼마인가요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'B',
    answer: {
      answerId: 'answerId19',
      ans: [{ type: '', description: '만원' }],
    },
  },
  {
    questionId: 'question110',
    question: '관리비에 포함되는 항목에는 어떤 것이 있나요?',
    mainCategory: '기본 정보',
    subCategory: null,
    deleted: true,
    rule: null,
    description: null,
    emoji: ':)',
    type: 'D',
    answer: {
      answerId: 'answerId110',
      ans: [
        {
          type: '수도',
          val: false,
        },
        {
          type: '인터넷',
          val: false,
        },
        {
          type: 'Tv',
          val: false,
        },
        {
          type: '전기',
          val: false,
        },
        {
          type: '가스',
          val: false,
        },
      ],
    },
  },
];

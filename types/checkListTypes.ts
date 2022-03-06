export interface answerButtonOfType {
  val: boolean;
  redType?: boolean;
  type: string;
}

export interface answerOfType {
  answer: {
    answerId: string;
    ans: Array<answerButtonOfType>;
  };
}

export interface checkList extends answerOfType {
  subCategory: string | null;
  questionId: string;
  question: string;
  emoji: string;
  mainCategory: string | null;
  rule: string | null;
  description: string;
  type: 'A' | 'B' | 'C' | 'D';
}

export interface answerButtonOfType {
  val?: boolean;
  redType?: boolean;
  description?: string;
  type: string;
}

export interface answerOfType {
  answer: {
    answerId: string;
    ans: Array<answerButtonOfType>;
  };
}

export interface checkListTypes extends answerOfType {
  subCategory: string | null;
  questionId: string;
  question: string;
  checked?: boolean;
  deleted?: boolean;
  emoji: string;
  mainCategory: string | null;
  rule: string | null;
  description: string | null;
  type: 'A' | 'B' | 'C' | 'D' | 'M';
}

export interface myItemElementType {
  checked: boolean;
  content: string;
  questionId: string;
}

export interface myItemType {
  categoryName: string;
  categoryId: string;
  question: myItemElementType[];
}

export interface myItemClickHandlerType {
  myItem: myItemType;
  myItemElement: myItemElementType;
}

export interface myItemElementHandlerType {
  onChangedQuestionElement: string;
  clickedMyItemElements: myItemElementType;
}

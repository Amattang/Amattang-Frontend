export interface answerButtonOfType {
  val?: boolean;
  redType?: boolean;
  description?: string;
  type: string;
}

export interface answerOfType {
  answer: Array<answerButtonOfType>;
}

export interface checkListTypes extends answerOfType {
  subCategory: string | null;
  questionId: string;
  question: string;
  checked?: boolean;
  visibility: boolean;
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
  categoryId: string | null;
  question: myItemElementType[];
}

export interface myItemClickHandlerType {
  myItem: myItemType;
  myItemElement: myItemElementType;
}

export interface myItemElementHandlerType {
  onChangedQuestionElement: string;
  clickedMyItemElement: myItemElementType;
}

export interface deletedCheckListByServerType {
  question: deletedCheckListQuestionByServerType[];
}

export interface deletedCheckListQuestionByServerType {
  id: number;
  visibility: boolean;
}

export interface choseCheckLIstByServerType {
  typeA?: answerButtonOfType[];
  typeB?: answerButtonOfType[];
  typeC?: answerButtonOfType[];
  typeD?: answerButtonOfType[];
  typeM?: answerButtonOfType[];
}

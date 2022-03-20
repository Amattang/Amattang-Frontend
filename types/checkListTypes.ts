export interface answerButtonType {
  val?: boolean;
  redType?: boolean;
  description?: string;
  type?: string;
}

export interface answerListType {
  answer: answerButtonType[];
}

export interface checkListTypes extends answerListType {
  subCategory: string | null;
  questionId: number;
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
  questionId?: string;
}

export interface myItemType {
  categoryName: string;
  categoryId?: string | null;
  questions: myItemElementType[];
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
  questionId: number;
  visibility: boolean;
}

export interface choseCheckListByServerType {
  typeA?: choseCheckListItemByServerType[];
  typeB?: choseCheckListItemByServerType[];
  typeD?: choseCheckListItemByServerType[];
  typeM?: choseCheckListItemByServerType[];
}

export interface choseCheckListItemByServerType extends answerListType {
  questionId: number;
}

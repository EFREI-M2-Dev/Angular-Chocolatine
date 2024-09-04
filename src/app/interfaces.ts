export interface Question {
  question: string;
  answers: Answer[];
}

export interface Answer {
  answer: string;
  correct: boolean;
  locked: boolean;
}

export interface User {
  id: number;
  username: string;
  password: string;
}

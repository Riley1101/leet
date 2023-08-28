export class Quiz {
  yes: Quiz | null;
  no: Quiz | null;
  question: string;
  constructor(que: string) {
    this.question = que;
    this.yes = null;
    this.no = null;
  }
}

export type Type = "yes" | "no";
export class FAQ {
  root: Quiz | null;
  constructor() {
    this.root = null;
  }

  private _addNewQuiz(
    quiz: Quiz,
    type: Type,
    parent: Quiz | null | undefined,
  ): Quiz | undefined {
    console.log(quiz,parent,type);
    if (!parent) return;
    if (type === "yes") {
      if (parent.yes === null) {
        parent.yes = quiz;
        return quiz;
      } else {
        return this._addNewQuiz(quiz, type, parent.yes);
      }
    } else {
      if (parent.no === null) {
        parent.no = quiz;
        return quiz;
      } else {
        return this._addNewQuiz(quiz, type, parent.no);
      }
    }
  }

  addQuiz(question: string, type: Type) {
    let newQuiz = new Quiz(question);
    if (!this.root) {
      this.root = newQuiz;
    } else {
      if (type === "yes") {
        this._addNewQuiz(newQuiz, type, this.root);
      } else {
        this._addNewQuiz(newQuiz, type, this.root);
      }
    }
  }
}

let faq = new FAQ();

faq.addQuiz("Did is root", "yes");
faq.addQuiz("Did is yes", "yes");
faq.addQuiz("Did is no", "no");
faq.addQuiz("Did is second", "no");
faq.addQuiz("Did is secondyes", "yes");

console.log(faq);

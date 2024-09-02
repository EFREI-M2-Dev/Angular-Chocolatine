import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor() { }

  questions = [
    {
      question: 'Quelle faction dans Azur Lane est connue pour ses navires de guerre puissants et résistants ?',
      answers: [
        { answer: 'Iron Blood', correct: true, locked: false },
        { answer: 'Royal Navy', correct: false, locked: false },
        { answer: 'Sakura Empire', correct: false, locked: false },
        { answer: 'Eagle Union', correct: false, locked: false }
      ]
    },
    {
      question: 'Quel navire est considéré comme le porte-avions légendaire de l\'Eagle Union ?',
      answers: [
        { answer: 'Enterprise', correct: true, locked: false },
        { answer: 'Essex', correct: false, locked: false },
        { answer: 'Yorktown', correct: false, locked: false },
        { answer: 'Lexington', correct: false, locked: false }
      ]
    },
    {
      question: 'Quelle faction est représentée par des navires aux thèmes inspirés de l\'Asie de l\'Est ?',
      answers: [
        { answer: 'Sakura Empire', correct: true, locked: false },
        { answer: 'Iron Blood', correct: false, locked: false },
        { answer: 'Royal Navy', correct: false, locked: false },
        { answer: 'Eagle Union', correct: false, locked: false }
      ]
    },
    {
      question: 'Quelle est la classe de navires à laquelle appartient le navire "Bismarck" ?',
      answers: [
        { answer: 'Cuirassé', correct: true, locked: false },
        { answer: 'Destroyer', correct: false, locked: false },
        { answer: 'Croiseur', correct: false, locked: false },
        { answer: 'Sous-marin', correct: false, locked: false }
      ]
    },
    {
      question: 'Quel navire est le chef de file du Royal Navy dans Azur Lane ?',
      answers: [
        { answer: 'Queen Elizabeth', correct: true, locked: false },
        { answer: 'Hood', correct: false, locked: false },
        { answer: 'Warspite', correct: false, locked: false },
        { answer: 'Prince of Wales', correct: false, locked: false }
      ]
    },
    {
      question: 'Quelle faction est connue pour utiliser des technologies avancées et mystérieuses ?',
      answers: [
        { answer: 'Iron Blood', correct: true, locked: false },
        { answer: 'Eagle Union', correct: false, locked: false },
        { answer: 'Royal Navy', correct: false, locked: false },
        { answer: 'Sakura Empire', correct: false, locked: false }
      ]
    },
    {
      question: 'Quel navire est souvent appelé "Gray Ghost" dans l\'univers d\'Azur Lane ?',
      answers: [
        { answer: 'Enterprise', correct: true, locked: false },
        { answer: 'Belfast', correct: false, locked: false },
        { answer: 'Akagi', correct: false, locked: false },
        { answer: 'Tirpitz', correct: false, locked: false }
      ]
    },
    {
      question: 'Quel est le type de navire le plus rapide dans le jeu Azur Lane ?',
      answers: [
        { answer: 'Destroyer', correct: true, locked: false },
        { answer: 'Croiseur léger', correct: false, locked: false },
        { answer: 'Cuirassé', correct: false, locked: false },
        { answer: 'Porte-avions', correct: false, locked: false }
      ]
    },
    {
      question: 'Quelle faction a un style de combat qui privilégie l\'attaque rapide et la mobilité ?',
      answers: [
        { answer: 'Sakura Empire', correct: true, locked: false },
        { answer: 'Royal Navy', correct: false, locked: false },
        { answer: 'Eagle Union', correct: false, locked: false },
        { answer: 'Iron Blood', correct: false, locked: false }
      ]
    },
    {
      question: 'Quel navire est célèbre pour avoir participé à la bataille du détroit de Surigao ?',
      answers: [
        { answer: 'Yamashiro', correct: true, locked: false },
        { answer: 'Fusou', correct: false, locked: false },
        { answer: 'Musashi', correct: false, locked: false },
        { answer: 'Nagato', correct: false, locked: false }
      ]
    }
  ];

  score = 0;
}

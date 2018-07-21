
export class CounterService {

  constructor() { }
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  increaseATI(number: number) {
    this.activeToInactiveCount = this.activeToInactiveCount + number;
  }

  increaseITA(number: number) {
    this.inactiveToActiveCount = this.inactiveToActiveCount + number;
  }
}

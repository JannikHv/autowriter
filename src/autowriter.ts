import { asyncTimeout } from './utils/async-timeout';

export class Autowriter {
  private queue: Array<Function> = [];

  constructor(private root: HTMLElement) { }

  private getText(): string {
    return this.root.textContent;
  }

  private setText(text: string) {
    if (text.slice(-1) === ' ') {
      this.root.innerHTML = text.slice(0, -1) + '&nbsp;';
    } else {
      this.root.textContent = text.replace(/\u00a0/g, ' ');
    }
  }

  private appendLetter(letter: string) {
    this.setText(this.getText() + letter);
  }

  private popLetter() {
    const text: string = this.getText();

    this.setText(text.substring(0, text.length - 1));
  }

  public write(text: string, interval: number = 200): Autowriter {
    this.queue.push(async () => {
      for (const letter of text.split('')) {
        this.appendLetter(letter);

        await asyncTimeout(interval);
      }
    });

    return this;
  }

  public clear(interval: number = 75): Autowriter {
    this.queue.push(async () => {
      while (this.getText().length) {
        this.popLetter();

        await asyncTimeout(interval);
      }
    });

    return this;
  }

  public pause(time: number): Autowriter {
    this.queue.push(async () => {
      await asyncTimeout(time);
    });

    return this;
  }

  public async run(): Promise<void> {
    while (this.queue.length) {
      await this.queue.shift()();
    }
  }
}

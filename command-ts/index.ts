/**
 * 命令模式在TypeScript代码中很常见。
 * 大部分情况下，它都被用于代替包含行为的参数化UI元素的回调函数
 * 此外，还被用于对任务进行排序和记录操作历史
 */

/**
 * 命令模式可以通过抽象或接口类型 （发送者） 中的行为方法来识别， 该类型调用另一个不同的抽象或接口类型 （接收者） 实现中的方法， 该实现则是在创建时由命令模式的实现封装。
 * 命令类通常仅限于一些特殊行为。
 */

/**
 * The Command interface declares a method for executing a command
 */
interface Command {
  execute(): void;
}

/**
 * Some commands can implement simple operations on their own
 */
class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): void {
    console.log(
      `SimpleCommand: See, I can do simple things like printing (${this.payload})`
    );
  }
}

/**
 * However, some commands can delegate more complex operations to other objects,
 * called "receiver"
 */
class ComplexCommand implements Command {
  private receiver: Receiver;

  private a: string;
  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): void {
    console.log(
      "ComplexCommand: Complex stuff should be done by a receiver object."
    );
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}

/**
 * The Receiver classes contain some important business logic.
 */
class Receiver {
  public doSomething(a: string): void {
    console.log(`Receiver: Working on (${a}.)`);
  }

  public doSomethingElse(b: string): void {
    console.log(`Receiver: Also working on (${b}.)`);
  }
}

/**
 * The Invoker is associated with one or several commands.
 */
class Invoker {
  private onStart: Command | null;
  private onFinish: Command | null;

  constructor() {
    this.onStart = null;
    this.onFinish = null;
  }

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  /**
   * The Invoker does not depend on concrete command or receiver classes.
   * The Invoker passes a request to a receiver indirectly, by executing a command.
   */
  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log("Invoker: ...doing something really important...");

    console.log("Invoker: Does anybody want something done after I finish?");
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}

/**
 * The client code can parameterize an invoker with any command
 */
const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand("Say Hi!"));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, "Snd email", "Save report"));

invoker.doSomethingImportant();

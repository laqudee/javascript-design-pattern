/**
 * 单例模式
 */
class Singleton {
  private static instance: Singleton;

  private count: number;

  private constructor() {
    this.count = 0;
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }

  /**
   * Finally, any singleton should define some business logic
   */
  public addCount(count: number) {
    this.count += count;
    console.log(`current count: ${this.count}`);
  }
}

function clientCode() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }

  s1.addCount(1);
  s2.addCount(1);
}

clientCode();

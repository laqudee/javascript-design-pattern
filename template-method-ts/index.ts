/**
 * 模板方法模式
 * 在TS框架中很常见，开发者通常使用之向用户提供通过继承实现的、对标准功能进行扩展的简单方式
 */

/**
 * The Abstract Class defines a template method
 */
abstract class AbstractClass {
  /**
   * The template method defines the skeleton of an algorithm.
   */
  public templateMethod(): void {
    this.baseOperation1();
    this.requiredOperations1();
    this.baseOperation2();
    this.hook1();
    this.requiredOperation2();
    this.baseOperation3();
    this.hook2();
  }

  /**
   * These operations already have implementations
   */
  protected baseOperation1(): void {
    console.log("AbstractClass says: I am doing the bulk of the work");
  }

  protected baseOperation2(): void {
    console.log(
      "AbstractClass says: But I let subclasses override some operations"
    );
  }

  protected baseOperation3(): void {
    console.log(
      "AbstractClass says: But I am doing the bulk of the work anyway"
    );
  }

  /**
   * These operations have to be implemented in subclasses.
   */
  protected abstract requiredOperations1(): void;

  protected abstract requiredOperation2(): void;

  /**
   * These are "hook"
   */
  protected hook1(): void {}

  protected hook2(): void {}
}

class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass1 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass1 says: Implemented Operation2");
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): void {
    console.log("ConcreteClass2 says: Implemented Operation1");
  }

  protected requiredOperation2(): void {
    console.log("ConcreteClass2 says: Implemented Operation2");
  }

  protected hook1(): void {
    console.log("ConcreteClass 2 says: Overridden Hook1");
  }
}

/**
 * client code
 */
function clientCodeTemplate(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log("Same client code can work with different subclasses:");
clientCodeTemplate(new ConcreteClass1());
console.log("");

console.log("Same client code can work with different subclasses:");
clientCodeTemplate(new ConcreteClass2());

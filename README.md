# JavaScript Design Pattern

## 设计模式是什么？

- 模式并不是一段特定的代码，而是解决特定问题的一般性概念

- 算法：提供达成目标的明确步骤
- 模式：可以看到最终的结果和模式的功能，但需要自己确定实现步骤

- 模式的描述：
  - 意图，简单描述问题和解决方法
  - 动机，将进一步解释问题并说明模式会如何提供解决方法
  - 结构，模式每个部分和它们之间的关系
  - 在不同语言中的实现

- 设计模式是针对软件设计中常见问题的工具箱

- 设计模式定义了一种让团队成员能够更高效沟通的通用语言

- 惯用技巧：最基础的、底层的模式
- 构架模式：最通用的、高层的模式

- 创建型模式：提供创建对象的机制
- 结构型模式：介绍如何将对象和类组装成较大的结构
- 行为模式：负责对象间的高效沟通和职责委派

## 面向对象程序设计

- 一种范式，其理念是将数据块及数据相关的行为封装成特殊的、名为对象的实体，同时对象实体的生成工作则是基于程序员给出的一系列蓝图，这些蓝图就是类

- 对象是类的某一个实例

- 成员变量
- 方法
- 状态

- 类的层次关系
  - 基类
  - 超类
  - 子类

- UML：以空心箭头为顶端指向超类：继承
- UML：普通箭头表示某个类基于另外的类
- UML：空心三角箭头和虚线代表类实现了接口
- UML：普通虚线箭头，表示依赖关系
- UML：普通实线箭头表示关联关系
- UML：空心菱形为末端指向普通实现箭头为顶端表示聚合关系
- UML：一段为实心菱形，另一端为实线普通箭头，表示组合关系

- 面向对象程序设计：
  - 抽象，是一种反映真实世界对象或现象中特定内容的模型，它能高精度地反映所有与特定内容相关的详细信息，同时忽略其他内容
  - 多态，抽象类，该类不提供具体实现，由子类自行提供该方法【是指程序能够检测对象所属的实际类，并在当前上下文不知道其真是类型的情况下第哦啊用其实现的能力】
  - 封装，是指一个对象对其他对象隐藏其部分状态和行为，而仅向程序其他部分暴露有限的接口的能力。interface protocol
  - 继承，根据已有类创建新类的能力
  - 依赖，是类之间最基础的、也是最微弱的关系类型【通过让代码依赖接口或者抽象类，可以降低依赖程度】
  - 关联，是一个对象使用另一个对象或另一个对象进行交互的关系【一个对象总是拥有访问与其交互的对象的权限】
  - 聚合，用于表示多个对象之间的“一对多”，“多对一”，“多对多”的关系【通常扮演容器的角色，组件可以独立于容器存在，也可以同时连接多个容器】
  - 组合，其中一个对象由一个或多个其他对象实例构成【组合与其他关系的区别在于组件仅能作为容器的一部分存在】

- interface表示对象的公有部分
- 接口只拥有方法

- 一个子类只有一个父类，但可以实现多个接口

- 依赖：对类B进行修改会影响到类A
- 关联：对象A知道对象B，类A依赖类B
- 聚合：对象A知道对象B，且有B构成。类A依赖与类B
- 组合：对象A知道对象B，由B构成且管理B的声明周期
- 实现：类A定义的方法由接口B声明，对象A可视为对象B。类A依赖于类B
- 继承：类A继承类B的接口和实现，但是可以对其进行扩展。对象A可视为对象B。类A依赖于B

## 软件设计原则

### 优秀设计的特征

1. 代码复用
  - 在最底层，可以复用类库、容器、容器和迭代器
  - 框架
  - 中间层【设计模式比框架更小更抽象，是对一组类的关系及其互动方式的描述】

  - 中间层的优点：在于模式提供的复用方式要比框架的风险小

2. 扩展性
   - 变化是程序员生命中唯一不变的事情

### 设计原则

1. 封装变化的内容
   - 方法层面的封装
   - 类层面的封装

2. 面向接口进行开发，而不是面向实现
   - 依赖于抽象类型而不是具体类型
   - 示例：
       1. 确定一个对象对另一个对象的确切需求：它需要执行哪些方法？
       2. 在一个新的接口或抽象类中描述这些方法
       3. 让被依赖的类实现该接口
       4. 现在让有需求的类依赖于这个接口，而不是依赖于具体的类

   - 多态机制能帮助简化代码

3. 组合优于继承
   - 子类不能减少超类的接口
   - 继承打破了超类的封装
   - 子类与超类紧密耦合
   - 组合是代替继承的一种方式

### SOLID原则

- 单一职责原则
- 开闭原则：对于扩展，类应该是开放的，对于修改，类则应该是封闭的
- 里氏替换原则
  - 子类方法的参数类型必须与其超类的参数类型相匹配或更加抽象
  - 子类方法的返回值类型必须与超类方法的返回值类型或是其子类型相匹配
  - 子类的方法不应抛出基础方法预期之外的异常类型
  - 子类不应该加强其前置条件
  - 子类不能削弱其后置条件
  - 超类的不变量必须保留
  - 子类不能修改超类中私有成员变量的值
- 接口隔离原则，客户端不应该被强迫依赖于其不使用的方法
- 依赖倒置原则
  - 高层次的类不应该依赖于低层次的类。二者都应该依赖于抽象接口
  - 抽象接口不应该依赖于具体实现
  - 具体实现应该依赖于抽象接口

## 创建型模式

- 创建型模式提供了创建对象的机制，提高已有代码的灵活性和可复用性

1. 工厂方法，在父类中提供一个创建对象的接口以允许子类决定实例化对象的类型
2. 抽象工厂，能创建一系列相关的对象，而无需指定其具体类型
3. 生成器，能够分步骤创建复杂对象。该模式允许使用相同的创建代码生成不同类型和形式的对象
4. 原型，能够复制已有对象，而无需使代码依赖它们所属的类
5. 单例，保证一个类只有一个实例，提供一个访问该实例的全局节点

### 工厂方法

- 适用场景
  1. 当你在编写代码的过程中，无法预知对象确切类别及其依赖关系时，可使用工厂方法
  2. 如果希望用户能扩展软件库或者框架的内部组件，可使用工厂方法
  3. 如果你希望复用现有对象来节省系统资源，而不是每次都重新创建对象，可使用工厂方法

- 优点
  1. 避免创建者和具体产品之间的紧密耦合
  2. 单一职责
  3. 开闭原则

- 初期使用工厂方法模式，随后烟花为使用抽象工厂模式、原型模式、生成器模式

- 抽象工厂模式通常基于一组工厂方法， 但你也可以使用原型模式来生成这些类的方法

- 可以同时使用工厂方法和迭代器模式来让之类集合返回不同类型的迭代器

- 原型并不是基于继承

- 工厂方法基于继承，但不需要初始化步骤

- 工厂方法是模板方法的一种特殊形式

## 创建型模式

### 抽象工厂模式

- 抽象工厂模式是一种创建型模式，能创建一系列相关的对象，而无需指定其具体类

- 抽象工厂模式建议为系列中的每件产品明确声明接口，然后确保所有产品变体都继承这些接口

- 抽象工厂——包含系列中所有产品构造方法的接口。这些方法返回抽象产品类型

- 抽象工厂接口创建不同的工厂类。每个工厂类只能返回特定类型的产品

- 应用程序会在初始阶段创建具体工厂对象，在此之前，应用程序必须根据配置文件或者环境设定选择工厂类别

- 角色：
  - 抽象工厂 --> 创建各种抽象产品
  - 具体工厂 --> 实现抽象工厂的构建方法。每个具体工厂都对应特定产品变体，且仅创建此种产品变体
  - 抽象产品
  - 具体产品

- 适用场景
  1. 如果代码需要与多个不同系列的相关产品交互，但是由于无法提前获取相关信息，或者处于对未来扩展性的考虑，不希望代码基于产品的具体类进行构建。
  2. 如果有有一个基于一组抽象方法的类，且其主要功能因此变得不明确，那么这种情况下可以考虑使用抽象工厂

- 生成器重点关注如何分布生成复杂对象。抽象工厂专门用于生产一系列相关对象
  - 抽象工厂会马上返回产品；生成器则允许你在获取产品前执行一些额外构造步骤

- 抽象工厂、生成器、原型都可以用单例模式来实现

### 工厂模式比较

- 工厂
- 构建方法：创建对象的方法。每个工厂方法模式的结果都是构建方法
- 静态构建（或工厂）方法：是被声明为static的构建方法。无需创建对象就能在某个类上调用该方法
- 简单工厂：描述了一个类，它拥有一个包含大量条件语句的构建方法，可根据方法的参数来选择对何种产品进行初始化并将其返回
- 工厂方法：是一种创建型设计模式，其在父类中提供一个创建对象的方法，允许子类决定实例化对象的类型
- 抽象工厂：是一种创建型设计模式，能创建一系列相关或相互依赖的对象，而无需指定其具体类

- 工厂是一个含义模糊的术语，表示可以创建一些东西的函数、方法、类等

- 构建方法只是构造函数调用的装饰器

- 当静态构建方法返回一个新对象时，它就成了构建函数的替代品

## 创建型模式

### 生成器模式

- 分步骤创建复杂对象。允许使用相同的创建代码生成不同类型和形式的对象。

- 生成器模式建议将对象构建代码从产品类中抽取出来，并将其放在一个名为生成器的独立对象中

- 主管类可定义创建步骤的执行顺序，而生成器则提供这些步骤的实现

1. 生成器Builder，接口声明在所有类型生成器中通用的产品构造步骤
2. 具体生成器Concrete Builder，提供构造过程的不同实现
3. 产品Products，是最终生成的对象
4. 主管Director类，定义调用构造步骤的顺序
5. 客户端Client，必须将某个生成器与主管类关联

- 生成器模式适合应用场景
  1. 使用生成器模式避免“重叠构造函数”的出现
  2. 当你希望使用代码创建不同形式的产品时，可使用生成器模式
  3. 使用生成器构造组合树或其他复杂对象

- 实现方法：
  1. 清晰地定义通用步骤，确保它们可以制造所有形式的产品
  2. 在基本生成器接口中声明这些步骤
  3. 为每个形式的产品创建具体生成器类，并实现其构造步骤
  4. 考虑创建主管类
  5. 客户端代码会同事创建生成器和主管对象
  6. 只有在所有产品都遵循相同接口的情况下，构造结果可以直接通过主管类获取

- 生成器重点关注如何分步生成复杂对象，在获取产品前执行一些额外构造步骤
- 抽象工厂专门用于生产一系列相关对象，会马上返回产品

- 生成器和桥接模式：主管类负责抽象工作，各种不同的生成器负责实现工作

### 原型模式

- 是一种创建型模式，能够复制已有对象，而又无需依赖它们所属的类

- 原型模式将克隆过程委派给被克隆的实际对象。模式为所有支持克隆的对象声明了一个通用接口，该接口能让你能够克隆对象。同时又无需将代码和对象所属类耦合。

- 支持克隆的对象即为原型

- 运作方式：创建一系列不同类型的对象并以不同的方式对其进行配置。如果所需对象与预先配置的对象相同，那么只需要克隆原型即可，无需新建一个对象

- 基本实现：
  1. 原型接口将对克隆方法进行声明。在绝大数情况下，其中只会有一个名为clone的方法
  2. 具体原型类将实现克隆方法
  3. 客户端可以复制实现了原型接口的任何对象

- 原型注册表的实现

- 适用场景：
  1. 如果需要复制一些对象，同时又希望代码独立于这些对象所属的具体类，可以使用原型模式
  2. 如果之类的区别仅在于其对象的初始化方式，那么你可以使用该模式来减少子类的数量

- 实现方式：
  1. 创建原型接口，并在其中声明克隆方法。
  2. 原型类必须另行定义一个以该类对象为参数的构造函数。构造函数必须复制参数对象中的所有成员变量值到新建实体中。
  3. 克隆方法通常只有一行代码：使用new运算符调用原型版本的构造函数
  4. 还可以创建一个中心化原型注册表，用来存储常用原型

- 原型可用于保存命令模式的历史记录
- 原型并不是基于继承，因此没有继承的缺点。但原型需要对被复制对象进行复杂的初始化。工厂方法基于继承，不需要初始化

- 抽象工厂、生成器、原型都可以用单例模式来实现

### 单例模式

- 能够保证一个类只有一个实例，并提供一个访问该实例的全局节点

- 单例同时解决了两个问题，所违反了单一职责原则
  1. 保证一个类只有一个实例
  2. 为该实例提供一个全局访问节点

- 解决方案：
  1. 将默认构造函数设为私有，防止其他对象使用单例类的new运算符
  2. 新建一个静态构建方法作为构造函数。该函数偷偷调用私有构造函数来创建对象，并将其保存在一个静态成员变量中。此后所有对于该函数的调用都将返回这一缓存对象

- 单列类声明了一个名为getInstance()的静态方法来返回其所属类的一个相同实例

- 适用场景
  1. 如果程序中的某个类对于所有客户端自由一个可用的实例，可以使用单例模式
  2. 如果需要更加严格地控制全局变量，可以使用单例模式Vue， Vuex， Vue-Router

- 外观模式类通常可以转换为单例模式
- 享元模式vs.单例
  1. 只会有一个单例实体，但是享元类可以有多个实体，个实体的内在状态也可以不同
  2. 单例对象可以是可变的。享元对象是不可变的

## 结构型模式

> 如何将对象和类组装成较大的结构，并同时保持结构的灵活和高效

- 适配器，让接口不兼容的对象能够相互合作
- 桥接模式，将一个大类或一系列紧密相关的类拆分为抽象和实现两个独立的层次结构
- 组合，可以使用它将对象组合成树状结构，并且能像使用独立对象一样使用它们
- 装饰，通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为
- 外观，能为程序库、框架或其他复杂类提供一个简单的接口
- 享元模式，摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，让你能在有限的内存容量中载入更多对象
- 代理，能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进行一些处理

### 适配器模式

- 让接口不兼容的对象能够相互合作

- 适配器：一个特殊的对象，能够转换对象接口，使其能与其他对象进行交互

- 运作方式：
  1. 适配器实现与其中一个现有对象兼容的接口
  2. 现有对象可以使用该接口安全地调用适配器方式
  3. 适配器方法被调用将以另一个对象兼容的格式和顺序将请求传递给改对象

1. 客户端是包含当前程序业务逻辑的类
2. 客户端接口描述了其他类与客户端代码合作时必须遵守的协议
3. 适配器
4. 客户端只需要通过接口与适配器交互即可，无需与具体的适配器类耦合

- 类适配器不需要封装任何对象，因为它同时继承了客户端和服务的行为。

- 实现方式：
  1. 确保至少有两个类的接口不兼容
     1. 一个无法修改的功能性服务类
     2. 一个多个将受益于使用服务类的客户端类
  2. 声明客户端接口，描述客户端如何与服务交互
  3. 创建遵循客户端接口的适配器类
  4. 在适配器类中添加一个成员变量用于保存对于服务对象的引用
  5. 依次实现适配器类客户端接口的所有方法
  6. 客户端必须通过客户端接口使用适配器

- 适配器可以对已有对象的接口进行修改，装饰模式则能在不改变对象接口的前提下强化对象功能
- 适配器能为被封装对象提供不同的接口，代理模式能为对象提供相同的接口，装饰则能为对象提供加强的接口
- 外观模式为现有对象定义了一个新接口，适配器则会试图已有的接口。

### 桥接模式

- 可将一个大类或一系列紧密相关的类拆分为抽象和实现连个独立的层次结构，从而能在开发时分别使用

- 桥接模式通过将继承改为组合的方式来解决多个维度类继承问题
  - 抽取其中一个维度并使之成为独立的类层次，这样就可以在初始类中引入这个新层次的对象，从而使得一个类不必拥有所有的状态和行为

- 将一个类层次转化为多个相关的类层次，避免单个类层次的失控

- 抽象部分：接口，是一些实体的高阶控制层——程序的GUI层
- 实现部分：实现——操作系统的API

- 桥接模式的结构：
  1. 抽象部分，提供高层控制逻辑，依赖于完成底层实际工作的实现对象
  2. 实现部分，为所有具体实现声明通用接口
  3. 具体实现
  4. 精确抽象，提供控制逻辑的变体
  5. 客户端

- 桥接模式适合应用场景
  1. 如果想要拆分或重组一个具有多重功能的庞杂类，可以使用桥接模式
  2. 如果希望在几个独立维度上扩展一个类，可使用该模式
  3. 如果需要在运行时切换不同实现方法，可使用桥接模式

- 实现方式：
  1. 明确类中独立的维度。独立的概念可能是：抽象/平台，前端/后端或接口/实现
  2. 了解客户端的业务需求，并在抽象类中定义它们
  3. 确定在所有平台上都可执行的业务
  4. 为所有平台创建实现类
  5. 在抽象类中添加指向实现类的引用成员变量

- 桥接、状态模式、策略模式实际上都是基于组合模式

### 组合模式

- 可以使用它将对象组合成树状结构，并且能像使用独立对象一样使用它们

- 如果应用的核心模型能用树状结构表示，在应用中使用组合模型才有价值

- 组合模式建议使用一个通用接口来与产品和盒子进行交互，并且在该接口中声明一个计算总价的方法

- 组合模式以递归方式处理对象树中的所有项目

- 组合模式解构
  1. 组件接口描述了树中简单项目和辅助器项目所共有的操作
  2. 叶节点是树的基本结构，不包含子项目
  3. 容器，又名组合，是包含或其他容器等子项目的单位
  4. 客户端，通过接口与所有项目交互

- 适用场景：
  1. 如果需要实现树状对象结构，可以使用组合模式
  2. 如果希望客户端代码以相同方式处理简单和复杂元素，可以使用该模式

- 实现方式：
  1. 确保应用的核心模型能够以树状结构表示。尝试将其分解为简单元素和容器‘
  2. 声明组件接口及其一系列方法
  3. 创建一个叶节点类表示简单元素
  4. 创建容器类表示复杂元素
  5. 最后，在容器中定义添加和删除子元素的方法

- 可以创建复杂组合树时使用生成器模式
- 责任链模式通常和组合模式结合使用
- 可以使用迭代器模式来遍历组合树
- 可以使用访问器模式对整个组合树执行操作
- 可以使用享元模式实现组合树的共享节点来节省内存


### 装饰模式

- 通过将对象放入包含行为的特殊封装对象中来为原对象绑定新的行为

- 当你需要更改一个对象的行为时，扩展它所属的类
- 使用聚合或组合，而不是继承

- 封装器是装饰模式的别称，封装器是一个能与其他目标对象连接的对象
- 封装器实现了与其封装对象相同的接口

- 装饰模式结构
  1. 部件，声明封装器和被封装对象的公用接口
  2. 具体部件类，是被封装对象所属的类。它定义了基础行为
  3. 基础装饰类，拥有一个指向被封装对象的引用成员变量
  4. 具体装饰类，定义了可动态添加到部件的额外行为
  5. 客户端，可使用多层装饰来封装部件

- 适用场景：
  1. 如果希望在无需修改代码的情况下即可使用对象，且在运行时为对象新增额外的行为
  2. 如果用继承来扩展对象行为的方案难以实现或者根本不可行

- 实现方式：
  1. 确保业务逻辑可用一个基本组件及多个额外可选层次表示
  2. 找出基本组件和可选层次的通用方法。创建一个组件接口并在其阿红声明这些方法
  3. 创建一个具体组件类，并定义其基础行为
  4. 创建装饰基类
  5. 确保所有类实现组件接口
  6. 将装饰基类扩展为具体装饰
  7. 客户端负责创建装饰并将其组合成客户端所需的形式

## 结构型设计模式

### 外观模式

- 能为程序库、框架、其他复杂类提供一个简单的接口

- 结构：
  1. 外观提供了一种访问特定子系统功能的便捷方式，其了解如何重定向客户端请求，知晓如何操作一切活动部件
  2. 创建附加外观类可以避免多种不相关的功能污染单一外观，使其变成又一个复杂结构。客户端和其他外观都就可以使用附加外观
  3. 复杂子系统
  4. 客户端，使用外观替代对子系统对象的直接调用

- 适用场景
  1. 如果需要一个指向复杂子系统的直接接口，且接口的功能有限，则可以使用外观模式
  2. 如果需要将子系统组织为多层结构，可以使用外观模式

- 实现方式
  1. 考虑能否在现有子系统的基础上提供一个更简单的接口。如果该接口能让客户端代码独立于众多子系统类
  2. 在一个新的外观类中声明并实现该接口。外观应将客户端代码的调用重定向到子系统中的相应对象处。如果客户端没有子系统进行初始化，也没有后续声明周期进行管理，那么外观必须完成此类工作
  3. 如果要充分发挥这一模式的优势，必须确保所有客户端仅通过外观与子系统进行交互
  4. 如果外观过于臃肿，可以考虑将其部分行为抽取为一个新的专用外观类

- 外观模式为现有对象定义一个新街口，适配器模式则会视图运用已有的接口。适配器通常只封装一个对象，外观通常会作为整个对象子系统上
- 当只需要对客户端隐藏子系统创建对象的方式时，可以使用抽象工厂模式来替代外观
- 享元模式展示了如何生成大量的小型对象；外观则展示了如何用一个对象来代替整个子系统

- 外观 vs. 中介者模式
  1. 外观为子系统中的所有对象定义了一个简单接口，但不提供任何新功能。子系统本身不会意识到外观的存在。子系统中的对象可以直接进行交流
  2. 中介者将系统中的组件的沟通行为中心化。个组件只知道中介对象，无法直接相互交流

- 外观类通常可以转换为单例模式类

- 外观与代理模式的相似之处在于他们都缓存了一个复杂实体并自行对其进行初始化。代理与其服务对象遵循统一接口，使得自己和服务对象可以互换

### 享元模式

- 缓存、Cache、 Flyweight

- 摒弃了在每个对象中保存所有数据的方式，通过共享多个对象所共有的相同状态，可以在有限的内存容量中载入更多对象

- 对象的常量数据通常被称为内在状态，位于对象中，其他对象只能读取但不能修改其数值。
- 而对象的其他状态常常能被其他对象“从外部”改变，因此被称为外在状态

- 享元模式建议不再对象中存储外在状态，而是将其传递给依赖于它的一个特殊方法。程序只在对象中保存内在状态，以方便在不同场景下进行重用。
- 这些对象的区别仅在于其内在状态（与外在状态相比，内在状态的变体要少很多），因此所需的对象数量会大大消减

- 更好的解决方案是创建独立的情景类来存储外在状态和堆对享元对象的引用。

- 一个享元大对象会被上千个情境小对象复用， 因此无需再重复存储数千个大对象的数据

- 享元与不变性
  - 由于享元对象可在不同的情景中使用，必须确保其状态不能被修改。享元类的状态只能由构造函数的参数进行一次性初始化，它不能对其他对象公开其设置器或公有成员变量

- 享元工厂
  - 创建一个工厂方法来管理已有享元对象的缓存池
  - 工厂方法从客户端处接收目标享元对象的内在状态作为参数， 如果它能在缓存池中找到所需享元， 则将其返回给客户端； 如果没有找到， 它就会新建一个享元， 并将其添加到缓存池中

- 结构
  1. 享元模式只是一种优化
  2. 享元类包含原始对象中部分能在多个对象中共享的状态
  3. 情景类包含原始对象中各不相同的外在状态
  4. 通常情况下， 原始对象的行为会保留在享元类中。 因此调用享元方法必须提供部分外在状态作为参数。 
  5. 客户端，负责计算或存储享元的外在状态
  6. 享元工厂，会对已有享元的缓存池进行管理

- 适合场景
  1. 仅在程序必须支持大量对象且没有足够的内存容量时使用享元模式

- 实现方式
  1. 将需要改写为享元的类成员变量拆分为两个部分：
    - 内在状态：包含不变的、可在许多对象中重复使用的数据的成员变量
    - 外在状态：包含每个对象各自不同的情景数据的成员变量
  2. 保留类中表示内在状态的成员变量，其属性为不可修改。在构造函数中获得初始数值
  3. 找到所有使用外在状态成员变量的方法， 为在方法中所用的每个成员变量新建一个参数， 并使用该参数代替成员变量
  4. 有选择地创建工厂类来管理享元缓存池
  5. 客户端必须存储和计算外在状态的数值，因为只有这样才能调用享元对象的方法

- 可以使用享元模式实现组合模式树的共享叶节点以节省内存
- 享元展示了如何生成大量的小型对象， 外观模式则展示了如何用一个对象来代表整个子系统

### 代理模式

- 能够提供对象的替代品或其占位符。代理控制着对于原对象的访问，并允许在将请求提交给对象前后进一下处理

- 代理模式建议新建一个与原服务对象接口相同的代理类，然后更新应用以将代理对象传递给所有原始对象客户端
- 代理类接收到客户端请求后会创建实际的服务对象，并将所有工作委派给它

- 代理模式结构
  1. 服务接口Service Interface声明了服务接口。代理必须遵循该接口才能伪装成服务对象
  2. 服务Service类提供了一些实用的业务逻辑
  3. 代理类，包含一个指向服务对象的引用成员
  4. 客户端，能通过同一接口与服务或代理进行交互

- 适应场景：
  1. 延迟初始化（虚拟代理）
  2. 访问控制（保护代理）
  3. 本地执行远程服务（远程代理）
  4. 记录日志请求（日志记录代理）
  5. 缓存请求结果（缓存代理）
  6. 智能引用

- 实现方式
  1. 如果没有现成的服务接口，就需要创建一个接口来实现代理和服务对象的可交换性
  2. 创建代理类，其中必须包含一个存储指向服务的引用的成员变量
  3. 根据需求实现代理方法
  4. 可以考虑新建一个构建方法来判断客户端可获取的是代理还是实际服务
  5. 可以考虑为服务对象实现延迟初始化

## 行为模式

- 行为模式负责对象间的高效沟通和职责委派

- 责任链，允许将请求沿着处理者链进行发送。收到请求后，每个处理者均可以对请求进行处理，或将其传递给链上的下一个处理者
- 命令，可将请求转换为一个包含与请求相关的所有信息的独立对象
- 迭代器，能在不暴露集合底层表现形式的情况下遍历集合中所有的元素
- 中介者，能减少对象之间混乱无序的依赖关系。该模式会限制对象之间的的直接交互，迫使通过一个中介者对象进行合作
- 备忘录，允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态
- 观察者，发布订阅模式，vue
- 状态，能在一个对象的内部状态变化时改变其行为，使其看上去像改变了自身所属的类一样
- 策略，定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换
- 模板方法，在超类中定义一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤
- 访问者，将算法与其作用的对象隔离开来

### 责任链模式

- 职责链模式、命令链、CoR、Chain of Command

- 责任链会将特定行为转换为被称为处理者的独立对象

- 处理者可以决定不再沿着链传递请求，这可高效地取消后续处理步骤

- 每个具体处理者仅关心下一个包含execute方法对的处理者。

- 结构
  1. 处理者，声明了所有具体处理者的通用接口
  2. 基础处理者，可选类
  3. 具体处理者，包含处理请求的实际代码
  4. 客户端，根据程序逻辑一次性或者动态地生成链

- 责任链适合场景
  1. 当程序需要使用不同方式处理不同种类请求，而且请求类型和顺序预先未知
  2. 当必须顺序执行多个处理者时
  3. 如果所需处理者及其顺序必须在运行时进行改变

- 责任链、命令模式、中介模式、观察者模式：
  1. 责任链按照顺序将请求动态传递给一系列的潜在接受者
  2. 命令在发送者和请求者之间建立单向连接
  3. 中介清除了发送者与请求者之间的直接连接
  4. 观察者允许接受者动态地订阅或取消接受请求

## 行为模式

### 命令模式

- 动作、事务、Action、Transaction、Command

- 可将请求转换为一个包含与请求相关的所有信息的独立对象。

- 关注点分离

- 命令对象负责连接不同的GUI和业务逻辑对象

- 所有命令实现相同的接口。该接口通常只有一个没有任何参数的执行方法，让你能在不和具体命令类耦合的情况下使用同一请求发送者执行不同命令

- 命令模式解构：
  1. 发送者Sender类，负责对请求进行初始化，其中必须包含一个成员变量来存储对于命令对象的引用。
  2. 命令接口通常声明一个执行命令的方法
  3. 具体命令，会实现各种类型的请求，具体命令自身并不完成工作
  4. 接收者类包含部分业务逻辑，几乎任何对象都可以作为接收者
  5. 客户端，会创建并配置具体命令对象

- 适合场景：
  1. 如果你需要通过操作来参数化对象
  2. 如果你想要将操作放入队列中、操作的执行或者远程执行操作
  3. 如果想要实现操作回滚功能，可使用命令模式

- 实现方式：
  1. 声明仅有一个执行方法的命令接口
  2. 抽取请求并使之成为实现命令接口的具体命令类
  3. 找到担任发送者职责的Lewis
  4. 修改发送者使用其执行命令，而非直接将请求发送给接收者
  5. 客户端必须按照一下顺序初始化对象：
    1. 创建接收者
    2. 创建命令，如果有需要可将其关联至接收者
    3. 创建发送者并将其与特定命令关联

## 行为模式

### 迭代器模式

- 能在不暴露集合底层表现形式的情况下遍历集合中所有元素

- 将集合的遍历行为抽取为单独的迭代器对象

- 多个迭代器可以在相互独立的情况下同时访问集合

- 迭代器通常会提供一个获取集合元素的基本方法

- 迭代器模式结构：
  1. 迭代器接口声明了遍历集合所需要的操作：获取下一个元素，获取当前位置和重新开始迭代
  2. 具体迭代器实现遍历集合的的一种特定算法
  3. 集合接口声明一个或多个方法获取与集合兼容的迭代器
  4. 具体集合
  5. 客户端

### 中介者模式

- Intermediary、Controller、Mediator

- 能让你减少对象之间混乱无序的依赖关系。该模式会限制对象之间的直接交互，迫使他们通过一个中介者对象进行合作

- 组件仅依赖一个中介者类，无需与多个其他组件相耦合

- 中介者模式结构：
  1. 组件是包含业务逻辑的类
  2. 中介者接口声明了与组件交流的方法，但通常仅包含一个通知方法
  3. 具体中介者封装了多种组件间的关系

- 适合应用场景：
  1. 当一些对象和其他对象紧密耦合以至于难于对其进行修改时
  2. 当组件因过于依赖其他组件而无法在不同应用中复用时，可使用中介模式
  3. 如果为了能在不同情景下服用一些基本行为，导致你需要被迫创建大量组件子类时

- 责任链模式、命令模式、中介模式、观察者模式用于处理请求发送者和接收者之间的不同连接方式：
  1. 责任链按照顺序将请求动态传递给一系列的潜在接受者
  2. 命令在发送者和请求者之间建立单向连接
  3. 中介者清除了发送者和请求者之间的直接连接，强制它们通过一个中介者进行间接沟通
  4. 观察者允许接受者动态地订阅或取消接受请求

### 备忘录模式

- Snapshot、Memento

- 允许在不暴露对象实现细节的情况下保存和恢复对象之前的状态

- 备忘录模式将创建状态快照的工作委派给实际状态的拥有者原发器对象

- 备忘录模式结构
  1. 原发器类可以生成自身状态的快照
  2. 备忘录是原发器状态的值对象
  3. 负责人仅知道何时和为何捕捉原发器的状态

- 适合应用场景：
  1. 当需要创建对象状态快照来恢复其之前的的状态时
  2. 当直接访问对象的成员变量、获取器或设置器将导致封装被突破时，可以使用该模式

### 观察者模式

- 事件订阅者、监听者、Event-Subscriber、Observer

- 发布订阅机制

- 观察者模式结构：
  1. 发布者Publisher
  2. 当新事件发生时，发送者会遍历订阅列表并调用每个订阅者对象下的通知对象
  3. 订阅者接口
  4. 具体订阅者
  5. 客户端

- 适合应用场景：
  1. 当一个对象状态的改变需要改变其他对象，或实际对象时事先未知的或动态变化的时
  2.  当应用中的一些对象必须观察其他对象时， 可使用该模式。 但仅能在有限时间内或特定情况下使用

## 行为模式

### 状态模式

- 能在一个对象的内部状态变化时改变其行为，使其看上去就像改变了自身所属的类

- 状态模式与有限状态机
  - 有限状态机：主要思想是程序在任意时刻仅可处于几种有限的状态中。
  - 这些数量有限且预先定义的状态切换规则被称为转移

- 状态模式建议为对象的所有可能状态新建一个类，然后将所有状态的对应行为抽取到这些类中

- 原始对象被称为上下文context，它并不会执行实现所有行为，而是会保存一个指向表示状态的状态对象的引用，且将所有与状态相关的工作委派给该对象

- 所有状态类都必须遵循同样的接口，而且上下文必须仅通过接口与这些对象进行交互

- 状态模式结构：
  1. 上下文保存了对于一个具体状态对象的引用
  2. 状态接口
  3. 具体状态类
  4. 上下文和具体状态都可以设置上下文的下一个状态

- 适合应用场景
  1. 如果对象需要根据自身当前状态进行不同行为，同时状态的数量非常多且与状态相关的代码会频繁变更的话
  2. 如果某个类需要根据成员变量的当前值改变自身行为， 从而需要使用大量的条件语句时， 可使用该模式。
  3. 当相似状态和基于条件的状态机转换中存在许多重复代码时，可使用状态模式

- 实现方式：
  1. 确定哪些类是上下文
  2. 声明状态接口
  3. 为每个实际状态创建一个继承状态接口的类
  4. 在上下文类中添加一个状态接口类的引用成员变量
  5. 再次检查上下文中的方法，将空的条件语句替换成相应的状态对象方法
  6. 为切换上下文状态，需要创建某个状态类实例并将其传递给上下文

### 策略模式

- 定义一系列算法，并将每种算法分别放入独立的类中，以使算法的对象能够相互替换

- 策略模式建议找出负责用许多不同方式完成特定任务的类，然后将其中的算法抽取到一组被称为策略的独立类中

- 上下文的原始类必须包含一个成员变量来存储对于每种策略的引用

- 上下文可独立于具体策略

- 策略模式结构：
  1. 上下文维护指向具体策略的引用
  2. 策略接口是所有具体策略的通用接口
  3. 具体策略实现了上下文所用算法的各种不同变体
  4. 执行方法
  5. 客户端

- 适应场景：
  1. 当想使用对象中各种不同的算法变体，并希望能在运行时切换算法
  2. 当有许多仅在某些行为时略有不同的相似类时
  3. 如果算法在上下文的逻辑中不是特别重要， 使用该模式能将类的业务逻辑与其算法实现细节隔离开来
  4. 当类中使用了复杂条件运算符以在同一算法的不同变体中切换时

- 实现方式
  1. 从上下文类中找出修改频率较高的算法
  2. 声明该算法所有变体的通用策略接口
  3. 将算法逐一抽取到各自类中，都必须实现策略接口
  4. 在上下文类中添加一个成员变量用于保存对于策略对象的引用。然后提供设置器以修改该成员变量
  5. 客户端必须将上下文类与相应策略进行关联，使上下文可以预期的方式完成其主要工作

### 模板方法模式

- 在一个超类中定义了一个算法的框架，允许子类在不修改结构的情况下重写算法的特定步骤

- 模板方法模式建议将算法分解为一系列步骤，然后将这些步骤改写为方法，最后在模板方法模式中依次调用这些方法

- 抽象步骤必须由各个子类来实现
- 可选步骤已有一些默认实现，但仍可在需要时进行重写

- 模板方法模式结构：
  1. 抽象类会声明作为算法步骤的方法
  2. 具体类可以重写所有步骤，但不能重写模板方法自身

- 适合应用场景
  1. 当只希望客户端扩展某个特定算法步骤，而不是整个算法或其结构时，可使用模板方法模式
  2. 当多个类的算法除一些细微不同之外几乎一致时，你可使用该模式。 但其后果就是， 只要算法发生变化， 你就可能需要修改所有的类。

- 实现方式
  1. 分析目标算法，确定能否将其分解为多个步骤
  2. 创建抽象基类并声明一个模板方法和代表算法步骤的一系列抽象方法。
  3. 虽然可将所有步骤全都设为抽象类型， 但默认实现可能会给部分步骤带来好处， 因为子类无需实现那些方法
  4. 可考虑在算法的关键步骤之间添加钩子
  5. 为每个算法变体新建一个具体子类，它必须实现所有的抽象步骤，也可以重写部分可选步骤

### 访问者模式

- visitor

- 能将算法与其所作用的对象隔离开来

- 访问者模式建议将新行为放入一个名为访问者的独立类中，而不是试图将其整合到已有类中。

- 双分派

- 访问者模式结构：
  1. 访问者接口声明了一系列以对象结构的具体元素为参数的访问者方法
  2. 具体访问者会为不同的具体元素实现相同行为的几个不同版本
  3. 元素接口声明一个方法来接收访问者
  4. 具体元素类
  5. 客户端

- 适合应用场景
  1. 如果需要对一个复杂对象结构中的所有元素执行某些操作，可使用访问者模式
  2. 可使用访问者模式来清理辅助行为的业务逻辑
  3. 当某个行为仅在类层次结构中的一些类中有意义，而在其他类中没有意义时，可使用该模式

- 实现方式：
  1. 在访问者接口中声明一组访问方法，分别对应程序中的每一个具体元素类
  2. 声明元素接口
  3. 在所有具体元素类中实现接收方法
  4. 元素类只能通常访问者进行交互
  5. 为每个无法在元素层次结构中实现的行为创建一个具体访问者类并实现所有的访问者方法
  6. 客户端必须创建访问者对象并通过接收方法将其传递给元素

### 访问者与双分派

- 后期/动态绑定
  - 后期，是因为在编译后和运行时才将对象与其实现绑定
  - 动态，是因为每个对象都可能需要链接到不同的实现

- 前期/静态绑定
  - 前期，是因为它发生在运行程序前编译的时候
  - 静态，是因为它无法在运行时更改

- 双分派是一个允许在重载时使用动态绑定的技巧


/// <reference path="components/project-item.ts"/>
/// <reference path="components/project-input.ts"/>
/// <reference path="components/project-list.ts"/>
namespace App {
  /**
   * Create the instance of the class to get everything working
   * since all the code is in the constructor
   */
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}

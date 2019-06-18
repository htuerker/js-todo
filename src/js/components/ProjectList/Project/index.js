export default class Project {
  constructor(title) {
    this.title = title;
  }

  render() {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project-tab";
    projectDiv.innerHTML = this.title;
    return projectDiv;
  }
}

import { Injectable } from '@angular/core';

export class Project {
  constructor(public projectName : string,
    public projectDescription: string,
    public projectPicture: string,
    public projectGithub: string) {
  }
}


@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private listProjects : Project[] = [
    {projectName : "Reservation App", projectDescription: "This project is a java spring boot backend project where users or doctors (as in different entities) can interact with each other like reserving a date for visits and such",
      projectGithub: "https://github.com/goofySunny/DocManager", projectPicture : "assets/docManager.png"},
    {projectName : "TodoManagerJSP", projectDescription: "This project is a traditional web application that relies on classic JSP and form submission methods, without employing modern front-end or back-end frameworks. It uses an H2 in-memory database for data storage and features traditional form login with preset authenticated users.",
      projectGithub: "https://github.com/goofySunny/SecondWebApp", projectPicture: "assets/secondWebApp.png"},
    {projectName : "SayanRayanTask", projectDescription : "This was a project that I was tasked with (as a test I suppose) so I could prove my skills for front-end development I had one day to do this project and unfortunately I failed but here it is for anyone interested to take a look I guess",
      projectGithub: "https://github.com/goofySunny/Task", projectPicture : "assets/Task.png"}
  ]
  constructor() { }
}

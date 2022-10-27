export class Note {
  constructor(id, name, content, dateUpdated ) {
    this.id = id;
    this.name = name;
    this.content = content;
    this.dateUpdated = dateUpdated;
    this.dateCreated = new Date();
  }
}
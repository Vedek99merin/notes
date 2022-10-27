export const idbConfig = {
    databaseName: "notes-db",
    version: 1,
    stores: [
      {
        name: "note",
        id: { keyPath: "id", autoIncrement: true },
        indices: [
          { name: "name", keyPath: "name" },
          { name: "content", keyPath: "content" },
          { name: "dateCreated", keyPath: "dateCreated" },
          { name: "dateUpdated", keyPath: "dateUpdated" },
        ],
      },
    ],
  };
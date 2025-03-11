const explorer = {
  id: 1,
  name: "abc",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "folder1",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "file1.txt",
          isFolder: false,
          items: [],
        },
        {
          id: 4,
          name: "subfolder1",
          isFolder: true,
          items: [
            {
              id: 5,
              name: "file2.txt",
              isFolder: false,
              items: [],
            },
            {
              id: 6,
              name: "file3.doc",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "folder2",
      isFolder: true,
      items: [
        {
          id: 8,
          name: "subfolder2",
          isFolder: true,
          items: [
            {
              id: 9,
              name: "file4.csv",
              isFolder: false,
              items: [],
            },
            {
              id: 10,
              name: "file5.log",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "file6.json",
      isFolder: false,
      items: [],
    },
    {
      id: 12,
      name: "folder3",
      isFolder: true,
      items: [
        {
          id: 13,
          name: "file7.xml",
          isFolder: false,
          items: [],
        },
        {
          id: 14,
          name: "subfolder3",
          isFolder: true,
          items: [
            {
              id: 15,
              name: "file8.txt",
              isFolder: false,
              items: [],
            },
            {
              id: 16,
              name: "file9.md",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};

export default explorer;

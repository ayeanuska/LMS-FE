export const bookInputes = [
  {
    label: "Title",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Dandelions",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
    placeholder: "ruth b",
  },
  {
    label: "Thumbnail",
    name: "thumbnail",
    type: "url",
    required: true,
    placeholder: "http://path-to-image.com ",
  },
  {
    label: "ISBN",
    name: "isbn",
    type: "text",
    required: true,
    placeholder: "9832KLK",
  },
  {
    label: "Genre",
    name: "genre",
    type: "text",
    required: true,
    min: "1000",
    placeholder: "GENRE",
  },
  {
    label: "Published Year",
    name: "publishedYear",
    type: "number",
    required: true,
    placeholder: "2022",
  },
  {
    label: "Description ",
    name: "description",
    type: "text",
    as: "textarea",
    maxLength: "5000",
    required: true,
    placeholder: "Book summary...",
    rows: "5",
  },
];

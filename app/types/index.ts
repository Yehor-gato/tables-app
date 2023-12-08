export enum Nationality {
  British = "British",
  American = "American",
}

export type Writer = {
  id: number;
  first_name: string;
  last_name: string;
  nationality: Nationality;
};

export type TableWriter = {
  id: number;
  name: string;
  nationality: Nationality;
  numberOfBooks: number;
};

export type Book = {
  id: number;
  author_id: number;
  title: string;
  year: number;
};

export type TableBook = {
  id: number;
  title: string;
  writerName: string;
  writerId: number;
  writerNationality: Nationality;
  year: number;
};

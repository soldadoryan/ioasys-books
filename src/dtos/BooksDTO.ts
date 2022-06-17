export type BookType = {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: number;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: number;
};

type BooksDTO = {
  data: BookType[],
  totalItems: number;
  totalPages: number;
  page: number;
}

export default BooksDTO

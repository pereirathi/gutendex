export interface IAuthor {
  name: string
  birth_year: number | null
  death_year: number | null
}

export interface Formats {
  'text/html'?: string
  'image/jpeg': string
  'application/pdf'?: string
  'application/rdf+xml': string
  'application/epub+zip'?: string
  'application/octet-stream': string
  'text/plain; charset=us-ascii'?: string
  'application/x-mobipocket-ebook'?: string
  'text/html; charset=utf-8'?: string
  'text/plain; charset=utf-8'?: string
  'application/prs.tex'?: string
  'text/html; charset=iso-8859-1'?: string
  'text/plain; charset=iso-8859-1'?: string
}

export interface IBooks {
  id: number
  title: string
  authors: IAuthor[]
  translators: IAuthor[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: unknown
  formats: Formats
  download_count: number
}

export interface IResult {
  count: number
  next: string
  previous: null
  results: IBooks[]
}

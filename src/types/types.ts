export interface Header {
  title: string;
}

export interface NavItem {
  href: string;
  text: string;
}

export interface Nav {
  navigation: NavItem[];
}

export interface Loading {
  label: string;
  loading: boolean;
}
export interface Input {
  id: string;
  label: string;
  placeholder?: string;
  name: string;
  type: string;
  value: string;
  onChange?: () => void;
}
export interface Button {
  type?: string;
  disabled?: boolean;
  label: string;
  loading?: boolean;
  onClick?: () => void;
}

export interface Error {
  label: string;
  msg: string;
}

export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  stock: number;
}

export interface BooksParams {
  pageNo: number;
  itemsPerPage?: number;
}

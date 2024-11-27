export type MenuItem = {
    title: string;
    icons: string;
    expanded: number;
    subMenu? : MenuItem[]
  }
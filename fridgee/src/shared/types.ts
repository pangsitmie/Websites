export enum SelectedPage {
  Home = "home",
  Work = "work",
  About = "about",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface Recepie {
  title: string;
  categories: string[];
  description: string;
  access_level: string;
  instructions: string;
  ingredients: string[];
  image: Image;
}
export interface Image {
  data: {
    id: string;
    attributes: {
      url: string;
      mime: string;
      width: number;
      height: number;
    };
  }
}
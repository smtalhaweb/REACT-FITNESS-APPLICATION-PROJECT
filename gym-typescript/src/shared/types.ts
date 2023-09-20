export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus"
}
export interface benefitType{
  icon: JSX.Element,
  title: string,
  description: string
}
export interface ClassType{
  name: string,
  description?: string,
  image: string
}


// ? is used to make 'description' optional when we dont want to show description in some cases
import type { LayoutLoad } from './$types';

type Experience = {
  title: string,
  companyName: string,
  location: string,
  date: string,
  shortDesc: string,
  longDesc: string,

}

const experiences: Experience[] = [
  {
    title: "Hello World",
    companyName: "Company",
    location: "Tulsa, OK",
    date: "2021 - 2022",
    shortDesc: "short",
    longDesc: "long"
  }
]

export const load: LayoutLoad = async () => {
  return { experiences: experiences }
}
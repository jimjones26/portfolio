import type { LayoutLoad } from './$types';

type Experience = {
  title: string,
  companyName?: string,
  location: string,
  date: string,
  shortDesc: string,
  longDesc: Array<object>,

}

const experiences: Experience[] = [
  {
    title: "User Experience Consultant",
    companyName: "UXFX.io",
    location: "Pagosa Springs, CO",
    date: "May 2022 - May 2023",
    shortDesc: "Researched design tokens and the integration of those tokens into different design and development tools. Also researched how to use generative AI to assist in the software development process.",
    longDesc: [
      { text: "Worked on streamlining the design system process utilizing design tokens and various tools and automated processes to create a more efficient and easier to manage workflow for companies with multiple brands in their portfolios. Focused on integrating design tokens with Figma components and exploring the best way to transform those design tokens into assets to be consumed by component libraries. Explored ways to document design systems and design tokens to allow consumers, both designers and developers, to easily reason about what a design system provides and how to properly utilize it." },
      { text: "Also worked on creating an AI assistant using large language models with vector data stores to provide context and long term memory. The initial goal is to create an assistant that would increase my productivity to the point where the time to spin up and complete new applications would be drastically reduced." }
    ]
  },
  {
    title: "Personal Goal Pursuit",
    companyName: "Career Break",
    date: "Apr 2021 - Present",
    location: "Pagosa Springs, CO",
    shortDesc: "Took time off to learn how to defend my rights in state and federal courts.",
    longDesc: [
      { text: "Spent time studying state and federal law, state and federal Constitutions, court rules, and used the knowledge to successfully defeat charges brought against me in absence of probable cause by the Archuleta Sheriff's Office and District Attorney for the Colorado 6th Judicial District. Filed multiple federal civil suits under U.S.C. Title 42 § 1983 for conspiracy against rights and deprivation of rights under color of law by public servants." },
    ]
  },
  {
    title: "Senior UX Developer",
    companyName: "M8 Systems",
    date: "March 2021 - April 2021",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Independent Business Owner",
    companyName: "Self Employed Consultant",
    date: "May 2010 - May 2020",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Senior UX Integrator",
    companyName: "XLR8 SOFTWARE, LLC (MarketAxess)",
    date: "May 2018 - May 2019",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "WPF Integration /Silverlight Integration / Visual Design Consultant",
    companyName: "Veracity Solutions",
    date: "September 2009 - September 2018",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "UX Design, UI Design, WPF / Silverlight Integration, WPF Interactive Designer",
    companyName: "IdentityMine",
    date: "May 2006 - April 2008",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Contract Web Designer",
    companyName: "Sequoyah Technologies",
    date: "December 2005 - May 2006",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Contract Designer",
    companyName: "IdentityMine",
    date: "May 2005 - November 2005",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Web and Graphic Designer",
    companyName: "Efficiency Technologies",
    date: "April 2004 - April 2005",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Web and Graphic Designer",
    companyName: "Sequoyah Technologies",
    date: "2000 - April 2004",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
  {
    title: "Web Designer",
    companyName: "BMC Advertising",
    date: "1999 - 2000",
    location: "",
    shortDesc: "",
    longDesc: [{ text: "" }]
  },
]

export const load: LayoutLoad = async () => {
  return { experiences: experiences }
}
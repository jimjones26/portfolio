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
  }
]

export const load: LayoutLoad = async () => {
  return { experiences: experiences }
}
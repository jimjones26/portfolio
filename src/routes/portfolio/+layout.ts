import type { LayoutLoad } from '../$types'

type PortfolioItem = {
  projectName: string
}

const portfolioItems: PortfolioItem[] = [
  { projectName: "Intermountain Healthcare - Web App" }
]

export const load: LayoutLoad = async () => {
  return { portfolio: portfolioItems }
}
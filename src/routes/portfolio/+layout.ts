import type { LayoutLoad } from '../$types'

type PortfolioItem = {
  projectName: string,
  year: string,
  images: Array<ImageItem>
}

type ImageItem = {
  src: string,
  alt: string
}

const portfolioItems: PortfolioItem[] = [
  {
    projectName: "Intermountain Healthcare - Web App",
    year: "2021",
    images: [
      {
        src: '/imhc-2022/img-1.png',
        alt: '...'
      }
    ]
  },
  {
    projectName: "M8 Systems -  Web App",
    year: "2021",
    images: [
      {
        src: '/m8-web-app/img-1.png',
        alt: '...'
      }
    ]
  },
  {
    projectName: "BP Visualization - WPF App",
    year: "2014",
    images: [
      {
        src: '/bp-viz/img-1.png',
        alt: '...'
      }
    ]
  },
  {
    projectName: "Saudi Aramco Visualization - WPF App",
    year: "2014",
    images: [
      {
        src: '/sa-viz/img-1.png',
        alt: '...'
      }
    ]
  },
  {
    projectName: "Omnicell Safety Med - Web App",
    year: "2014",
    images: [
      {
        src: '/safety-med/img-1.png',
        alt: '...'
      }
    ]
  },
  {
    projectName: "Starbucks In-Store Kiosk POC - WPF App",
    year: "2014",
    images: [
      {
        src: '/starbucks-poc/img-1.png',
        alt: '...'
      }
    ]
  },
]

export const load: LayoutLoad = async () => {
  return { portfolio: portfolioItems }
}
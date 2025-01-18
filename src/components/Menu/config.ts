import { MenuEntry } from '@mangofarm/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://cheeseswap.app/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://cheeseswap.app/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },

  {
    label: 'More Farms',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PIZZA',
        href: 'https://pizza.cheeseswap.app',
      },
      {
        label: 'KIWI',
        href: 'https://kiwi.cheeseswap.app',
      },
      {
        label: 'HOTS',
        href: 'https://hots.cheeseswap.app',
      },
      {
        label: 'CNFT',
        href: 'https://cnft.cheeseswap.app',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/bitbd83/mango-finance',
      },
    ],
  },
]

export default config

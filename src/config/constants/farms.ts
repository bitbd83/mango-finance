import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

    {
    pid: 0,
    lpSymbol: 'MANGO-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xE5fE53149A278aF40ACb04334c4140eE7444BE4B',
    },
    tokenSymbol: 'MANGO',
    tokenAddresses: {
      97: '',
      56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

   {
    pid: 1,
    lpSymbol: 'MANGO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB0361a92E2646F9F11f1670484f09D585fe4a419',
    },
    tokenSymbol: 'MANGO',
    tokenAddresses: {
      97: '',
      56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

     {
      pid: 18,
      lpSymbol: 'KITTY-MANGO LP',
      lpAddresses: {
        97: '',
        56: '0xc4b3561619d37Bf1c44e303e480F14f7b9A34C4e',
      },
      tokenSymbol: 'MANGO',
      tokenAddresses: {
        97: '',
        56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
      },
      quoteTokenSymbol: QuoteToken.MANGO,
      quoteTokenAdresses: contracts.mango,
    },
     {
          pid: 21,
          lpSymbol: 'PUP-MANGO LP',
          lpAddresses: {
            97: '',
            56: '0x8E1D5fD5c3c390877615366398bF8B1C85dE8ACd',
          },
          tokenSymbol: 'MANGO',
          tokenAddresses: {
            97: '',
            56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
          },
          quoteTokenSymbol: QuoteToken.MANGO,
          quoteTokenAdresses: contracts.mango,
        },

    {
     pid: 10,
     lpSymbol: 'MANGO-USDT LP',
     lpAddresses: {
       97: '',
       56: '0x4aB5135A7f7A814a67a3F0638e42F55C7caE2F69',
     },
     tokenSymbol: 'MANGO',
     tokenAddresses: {
       97: '',
       56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
     },
     quoteTokenSymbol: QuoteToken.USDT,
     quoteTokenAdresses: contracts.usdt,
   },
    {
   pid: 4,
   lpSymbol: 'MANGO-CHS LP',
   lpAddresses: {
     97: '',
     56: '0xF63c29444fdE98d8227088Cd4AEb48E33B6b0000',
   },
   tokenSymbol: 'MANGO',
   tokenAddresses: {
     97: '',
     56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
   },
   quoteTokenSymbol: QuoteToken.CHS,
   quoteTokenAdresses: contracts.chs,
 },
 {
  pid: 5,
  lpSymbol: 'MANGO-PIZZA LP',
  lpAddresses: {
    97: '',
    56: '0x80bEC1095372cE1A01e3ACd2A5B5eC3140DdFA20',
  },
  tokenSymbol: 'MANGO',
  tokenAddresses: {
    97: '',
    56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
  },
  quoteTokenSymbol: QuoteToken.PIZZA,
  quoteTokenAdresses: contracts.pizza,
 },

 {
 pid: 2,
 lpSymbol: 'BNB-BUSD LP',
 lpAddresses: {
   97: '',
   56: '0xF455f6f7988B752F75488E2CCcC030346d0Cac72',
 },
 tokenSymbol: 'BNB',
 tokenAddresses: {
   97: '',
   56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
 quoteTokenAdresses: contracts.busd,
},
{
 pid: 6,
 lpSymbol: 'ETH-BUSD LP',
 lpAddresses: {
   97: '',
   56: '0x7d1a03b432c5f04A426F4Eaf41037fe8Dd695b89',
 },
 tokenSymbol: 'ETH',
 tokenAddresses: {
   97: '',
   56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
 },
 quoteTokenSymbol: QuoteToken.BUSD,
 quoteTokenAdresses: contracts.busd,
},
{
 pid: 7,
 lpSymbol: 'USDT-BNB LP',
 lpAddresses: {
   97: '',
   56: '0xcfD63197d764cd70d07bB607e6367Ae0E869BaDD',
 },
 tokenSymbol: 'USDT',
 tokenAddresses: {
   97: '',
   56: '0x55d398326f99059ff775485246999027b3197955',
 },
 quoteTokenSymbol: QuoteToken.BNB,
 quoteTokenAdresses: contracts.wbnb,
},
{
  pid: 11,
  isTokenOnly: true,
  lpSymbol: 'MANGO',
  lpAddresses: {
    97: '',
    56: '0xE5fE53149A278aF40ACb04334c4140eE7444BE4B', // EGG-BUSD LP
  },
  tokenSymbol: 'MANGO',
  tokenAddresses: {
    97: '',
    56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
  },
  quoteTokenSymbol: QuoteToken.MANGO,
  quoteTokenAdresses: contracts.mango,
},
{
  pid: 20,
  isTokenOnly: true,
  lpSymbol: 'KITTY',
  lpAddresses: {
    97: '',
    56: '0x5b4963B964bAc5C2Db83e53ffFe46E0cb83a1346', // EGG-BUSD LP
  },
  tokenSymbol: 'KITTY',
  tokenAddresses: {
    97: '',
    56: '0x3D29cdB00CB183a0aEcEEa4fB73F55E1450af3d4',
  },
  quoteTokenSymbol: QuoteToken.KITTY,
  quoteTokenAdresses: contracts.kitty,
},

]

export default farms

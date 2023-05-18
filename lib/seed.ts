import { statementToPrisma, statementType } from './types/x-api/statement'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const newStatement = (duration: string, platform: string): statementType => ({
  object: {
    objectType: 'Activity',
    id: `https://protus.vercel.app/activity/activtityid`,
    definition: {
      name: {
        en: 'Arrays and Functions',
      },
      description: {
        en: 'Arrays and Functions',
      },
      type: 'http://adlnet.gov/expapi/activities/exersice',
      moreInfo: 'https://protus.vercel.app/activity/activtityid',
    },
  },
  actor: {
    objectType: 'Agent',
    mbox: 'mailto:hei@hei.no',
  },
  verb: {
    id: 'http://adlnet.gov/expapi/verbs/viewed',
    display: {
      en: 'viewed',
    },
  },
  result: {
    duration: duration,
  },
  context: {
    platform,
  },
  authority: {
    objectType: 'Group',
    member: [
      {
        mbox: 'mailto:test@hei.no',
      },
      {
        mbox: 'mailto:testing@hei.no',
      },
    ],
  },
})

export const test = () => {
  let totalseconds = 14 * 51 * 60

  let statements: statementType[] = []

  let mobilePlatforms = [
    'tablet Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/404.0.0.30.110;FBBV/464513134;FBDV/iPhone13,2;FBMD/iPhone;FBSN/iOS;FBSV/16.1.1;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.4 Mobile/15E148 Safari/604.1',
    'tablet Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/405.0.0.36.95;FBBV/466681270;FBDV/iPhone12,5;FBMD/iPhone;FBSN/iOS;FBSV/16.3.1;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Mobile/15E148 Safari/604.1',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/405.0.0.36.95;FBBV/466681270;FBDV/iPhone13,2;FBMD/iPhone;FBSN/iOS;FBSV/16.0;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Mobile/15E148 Safari/604.1',
    'tablet Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/113.0',
    'tablet Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/112.0.5615.101 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/404.0.0.14.115;]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/404.0.0.30.110;FBBV/464513134;FBDV/iPhone14,2;FBMD/iPhone;FBSN/iOS;FBSV/16.2;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/404.0.0.30.110;FBBV/464513134;FBDV/iPhone13,1;FBMD/iPhone;FBSN/iOS;FBSV/16.1.1;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (Android 12; Mobile; rv:109.0) Gecko/111.0 Firefox/111.0',
    'tablet Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_0_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
    'tablet Mozilla/5.0 (Linux; Android 10; VOG-L29 Build/HUAWEIVOG-L29; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/111.0.5563.116 Mobile Safari/537.36 [FB_IAB/Orca-Android;FBAV/403.1.0.17.106;]',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/404.0.0.30.110;FBBV/464513134;FBDV/iPhone11,2;FBMD/iPhone;FBSN/iOS;FBSV/16.1.1;FBSS/3;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (Linux; Android 12; SM-G970F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Mobile Safari/537.36',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/404.0.0.30.110;FBBV/464513134;FBDV/iPhone12,1;FBMD/iPhone;FBSN/iOS;FBSV/16.0;FBSS/2;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
    'tablet Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'tablet Mozilla/5.0 (iPhone; CPU iPhone OS 16_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 LightSpeed [FBAN/MessengerLiteForiOS;FBAV/403.1.0.38.106;FBBV/462753247;FBDV/iPhone10,4;FBMD/iPhone;FBSN/iOS;FBSV/16.1.1;FBSS/2;FBCR/;FBID/phone;FBLC/nb;FBOP/0]',
  ]
  let desktopPlatforms = [
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:105.0) Gecko/20100101 Firefox/105.0',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0',
    'desktop Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Safari/605.1.15',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/111.0',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/113.0',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/112.0',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/111.0',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.3 Safari/605.1.15',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36 Edg/112.0.1722.48',
    'desktop Mozilla/5.0 (X11; CrOS x86_64 14541.0.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
    'desktop Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36',
  ]

  while (totalseconds > 0) {
    if (statements.length % 2 === 0) {
      //mobile
      let seconds = Math.random() * 10 + 5
      totalseconds -= seconds

      let platform =
        mobilePlatforms[Math.floor(Math.random() * mobilePlatforms.length)]
      statements.push(newStatement(`PT${seconds}S`, platform))
    } else {
      //desktop
      let seconds = Math.random() * 150 + 60
      totalseconds -= seconds
      let minutes = Math.floor(seconds / 60)
      seconds = seconds - minutes * 60

      let duration = minutes > 0 ? `PT${minutes}M${seconds}S` : `PT${seconds}S`

      let platform =
        desktopPlatforms[Math.floor(Math.random() * desktopPlatforms.length)]
      statements.push(newStatement(duration, platform))
    }
  }

  return statements
}

function loop(i: number, func: () => void) {
  setTimeout(function () {
    func()
  }, 3000 * i)
}

async function main() {
  const statements = test()

  let transaction = statements.map((statement, index) =>
    prisma.statement.create({
      data: statementToPrisma(
        statement,
        {
          mbox: 'mailto:test@hei.no',
        },
        undefined
      ),
    })
  )

  transaction.forEach(async (statement, index) => {
    loop(index, async () => {
      await prisma.$transaction([statement])
    })
  })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

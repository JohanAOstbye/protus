import path from 'path'

import initStoryshots from '@storybook/addon-storyshots'

// The required import from the @storybook/addon-storyshots-puppeteer addon
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'

import puppeteer from 'puppeteer'
import { beforeScreenshot, getMatchOptions } from 'test/test-functions'

describe('Storyshots [Large Desktop]', () => {
  let Browser: puppeteer.Browser
  const getCustomBrowser = async () => {
    Browser = await puppeteer.launch({
      headless: true,
      args: [
        '--autoplay-policy=user-gesture-required',
        '--no-sandbox ',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
        '--font-render-hinting=none',
      ],
    })

    return Browser
  }
  initStoryshots({
    configPath: path.join(__dirname, '../../.storybook'),
    suite: 'A11Y',

    test: imageSnapshot({
      getMatchOptions,
      getCustomBrowser,
      beforeScreenshot,

      customizePage: async (page) => {
        await page.setViewport({
          width: 1920,

          height: 1080,

          deviceScaleFactor: 1,

          isMobile: false,
        })
      },
    }),
  })
  afterAll(() => {
    Browser.close()
  })
})

import { ImageSnapshotConfig } from '@storybook/addon-storyshots-puppeteer'
import path from 'path'
import { ElementHandle, Page } from 'puppeteer'
// Function to customize the snapshot location
export const getMatchOptions: ImageSnapshotConfig['getMatchOptions'] = ({ context }: any) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(
    '__test__',
    path.dirname(context.fileName).substring(path.dirname(context.fileName).indexOf('/') + 1),
  )
  return { customSnapshotsDir: snapshotPath, failureThreshold: 2, failureThresholdType: 'percent' }
}

export const beforeScreenshot: (
  page: Page,
  { context }: any,
) => Promise<void | ElementHandle<Element>> = async (page) => {
  await page.waitForSelector('#root')
  await page.$$eval(
    'Video',

    (videos) => {
      videos.forEach((video) => {
        video.remove()
      })
    },
  )
  await page.$$eval(
    'Iframe',

    (iframes) => {
      iframes.forEach((iframe) => {
        iframe.remove()
      })
    },
  )

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve()
    }, 600),
  )
}
export const getGotoOptions: ImageSnapshotConfig['getGotoOptions'] = ({ context }: any) => {
  return {}
}

/* eslint-disable @next/next/no-html-link-for-pages */

const AlertBanner = ({ loading }: { loading?: boolean }) => {
  return (
    <div>
      <div>
        {loading ? 'Loading... ' : 'This page is a preview. '}
        <a href="/api/exit-preview">Click here</a> to exit preview mode.
      </div>
    </div>
  )
}

export default AlertBanner

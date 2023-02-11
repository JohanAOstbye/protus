/* eslint-disable @next/next/no-html-link-for-pages */

const AlertBanner = ( {
  
  loading,
}: {
  loading?: boolean
}) => {
  return (
    <div className="border-b border-accent-7 bg-accent-7 text-white">
        <div className="py-2 text-center text-sm">
          {loading ? 'Loading... ' : 'This page is a preview. '}
          <a
            href="/api/exit-preview"
            className="underline transition-colors duration-200 hover:text-cyan"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
    </div>
  )
}

export default AlertBanner
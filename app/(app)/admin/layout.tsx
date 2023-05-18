import AdminLayout from 'components/layout/adminLayout'
import React from 'react'

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AdminLayout>{children}</AdminLayout>
}

import React, { PropsWithChildren } from 'react'

export default function AuthLayout({children}: PropsWithChildren) {
  return (
    <div className="min-h-svh flex justify-center items-center bg-gray-100">
      <main>
        {children}
      </main>
    </div>
  )
}

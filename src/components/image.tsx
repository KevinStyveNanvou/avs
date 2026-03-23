import React from 'react'

export default function Image() {
  return (
    <div>
        <section className="relative h-[50vh]">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url('/public/img/side.jpg')",
    }}
  />
</section>
    </div>
  )
}

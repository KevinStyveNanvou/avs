import React from 'react'

export default function Image() {
  return (
    <div>
        <section className="relative h-[20vh] lg:h-[40vh]">
  {/* Background */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url('/img/side.jpg')",
    }}
  />
</section>
    </div>
  )
}

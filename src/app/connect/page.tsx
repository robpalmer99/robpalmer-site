import type { Metadata } from 'next'
import Image from 'next/image'
import { Prompt } from 'next/font/google'
import { CopyLineId } from './CopyLineId'

// Personal LINE contact card — unlisted, noindex, deliberately outside the
// site's design system (LINE brand palette from the card mockup).
const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const LINE_ID = 'hitext2'
const LINE_ADD_URL = `https://line.me/ti/p/~${LINE_ID}`

export const metadata: Metadata = {
  title: { absolute: 'Rob · Connect' },
  description: 'Connect with Rob',
  robots: { index: false, follow: false },
}

export default function ConnectPage() {
  return (
    <div className={`${prompt.className} fixed inset-0 z-[60] overflow-y-auto bg-[#06C755]`}>
      {/* Root layout renders Header/Footer; the fixed overlay covers them, and
          locking body scroll removes the phantom scroll behind it. */}
      <style>{`body { overflow: hidden; }`}</style>
      <div className="flex min-h-full items-center justify-center px-4 py-10">
        <div className="w-full max-w-sm rounded-3xl bg-[#F8F5EF] p-8 text-center shadow-2xl">
          <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-[#06C755]">
            <Image
              src="/images/headshots/rob-palmer-clean.png"
              alt="Rob"
              fill
              className="object-cover"
              sizes="112px"
              priority
            />
          </div>

          <h1 className="mt-4 text-4xl font-bold text-[#332C25]">
            Rob <span className="font-semibold">(ร็อบ)</span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#332C25]">
            มาคุยกันทาง LINE นะครับ 😊 สแกน QR โค้ดตอนนี้เลย
            แล้วเราจะได้นัดเจอกันเร็ว ๆ นี้
          </p>

          <a
            href={LINE_ADD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full rounded-2xl bg-[#06C755] px-6 py-4 text-xl font-semibold text-white shadow-md transition hover:brightness-105 active:scale-[0.98]"
          >
            เพิ่มเพื่อนใน LINE
          </a>

          <CopyLineId lineId={LINE_ID} />

          <div className="mt-6 rounded-2xl bg-white p-5 shadow-inner">
            <div className="relative mx-auto aspect-square w-full max-w-[240px]">
              <Image
                src="/images/line-qr.png"
                alt="LINE QR code — scan to add Rob"
                fill
                className="object-contain"
                sizes="240px"
              />
            </div>
            <p className="mt-2 text-sm text-[#332C25]/70">สแกนด้วยแอป LINE</p>
          </div>
        </div>
      </div>
    </div>
  )
}

import Image from "next/image";
import { Award, Medal, Trophy } from "lucide-react";

const prizeAwards = [
  {
    title: "1st Prize",
    amount: "₹11,000",
    icon: Trophy,
    cardClass: "border-amber-200",
    iconClass: "bg-amber-100 text-amber-700",
  },
  {
    title: "2nd to 5th Prize",
    amount: "₹5,000 each",
    icon: Medal,
    cardClass: "border-blue-200",
    iconClass: "bg-blue-100 text-blue-700",
  },
  {
    title: "6th to 10th Prize",
    amount: "₹2,100 each",
    icon: Award,
    cardClass: "border-orange-200",
    iconClass: "bg-orange-100 text-orange-700",
  },
];

export default function CashPrizeSection() {
  return (
    <section
      aria-labelledby="cash-prizes-title"
      className="mt-4 bg-[#F4F7FC] px-5 pt-6 pb-6 sm:mt-6 sm:px-6 sm:pt-8 sm:pb-8 lg:px-8 lg:pt-8 lg:pb-8"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-orange-600 sm:text-sm">
            Rewards &amp; Recognition
          </p>
          <h2
            id="cash-prizes-title"
            className="mt-1 text-2xl font-semibold tracking-tight text-[#0B1220] sm:text-3xl lg:text-4xl"
          >
            Big Dreams. Bigger Rewards.
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-6">
            Show what you know. Earn recognition for your talent.
          </p>
        </header>

        <div className="mx-auto mt-4 max-w-4xl rounded-2xl border border-blue-100 bg-white p-1 shadow-sm sm:mt-5 sm:p-2">
          <Image
            src="/images/genius-360-cash-prizes.png"
            width={2164}
            height={727}
            alt="Genius 360 Bharuch cash prizes: ₹11,000 for first prize, ₹5,000 each for second to fifth prize, and ₹2,100 each for sixth to tenth prize"
            sizes="(max-width: 639px) calc(100vw - 3.125rem), (max-width: 943px) calc(100vw - 4.125rem), 878px"
            className="block h-auto w-full"
          />
        </div>

        <div className="mx-auto mt-3 grid max-w-4xl grid-cols-1 gap-3 sm:mt-4 md:grid-cols-3 md:gap-4">
          {prizeAwards.map((prize) => {
            const Icon = prize.icon;

            return (
              <article
                key={prize.title}
                className={`flex min-h-[76px] items-center gap-3 rounded-xl border bg-white px-3 py-2.5 shadow-sm sm:px-4 ${prize.cardClass}`}
              >
                <span
                  aria-hidden="true"
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${prize.iconClass}`}
                >
                  <Icon size={18} strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-medium leading-snug text-slate-600">
                    {prize.title}
                  </h3>
                  <p className="mt-0.5 text-lg font-bold leading-tight tracking-tight text-[#0B1220] sm:text-xl">
                    {prize.amount}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

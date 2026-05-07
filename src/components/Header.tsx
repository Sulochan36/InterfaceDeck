

const Header = () => {
    return (
        <section className="py-20 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-3">
                FreeAPI Collection
            </p>

            <h1 className="text-5xl font-bold tracking-tight">
                Frontend Engineering Projects
            </h1>

            <p className="max-w-2xl mx-auto mt-4 text-neutral-600 leading-relaxed" >
                A curated collection of API-driven frontend projects focused on
                modern UI, async data flows, and interactive experiences.
            </p>

            <div className="flex items-center justify-center gap-3 mt-6 flex-wrap">
                <span className="text-xs border border-neutral-200 rounded-full px-3 py-1">
                    React
                </span>

                <span className="text-xs border border-neutral-200 rounded-full px-3 py-1">
                    TypeScript
                </span>

                <span className="text-xs border border-neutral-200 rounded-full px-3 py-1">
                    Tailwind
                </span>

                <span className="text-xs border border-neutral-200 rounded-full px-3 py-1">
                    FreeAPI
                </span>
            </div>
        </section>
    )
}

export default Header
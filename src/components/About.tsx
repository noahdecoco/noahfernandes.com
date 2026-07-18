export default function AboutMe() {
    return (
        <section className="w-full bg-bark py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* portrait */}
                <div className="lg:col-span-5">
                    <div className="relative w-full aspect-[4/5] rounded-[2rem] flex items-center justify-center px-8 text-center overflow-hidden bg-bone/5 border border-bone/15">
                        <p className="font-body text-bone/40 text-sm">
                            Image placeholder, portrait, natural light, no studio backdrop
                        </p>
                    </div>
                </div>

                {/* bio */}
                <div className="lg:col-span-7">
                    <p className="font-body text-xs uppercase tracking-[0.3em] text-bone/45 mb-6">
                        Who's holding this
                    </p>
                    <h2
                        className="font-display italic text-bone mb-10"
                        style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: 1.2, fontWeight: 600 }}
                    >
                        Noah Fernandes
                    </h2>

                    <div className="flex flex-col gap-5 max-w-xl mb-12">
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            For years I worked as a creative and front end engineer,
                            building things for screens. I liked the people I worked
                            with, but the politics, the pressure, and the disconnection
                            from anything human wore me down.
                        </p>
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            At the same time, I was moving through one of the hardest
                            chapters of my life. My relationships were unraveling, and
                            couples therapy is what finally cracked things open. For the
                            first time I could see patterns in myself I'd never had the
                            language for, and I was so moved by what that process gave me
                            that I wanted to learn how to offer it to other people too.
                        </p>
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            I trained as a coach and counsellor, specializing in
                            relationships, grief, and trauma, and later in parts work
                            specifically. What pulled me in was seeing how trauma blocks
                            people from love, and how much shifts once someone starts
                            turning back toward the parts of themselves they'd been
                            running from.
                        </p>
                        <p className="font-body text-bone/75 text-base sm:text-lg leading-relaxed">
                            The years after weren't easy. I lost people, habits, an old
                            version of my life, and rebuilt slowly through yoga,
                            breathwork, cold water, and a men's group that held me the
                            way my own therapists once had. I know this work from the
                            inside. I've walked through my own version of what many of
                            the people I sit with are going through, and that's why I
                            trust I can guide them through it too.
                        </p>
                    </div>

                    <p
                        className="font-display italic text-ochre mb-6"
                        style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.7rem)", lineHeight: 1.4 }}
                    >
                        Calm. Grounded. Completely without judgment. That's what I bring
                        into the room.
                    </p>
                    <p className="font-body text-bone/70 text-base leading-relaxed max-w-xl">
                        I bring in music, breathwork, and parts work to build a
                        container steady enough for people to finally say what they've
                        never said out loud, maybe even to themselves.
                    </p>
                </div>
            </div>
        </section>
    );
}
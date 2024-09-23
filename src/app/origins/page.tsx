// "use client";

// import { Metadata } from "next";
import styles from "./page.module.css";
import Image from "next/image";

export default function OriginsPage() {
  return (
    <article>
      <section className={styles.aboutPage}>
        <h2 className="pageheader">Old School’s Origin Story</h2>

        <Image
          src="/images/origins/1.jpg"
          placeholder="blur"
          blurDataURL={"/images/1.jpg"}
          alt="header"
          width={800}
          height={286}
        />
        <p>
          Movements need tools, best practices, and ways to share them. So it
          seemed to Ashton Applewhite, an anti-ageism activist. Ageism is the
          stereotyping and discrimination on the basis of a person’s age. Ashton
          started dreaming about a free toolbox of ageism-related resources in
          2014. But ideas are cheap, things take time, and she needed the right
          collaborators.
        </p>
        <p>
          She met Kyrié Carpenter at a conference in Denver in October 2015,
          where Kyrié was speaking about what she’d learned about people with
          dementia while practicing psychotherapy in a long-term care facility.
          Instead of encountering ‘shells of themselves’ and witnessing ‘long
          goodbyes’, she met whole, dynamic human beings. Digging in, she
          realized that what legitimized their isolation and neglect was ageism.
          So at the end of Ashton’s rabble-rousing talk later that day, Kyrié
          jumped tracks: from academic to activist.
        </p>
        <p>
          Kyrié redefines aging primarily in Jungian terms of personal growth.
          That’s a little woo woo for Ashton, whose framework is more political,
          but she knew a kindred spirit when she saw one. The two stayed in
          touch and became friends.
        </p>
        <Image
          src="/images/origins/2.png"
          placeholder="blur"
          blurDataURL={"/images/origins/2.png"}
          alt="boom"
          width={800}
          height={450}
        />
        <Image
          src="/images/origins/3.png"
          placeholder="blur"
          blurDataURL={"/images/origins/3.png"}
          alt="spreadsheet"
          width={800}
          height={450}
        />
        <p>
          Ashton reached out to Ryan Backer, whom she’d met back in 2013, when
          Ryan was in their first semester of an undergrad gerontology program,
          coming at it from a social justice perspective. Ryan saw ageism as a
          main driver of elder abuse and came across Ashton’s work in their
          efforts to learn more about it. Two years later, Ryan emailed Ashton
          to say “I’m using your consciousness-raising booklet for a workshop at
          a queer, kinky summer camp in Maryland called Amorous Revolt and had a
          feeling you might like to hear about this.”Ashton did indeed, they met
          for a meal, and a friendship was cemented.
        </p>
        <Image
          src="/images/origins/4.png"
          placeholder="blur"
          blurDataURL={"/images/origins/4.png"}
          alt="solidarity"
          width={800}
          height={450}
        />
        <p>
          Ashton put Ryan & Kyié in touch. On that first call, on Feb 13 – we
          know the date because Kyrié tracks things on spreadsheets!-- Kyrié
          asked, “So, did Ashton give you any suggestions about how this might
          work?” “Not a word,” Ryan answered. “How about you?” “Nope.” OK,
          managerial skills are not Ashton’s strength. But she does have amazing
          intuition about people. Even though at the time she lived in Brooklyn,
          Kyrié lived in a van, and Ryan was bouncing around Europe, the three
          of us just worked.
        </p>
        <Image
          src="/images/origins/5.png"
          placeholder="blur"
          blurDataURL={"/images/origins/5.png"}
          alt="distributed"
          width={800}
          height={450}
        />
        <Image
          src="/images/origins/7.png"
          placeholder="blur"
          blurDataURL={"/images/origins/7.png"}
          alt="brainstorm"
          width={800}
          height={450}
        />
        <h3>We came up with a name:</h3>
        <p>
          Kyrié’s pretty sure Old School was her idea. Kyrié’s spouse says it
          was his idea. Ryan and Ashton will let them duke it out. We liked all
          the possible wordplay: how we use “old” as a pejorative when of course
          it isn’t; the connotation of something well-respected from an earlier
          era; and school for getting ‘schooled’ in ageism. Dot.com was taken,
          so we settled for .info, and one of these days, when you search for
          “old school,” we’ll come up ahead of Pornhub.
        </p>
        <p>
          We went back and forth on the word clearinghouse (because who knows
          what the word means, admittedly). It’s an informal channel for
          distributing information, and that was exactly what we wanted OS to
          become - a place that things move in and out of.
        </p>
        <h3>We figured out how to describe the site:</h3>
        <p>
          Old School is a clearinghouse of free and carefully vetted resources
          to educate people about ageism and help dismantle it. You’ll find
          blogs, books, articles, videos, speakers, and other tools that are
          accessible to the general public. Our goal is to help catalyze a
          movement to make ageism (discrimination on the basis of age) as
          unacceptable as any other kind of prejudice.
        </p>
        <h3>We built the site:</h3>
        <Image
          src="/images/origins/8.png"
          placeholder="blur"
          blurDataURL={"/images/origins/8.png"}
          alt="first site"
          width={800}
          height={450}
        />
        <p>
          Spreadsheets are awesome, but Kyrié realized that Old School had to be
          more than just a list. The resources we were finding were a complete
          grab bag -- a bunch of things that looked and worked differently — and
          the clearinghouse needed a coherent structure that made sense
          visually. Kyrié talked to tech friends and opted for wix, a free
          website design platform, as the simplest and easiest lift. She chose a
          basic “store” template, with rows of images, and muted earth tones and
          vintage photos for an old-timey play on “old school”.
        </p>
        <h3>We established simple criteria:</h3>
        <ul>
          <li>
            <strong>Resources have to be really good!</strong> We’ve gotten
            pickier, and we know the day is coming when we’ll have to prune,
            which will be hard, but also a welcome indicator for the movement.
          </li>
          <li>
            <strong>Resources have to be free!</strong> Everything on the site
            is free except most of the books -- though the speakers charge for
            their services.
          </li>
          <li>
            We’re also committed to an <strong>open-source ethos.</strong>{" "}
            People are welcome to share, adapt, and appropriate our words and
            ideas and we encourage others to do the same. It’s good karma. It’s
            not zero-sum: people who make their work available for free also get
            paid for it —and people are getting hired via Old School, just
            sayin’. We feel strongly that you can’t have a proprietary,
            capitalist mindset building a mass movement.
          </li>
        </ul>
        <p>
          By April 2018 we figured we’d found most of what was available online
          — not that much out there—and a workable way to share it. We then
          proceeded to bang our head against taxonomy and criteria.
        </p>
        <Image
          src="/images/origins/11.png"
          placeholder="blur"
          blurDataURL={"/images/origins/11.png"}
          alt="tools"
          width={800}
          height={450}
        />
        <h3>We decided on six initial categories:</h3>
        <p>
          Tools, Books, Blogs & Papers, Humans, Videos, Organizations. The
          Organizations category was a headache because very few are
          ageism-centric. We ran into the same problem with Humans. So we ruled
          that ageism didn’t have to be a person’s or organization’s sole focus,
          but it had to be an explicit priority and area of expertise – the more
          central to their mission, the better.
        </p>
        <p>
          Next we did some very professional user-testing. We sent the link to
          friends and allies, basically as a reality check — would this thing
          make sense to anyone other than the three of us? We got a whopping
          eight responses, but they were substantive. My daughter hated the word
          “clearinghouse” but thought we were definitely on the right track and
          we got some very helpful input on layout and design.
        </p>
        <p>
          After months of working together virtually, the three of us finally
          convened at our first Founders Summit in Oakland, CA in August 2018.
          We added finishing touches. We set up social media accounts, drafted a
          newsletter, and decided it was time to introduce our work to the
          world.
        </p>
        <Image
          src="/images/origins/10.png"
          placeholder="blur"
          blurDataURL={"/images/origins/10.png"}
          alt="in person"
          width={800}
          height={450}
        />
        <p>
          On August 12, 2018, with an email blast to the This Chair Rocks
          mailing list Ashton had built up over a decade, Old School launched
          with 78 resources: Old School 1.0
        </p>
        <Image
          src="/images/origins/18.png"
          placeholder="blur"
          blurDataURL={"/images/origins/18.png"}
          alt="second site"
          width={800}
          height={450}
        />
        <h3>Response was terrific:</h3>
        <p>
          We know that “a clearinghouse of free, vetted anti-ageism resources”
          isn’t the sexiest phrase . . . and we weren’t sure anyone but us would
          notice Old School’s debut. So we were astonished by how many people --
          immediately -- checked out the site, let us know they liked what they
          saw, and submitted things. Clearly Old School was in the right place
          at the right time. It was also apparent that this was going to be a
          dynamic proposition, very different from what we thought we’d signed
          up for — setting up a website, adding stuff every so often, checking
          the links once a year.
        </p>
        <p>
          Once we’d stopped blinking in surprise, we went right back to the
          drawing board. It was obvious that the site needed to work faster and
          offer more features -- like search! (We couldn’t believe no one had
          complained that it was missing).
        </p>
        <p>
          We brought in designer and programmer Dan Visel, who’d built Ashton’s
          This Chair Rocks site. He lives in Singapore (we really are a
          distributed team) and luckily he’s a night owl. Wix is great for
          newbies, but Dan ported the site over to WordPress, a free
          website-creation tool, so we’d have more control over features and
          plugins - bits of software that would enable us to customize the site.
        </p>
        <p>
          The flood of submissions also made it obvious that we needed to be
          clearer about our criteria. Many fell into a category we call
          “positive aging.” They offer a welcome corrective to the conventional
          gloomy story of aging-as-decline. They tell upbeat stories about
          inspirational olders doing things typically associated with younger
          people. They suggest that the right lifestyle and right attitude can
          enable us to control the way we age. Where’s the rub? This approach
          downplays the role that class and luck and structural discrimination
          play in shaping our aging -- forces that benefit people with
          privilege. A feel-good approach avoids the very real challenges of
          growing old. That reinforces age denial. And that feeds the very thing
          we’re trying to eradicate: ageism.
        </p>
        <p>We quickly added these points to our site:</p>
        <Image
          src="/images/origins/19.png"
          placeholder="blur"
          blurDataURL={"/images/origins/19.png"}
          alt="points"
          width={800}
          height={450}
        />
        <p>
          We try not to be jerks, explaining that we’re three overtaxed and
          fallible humans who could easily be missing something, no one gets
          everything right straight out of the gate. We point out that aging is
          a huge field and Old School can’t be all things to all people. We
          emphasize that we’re on the same team, that many are important allies,
          and that we’re all working for a better world in which to grow old. We
          add them to the Not Quite Right tab on our spreadsheet, hoping some of
          those resources will make the cut later on, and that we’ve made the
          right call.
        </p>
        <p>
          Culture change is complicated! We operate by consensus, and our
          monthly meetings to review submissions feature a lot of energetic
          back-and-forth. More and more people are getting the memo—
          <strong>that it’s time to confront ageism</strong>—and creating new
          resources. Older ones are coming out of the woodwork, too, like a
          broadcast of Maggie Kuhn, founder of the Gray Panthers, doing some
          consciousness-raising in 1983.
        </p>
        <p>
          We must be doing something right. Thanks to a growing circle of users
          and contributors, what started as a spreadsheet has developed a life
          and momentum of its own. More and more organizations and websites are
          listing OS as a resource.
        </p>
        <p>
          We’re getting press attention, including a nice mention in the{" "}
          <a
            href="https://www.nytimes.com/2019/04/26/health/ageism-elderly-health.html"
            target="_blank"
            rel="noreferrer"
          >
            <em>NY Times</em>
          </a>
          .
        </p>
        <p>
          We’re also getting amazing testimonials -- here are a few favorites:
        </p>
        <Image
          src="/images/origins/20.png"
          placeholder="blur"
          blurDataURL={"/images/origins/20.png"}
          alt="testimonials"
          width={800}
          height={450}
        />
        <p>
          We hear from lots of non-fancy people too, including graduate
          students, elementary-school teachers, policy-makers, arts
          organizations, podcasters, college professors, people facing age
          discrimination at work- all kinds of people. A journalist visits the
          site regularly to spot trends. A podcaster who interviewed me last
          week called it her “secular bible”. People are really, kind of
          weirdly, into Old School!
        </p>
      </section>
    </article>
  );
}

export const metadata = {
  title: `Old School: Old School’s Origin Story`,
};

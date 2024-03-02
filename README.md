# oldschool4

This is a redesign of the Old School site, working off of this: https://github.com/dbvisel/oldschool3

This is using Next 13 and App Router. Will that make things more complicated? Maybe!

## KNOWN ISSUES

 - there's a weird error logged on Netlify in build ("Static worker exited with code: null and signal: SIGKILL"). Maybe slowing things down?
 - also getting this: https://nextjs.org/docs/messages/static-page-generation-timeout
 - why does building take so long?
   - how much of that is because of Plaiceholder? Try building without running that.

## TODO:

Maybe: figure out how to cache blurPaths? How much time are we spending on that?

 - [ ] get search working
   - [ ] get resource component into the results
   - [ ] get events into search (second index?)
 - [ ] import pages
   - [ ] front page: 12 newest resources on front page below the fold, some kind of splash above, some kind of about below
   - [ ] about page: this gets the carousel
   - [ ] hire us: content TK
   - [ ] learn page maybe doesn't exist?
 - [ ] import components
   - [ ] rework PDF viewer
   - [ ] resource component
     - [ ] make subresources that are PDFs open in their own page with local PDF.
 - [ ] responsiveness
 - [ ] accessibility testing
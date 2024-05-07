# oldschool4

This is a redesign of the Old School site, working off of this: https://github.com/dbvisel/oldschool3

This is using Next 14 and App Router. Will that make things more complicated? Maybe!

Next 14: https://focusreactive.com/breaking-down-next-js-14/

View transitions courtesy of this: https://github.com/shuding/next-view-transitions

## KNOWN ISSUES

 - there's a weird error logged on Netlify in build ("Static worker exited with code: null and signal: SIGKILL"). Maybe slowing things down?
   - new Netlify build environment seems to have fixed this
 - also getting this: https://nextjs.org/docs/messages/static-page-generation-timeout
 - why does building take so long?
   - how much of that is because of Plaiceholder? Try building without running that.
   - Should we save Plaiceholder base64s?
 - search form: work through this: https://frontendmasters.com/blog/the-html-css-and-svg-for-a-classic-search-form/
 - Do we need a loading for category pages?

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
   - [ ] resource component
     - [ ] make subresources that are PDFs open in their own page with local PDF.
 - [ ] responsiveness
 - [ ] accessibility testing

## Their feedback (25 April 2024)

- What to put on front? Above the fold - What are your ideas, Dan?
	 - Picture of the team? Won’t get until this summer
	 - “What People Are Saying” — foreground blurbs that speak to 		specific offerings/hubbitude (workshops, meet-ups, resources), 		include carousel if technically possible and works design-wise. 		Include pictures of people who give testimonials
- (Reminder for reminder) We want a visual of where to go to see old old school and/or that we are still Old School
- Do we need to rethink the way the resource cards work?
- possible to have “see more” when one hovers over resource card if there’s a resource page with more info or contact or sub resources. If nothing is new, go directly to resource (in new tab)
	- Related: Is it worth keeping the share options on individual resource pages?
Still a somewhat crunchy idea: we have been talking about ways to highlight resources which have been updated (for instance we got a new and improved revamp of the conversation guide Another Day Older) we wonder if we could build in a function on the site to do this. So in addition to a “new” banner we could also have an “updated!” banner with a way to highlight the updates. I am getting the key points from the resource creator of Another Day Older as a sort of prototype. We imagine this going “below the fold” under the new resources.
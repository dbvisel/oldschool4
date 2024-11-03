# oldschool4

This is a redesign of the Old School site, working off of this: https://github.com/dbvisel/oldschool3

This is using Next 14 and App Router. Will that make things more complicated? Maybe!

Next 14: https://focusreactive.com/breaking-down-next-js-14/

View transitions courtesy of this: https://github.com/shuding/next-view-transitions

## KNOWN ISSUES

 - [ ] images for seo
 - [ ] Search box should be rewired – clicking search icon should open search box, closing search results should clear query
 - there's a weird error logged on Netlify in build ("Static worker exited with code: null and signal: SIGKILL"). Maybe slowing things down?
   - new Netlify build environment seems to have fixed this
 - also getting this: https://nextjs.org/docs/messages/static-page-generation-timeout
 - search form: work through this: https://frontendmasters.com/blog/the-html-css-and-svg-for-a-classic-search-form/

## TODO:

 - BUG: snappityness on /origins
 - BUG: #subscribe scrollTo doesn't work on Safari.
 - clean up the loose types
 - Maybe: figure out how to cache blurPaths? How much time are we spending on that?
 - [ ] make subresources that are PDFs open in their own page with local PDF.
 - [ ] accessibility testing

## Remember

 - react-responsive-masonry is pegged to 2.3.0 because of this bug: https://github.com/cedricdelpoux/react-responsive-masonry/issues/131
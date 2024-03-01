# oldschool4

This is a redesign of the Old School site, working off of this: https://github.com/dbvisel/oldschool3

This is using Next 13 and App Router. Will that make things more complicated? Maybe!

## ISSUES

build error: 
```
2:40:35 PM: Invalid slug: ageism-does-it-exist-among-children%20
```
This is still coming up even after adding in a `trim()`! 

## TODO:

 - [ ] get search working
   - [ ] move old search in
   - [ ] update to use current model for react-instantsearch
   - [ ] get resource component into the results
   - [ ] get events into search
 - [ ] import pages
   - [ ] front page: 12 newest resources on front page below the fold, some kind of splash above, some kind of about below
   - [ ] about page: this gets the carousel
   - [ ] hire us: content TK
   - [ ] learn page maybe doesn't exist?
 - [ ] import components
   - [ ] rework PDF viewer
   - [ ] rework YouTube player
   - [ ] make standard resource component
     - [ ] make subresources that are PDFs open in their own page with local PDF.
 - [ ] responsiveness
 - [ ] accessibility testing
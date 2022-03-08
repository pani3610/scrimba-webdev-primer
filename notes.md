## Notes for Scrimba
08-03-22

#### New terminologies
+ Block positioning and inline positioning.
    + block postioning : tags like h1 span across complete width of the page.
+ Span tag for inline positioning
+ Difference between 'src' and 'href': src is to used to add that resource to the page, whereas href is used to link to a particular resource from that page.
+ Semantic tags : header,main,footer. These give more context on what the elements are. To take up nav element, that those links aren't just normal links, they are a navigation menu. This can be useful for accessibility (tabs, mobile devices,browsers, such as screen readers for disabled users, can use this element to determine whether to omit the initial rendering of this content.)
+ To use same styling for two different classes, use:
```css
    class1,class2{
        type: good
    }
```
+ font size
    + PX Unit
        + it gives you full control over the text size.
        + not relative tp anything.
        + not scalable as one would have to change settings for each element.

    + EM Unit
        + It is related to the font size of the parent container. 
        + One em (1em) is equal to the current font size.
    + [More on font size](https://css-tricks.com/almanac/properties/f/font-size/)
    + __How to change font size relative to default values assigned?__
## Notes for Scrimba
08-03-22

#### New terminologies (CSS)
+ Block positioning and inline positioning.
    + block postioning : tags like h1 span across complete width of the page.
    + Span tag for inline positioning
    + Change positioning property of any element using display property
```css
    .class{
        display :inline OR display:block
    }
```
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

+ font-family
    + Gives browser group of fonts in case it is not able to support the first font.

+ box model
    + height, width
    + border
    + padding: space added inside border
    + margin: space added outside border
    + inline: tries to begin with the same line and take as much space as minimal. __There is no point assigning height-width to them.__
    + inline-block: height,width can be assigned.
    + block: they will start from a newline and will take the complete line.
+ By default there is a gap of 4px between elements. To remove the gap:
    + add property
    ```css
        float : left;
    ```
    But this raises a warning as making an element float makes its display property as block.
    + arrange the tags with no space in the html file.
    Instead of this
    ```html
    <div class='ex'></div>
    <div class='ex'></div>
    <div class='ex'></div>
    ```
        
    try this
    

    ```html
    <div class='ex'></div><div class='ex'></div><div class='ex'></div>
    ```
+ Element position: [best explanation](https://www.freecodecamp.org/news/how-to-use-the-position-property-in-css-to-align-elements-d8f49c403a26/)
    + Static : where the element is rendered normally. No top,left etc offset are provided.
    + Relative: where the element is rendered _relative_ to its static position. Relation defined by left,right etc.
    + Fixed: where element is rendered relative to the newport (Visual section visible to the user). Used for navigation menus
    + Absolute: where element is positioned _relative_ to the nearest positioned ancestor.__The coordinates of an absolute positioned element are relative to its parent if the parent also has a non-static position.__(But why?)

+ By default, chrome and other browsers have a padding and margin around the webpage. To remove this use
```css
html, body {
    margin: 0;
    padding: 0;
}
```
+ While positioning tags in webpage, the sequence of the tags in the html has an impact. First see the default positions of all the elements and then offset.
+ Set the parent to relative for its child to have absolute values which relates the offset with parent. __The coordinates of an absolute positioned element are relative to its parent if the parent also has a non-static position.__
+ Flex-box offer tons of customization options.[more](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### New terminologies (JS)
+ String, Number, Boolean, Array, Object are data types in JS.
+ Use // for comments.
+ No out of index error for arrays. Output will be null.
+ console.log(1/0) gives _null_.
+ == vs ===
    + == comparison can be between different datatypes. Empty string is equal to 0, 1=='1' will return true.
    + === comparision is only between values of same datatype.
    + != and !== compliments these.

+ falsey statements: Following elements will evaluate to false.
    + 0
    + ""
    + null
    + undefined
    + false
    + NaN
+ 
```javascript
's'>12
```
    and

```javascript
's'<12
```
    both will return false.

+ Functions are first-class citizens. can be stored in variable like any other data-type.
+ Function parameter types are not defined in JavaScript.
+ In JavaScript, all function arguments are always passed by value. It means that JavaScript copies the values of the variables into the function arguments. Any changes that you make to the arguments inside the function do not reflect the passing variables outside of the function.
+ In JavaScript, object references are values.Because of this, objects will behave like they are passed by reference. If a function changes an object property, it changes the original value. Changes to object properties are visible (reflected) outside the function.


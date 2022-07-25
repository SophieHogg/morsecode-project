# Morse Code Project

### This project is a two-way translator between Latin letters and Morse code.

## Colour Palette

The colour palette, as with the remainder of my portfolio, utilises colours from Australian flora. Therefore, I decided to use a wattle colour palette with a lot of bright yellows, pale greys and dark, forest greens. This is based on a combination of colour palettes, including this one: https://icolorpalette.com/download/palette/526587_color_palette.jpg

## Structure

The structure of the translator is a combination between https://morsedecoder.com/ and https://morsecode.world/international/translator.html.

The page is effectively divided in two, with the left hand side being used for input and the right hand side being used for output. This is indicated by the placeholder text in the textareas.

If the page is too narrow, the boxes will instead be on top of one another to ensure that there is still space for both boxes on narrower displays without having to make them very tall and narrow.

## Functions

There are two pure functions used, morseToEnglish() and englishToMorse().

morseToEnglish() turns morse code into Latin letters and englishToMorse() turns Latin letters into morse code. Both functions ignore undefined characters.

These are both tested using their own test suites with 6 tests each. They were constructed using TDD, where the tests were written before the functions were completed.

There is one final function which empties the input and output textareas once the page is refreshed. The output does empty automatically but does not display the placeholder unless this function runs. This is not a pure function as it draws on elements of the DOM and therefore has no tests associated with it.

## Event Listener

When the input textarea is updated with any new text, the event listener triggers (using the "input" property).
This tests which function should run by using regex expressions:

-   If the input is empty, it triggers an error in the errorbox above the textareas saying to enter some text.

-   If any alphanumeric characters (or a set list of other symbols) are found, it will trigger the englishToMorse() function and convert the string into morse code. If any characters were skipped, it will inform the user by displaying a notice in the errorbox.

-   If no alphanumeric characters, it will then look for \_ - | or /. If any of these are found, it will trigger the morseToEnglish() function and convert the string into latin characters. If any characters were skipped, it will inform the user by displaying a notice in the errorbox.

-   If it finds no alphanumeric characters, defined symbols, or morse elements, it will trigger a different error in the errorbox to display the error that none of the characters entered are supported.

## Personals

At the bottom there are links to my GitHub and LinkedIn profiles which change colour on hovering or clicking.

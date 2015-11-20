# SVG User Units Converter
Convert between SVG user units and various absolute units.

This is useful when trying to do math on real-world units in SVG; just convert them all to user units then do your math.

Remember that SVG's absolute unit identifiers, though they are named after standard units (inches, millimeters, points, etc.), may not actually correspond to those sizes if the user has scaled their image. However, "1in" will always correspond to 90 user units (whatever size they may be).

The following unit identifiers are supported by this package: `px`, `pt`, `pc`, `mm`, `cm`, `in`.

## API
```javascript
var svg_units = require('svg-units')
```
### `svg_units.conversion_factors`
An object containing the raw conversion factors taken directly from [section 7.10 of the SVG 1.1 specification](http://www.w3.org/TR/SVG/coords.html#Units).
Multiply the value in units by these factors to get user units.
For example:
```javascript
// Convert "2in" to SVG user units
2*svg_units.conversion_factors.in // = 180 user units
```

### `svg_units.to_user_units`
Convert a value to user units.
```javascript
// Convert "2in" to SVG user units
svg_units.to_user_units.in(2) // = 180 user units
```

### `svg_units.from_user_units`
Convert a value from user units to the specified unit; the inverse of `svg_units.to_user_units`.
```javascript
// Convert 180 to SVG inch units
svg_units.from_user_units.in(180) // = 2 SVG inches
```

## Useful snippets
Useful things you can do with this library.
### [Swig](http://paularmstrong.github.io/swig/)
Add all of the conversions as filters:
```javascript
Object.keys(svg_units.to_user_units).forEach(function(unit) {
	swig.setFilter(unit, svg_units.to_user_units[unit]);
})
```
This allows you to then write in your templates things like:
```xml
<text font-size="12pt" x="0" y="{{ 3.5|in + 12|pt }}">Hello world!</text>
```

## Unlicense
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to &lt;[http://unlicense.org/](http://unlicense.org)&gt;

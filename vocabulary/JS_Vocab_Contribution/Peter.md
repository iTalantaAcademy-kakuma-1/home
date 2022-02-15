# Javascript vocabulary for Peter Chan
## Javascript(JS)
* Javascript is a lightweight and intrepreted that use a compiled language.

## String 
### prototype.replace  ()
 > The replace () method returns a new string with some or all matches of a pattern replaced by a replacement.
The pattern can be a string or RegExp, and the replacement can be a string or a function to be called for each match.


## Parameters
  

  >regexp (pattern)
  
A RegExp object or literal. The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.

## substr

A string that is to be replaced by newSubstr. It is treated as a literal string and is not interpreted as a regular expression. Only the first occurrence will be replaced.

## newSubstr (replacement)

The string that replaces the substring specified by the specified regexp or substr parameter. A number of special replacement patterns are supported; see the "Specifying a string as a parameter" section below.

If newSubstr is an empty string, then the substring given by substr, or the matches for regexp, are removed (rather then being replaced).

### replacerFunction (replacement)

A function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr. The arguments supplied to this function are described in the "Specifying a function as a parameter" section below.

**Return value**

A new string, with some or all matches of a pattern replaced by a replacement.
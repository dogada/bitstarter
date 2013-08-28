---
layout: 'default'
slug: 'metajs'
lang: 'en'
url: '/metajs/'
head: 'MetaJS'
title: 'Logos-oriented Lisp compiled to Javascript'
description: >
  Compiler will not just parse and compile the code, but partly will understand
  the meaning of your code and generate new code, depending on the surrounding
  context.
---

### Problem

Today compilers of computer programs analyze only the grammar of the language
and ignore the semantics of each specific program. As a result, we get the
source code with high level of redundancy. With the increasing size of the
program this naturally leads to difficulties in its support. Major changes in
the application source code become virtually impossible without causing of new
bugs and regressions.


### Solution

Imagine that you can formalize some aspects of the creation of computer
programs. Not code itself, but the code generation process. Then the
compiler will not just parse and compile the code, but partly will understand
the meaning of your code and generate new code, depending on the surrounding
context.

For example, you have a function `save-thing` that expects two required
parameters: `thing` and `db`.

```lisp
(defn save-thing (thing db))
```

Somewhere later in the program you call this function without parameters
`(save-thing)`, but the compiler knows that this function requires `thing` and
`db`, finds these parameters in the current lexical scope and generates a
complete call, for example:

```lisp
(save-thing user-thing environment.db)
```

Elsewhere the program and, respectively, in another context compiler for the
same original string `(save-thing)` will generate another call, for example:

```lisp
(save-thing backup-thing (get-secondary-db))
```

If you provide all the parameters of the called function, the compiler will not
think instead of you. It will just checks the compliance of the expected values to
the passed parameters.

Which of the available symbols in the context of the call to be used as a
function missing parameter, can be determined in several ways. The easiest way,
by the name. We can look for symbol with the name `thing` in the context of the call
and use it in place of missed parameter `thing`. Very often, parameters required
by a function are defined with the same name in the outer scope, for example:

```lisp
(defn process-thing (thing)
  (log thing)
  (save-thing))
```

Example of name matching shown above is the simplest mode that is used by
current implementation of MetaJS.

Similarly, you can search for matches in the meta-information associated with
function parameters and symbols available in the context of call. Such matching
may be based on static typing or relations between symbols defined in logoses.


### MetaJS allows compiler to generate source code. Will a computer create programs instead of a human?

The compiler will execute the instructions exactly as before, but in addition to
grammar instructions, it will also execute semantic instructions defined
specifically for your program.

Imagine that you're explaining how does your program work to a grandmother, who knows
nothing about programming &mdash; it's an old grammar compiler. Now imagine that
you're explaining the same thing to a girl with a degree in computer science &mdash;
it's a new semantic compiler. But you will have to explain in both cases.


### Source code

Unfortunately I haven't polished enough MetaJS compiler to release it publicly,
but plan to do this by the end of August 2013. I already created MetaJS repo on
GitHub, so if you wish, you can [watch it](https://github.com/dogada/metajs).

_Dmytro Dogadailo_,  
github:[dogada](https://github.com/dogada), twitter:[@d0gada](https://twitter.com/d0gada).


---
title: "Monkeypatching"
excerpt: "Very highly not recommended."
---
{: .caution}
Monkeypatching is highly not recommended, and can cause large issues with systems. When installing monkeypatched versions of some devices that have OpenWindows or another FreeNT-based system bundled, their warranty may be void. It is highly recommended to use FreeNT kernel modules instead.

# Monkeypatching the FreeNT kernel

Monkeypatching is a method of hacking software and modifying behaviour.
This is not suggested by the FreeNT project, which recommends using kernel
modules with C and TOML.

## How it works

Take something like this Python script, `foobarbaz.py`:

```python
monkeypatched = 0
def foo():
    if monkeypatched:
        print("This script was monkeypatched by changing variables")
    else:
        print("This script is unmodified")
```

Someone goes ahead into the Python REPL and does this:

```python
>>> import foobarbaz
>>> foobarbaz.foo()
  # This script is unmodified
>>> foobarbaz.monkeypatched = 1
>>> foobarbaz.foo()
  # This script was monkeypatched by changing variables
```

When `foobarbaz` was imported, `monkeypatched` was set to 0.
Then, the user ran the `foo()` function. It printed:

```
This script is unmodified
```

Later, they set the `monkeypatched` variable to 1 (`True`),
and ran the function again, and got:

```
This script was monkeypatched by changing variables
```

This is because the `monkeypatched` variable was modified
directly by the script ran by the user. Originally,
the script automatically set it to 0, meaning `False`. However, the user set it to 1,
meaning `True`, so the program interpreted
this value, and returned that the script was
monkeypatched.

## Monkeypatched FreeNT example

This script, when loaded as an init script (not a module),
monkeypatches FreeNT to make "Hello World" appear
after starting the system:
```c
/**//*FNTLOADER_MODULE_OPTION:://ignore_module//*.*/

//////////////////////////////////////////////////
// DO NOT TRY THIS ON YOUR OPENWINDOWS COMPUTER //
//////////////////////////////////////////////////
// This is going to override SERIOUS stuff used //
// in FreeNT and the owboot bootloader,         //
// e.g. all of your modules won't even load!    //
// So, avoid this if you can. ONLY TRY THIS ON  //
// A VM.                                        //
//////////////////////////////////////////////////

//////////////////////////////////////////////////////
// THIS CODE HAS BEEN EXEMPT FROM LOADING BY FREENT //
//////////////////////////////////////////////////////
// Remove the line at the top if you accept         //
// the risk of using this code:                     //
// > /**//*FNTLOADER_MODULE_OPTION:://ignore_mo     //
//   dule//*.*/                                     //
//////////////////////////////////////////////////////

#include "api/core.c"
#include "api/openwindows/ui.c"
#include <stdio.c>
int handleBootFinish() {
  createWindow("info", "FreeNT + OpenWindows = ...", "Hello World!");
}
```

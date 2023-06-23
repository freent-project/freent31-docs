---
title: Use the API for modules
excerpt: The FreeNT API is intended for modules. See how you can make one.
parent: "FreeNT API"
---
# Use the FreeNT API for modules

{: .note}
If you don't know what a module is, see [What is a module?](/what-is-mod.html).

The FreeNT API is the main dependency of most FreeNT modules. It allows interaction
between a program (such as a FreeNT module) and the FreeNT kernel.
OpenWindows APIs are also available as long as the system is OpenWindows (it usually
is).

## How to use FreeNT APIs

{: .note}
> We will be using C for our module, as other languages are currently not supported.
> The FreeNT API is available on most compilers for OpenWindows.
>
> If you don't know how to write in C, see [Learn C in Y minutes](https://learnxinyminutes.com/docs/c/).

Take a program such as this:

```c
// Loads the FreeNT API
#include "freent/api/con.c"
int main () {
  // Prints: Hello world! 
  paperlogPrint("Hello world!");
}
```

This is a possible `hello.freent.toml` file for this module:
```toml
[freent.kernelmodule.info]
name = "Hello World!"
description = "Greet the world in your log"
scripts = {} # The freent.c file is automatically loaded
```

{: .note}
> The name of the file should be `freent.c`, else it will be hard to identify if the file is for FreeNT.
> Accordingly, the first part of the TOML manifest name should be an internal name for the module,
> which will only be shown in developer mode.

This code will print `Hello world!` to the Paperlog file, containing logs for FreeNT systems.
More complex modules can be written using other available APIs.

## Use the module

Run the following commands in the location of your module:

```bat
fntcomp freent.c --freent-module
module install freent.ntmod --testing
shutdown /r /t 0
```

The module will appear in **Settings** > **Modules** or any other available module manager for your
system.

## Make it open-source

FreeNT encourages you to distribute the source code of your modules under a free-and-open-source license,
such as the OpenWindows or MIT license.
FreeNT, despite licensing its OS and kernel under the OWL, licenses some of its software under the MIT license.

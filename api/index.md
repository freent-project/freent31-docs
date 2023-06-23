---
title: FreeNT API
excerpt: Extend the FreeNT system and program a kernel module using the FreeNT API.
nav_order: 7
---
{: .fs-9 }
# FreeNT API
{: .fs-6 .fw-300 }
The FreeNT API is a library for interacting with FreeNT systems, such as OpenWindows and the so-called "ow-repair". It encourages using [kernel modules](/what-is-mod.html) instead of [monkeypatching](/monkey.html) FreeNT source code.

---

This part of the FreeNT documentation has documentation on the FreeNT API and its functions.

## Supported languages

{: .note}
C is the recommended language for using the FreeNT API, as C has the most up-to-date and recent FreeNT APIs. Modules can only be written in C, as FreeNT cannot run code from any other programming language, unless a frontend is available to run the non-C code. As a workaround, you can directly execute a non-C script using C's `system()` function. However, this only works when the specific programming language is installed, else FreeNT will end up in a kernel panic, and with the FreeNT kernel stability rules, automatically turn off all modules (not just yours).

FreeNT APIs are available officially in the following languages:
* C (recommended)
* C++
* Python
* Java

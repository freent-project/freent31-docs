---
title: "Why not use NT kernels?"
excerpt: "Short answer: It's not open-source. Long answer: Check this page."
---
# Why doesn't OpenWindows use Microsoft Windows NT?
{: .note }
This is an essay. It's nothing to do with development. There should be general consensus whether this should be moved to the OpenWindows README.

FreeNT's goal is to completely create Windows NT under GNU-FS and OSS guidelines.
Microsoft Windows NT is a proprietary product and cannot be used in OpenWindows.

Windows did not always use NT. Until XP, home versions used DOS.
Windows NT was introduced in around 1994 as a business OS. Since Windows XP, the home and business kernel
were the same NT - Microsoft dropped DOS from the Windows infrastructure.

{: .note }
FreeNT is a **Windows-like kernel**, and only differs *slightly* from Windows. The most noticeable change is that unlike a Windows NT kernel, a FreeNT Kernel supports system modules which are not actual programs part of the OS, but rather small C files that the kernel executes when all FreeNT (and OpenWindows) APIs have been initialized.

## Alternative

OpenWindows Workstation (also useful for home users) allows choosing to install Win32 programs.
Most people will want this. You must avoid enabling Win32 if you are looking to avoid proprietary
software.

You can also use Microsoft Windows instead of OpenWindows, which unfourtunately does not support OW32,
meaning apps that are built on top of it will not run and must be replaced with Win32 versions. Use
**OpenWindows Flash** to flash a Windows image (you must have the URL or a Windows image on local storage).

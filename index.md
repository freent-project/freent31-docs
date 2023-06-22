---
title: FreeNT Documentation - for the developers
excerpt: FreeNT is an open-source kernel developed to replace Windows
---

{: .warning}
This documentation is intended for developers. If you are not a developer, you are not at the right place. OpenWindows 11 help is available at https://freent-project.github.io/openwindows11-help.

FreeNT replaces Windows with an open-source operating system. From command-lines such
as `fntsh` to kernel modules such as `win32-vm`, FreeNT is powerful.

The FreeNT Documentation documents FreeNT kernel calls and FreeNT development.

[Search the docs](#search-input){: .btn }

## Documentation contributors

Thanks to everyone who helped writing the docs!

{: .tip}
This is a dynamic list. To add yourself to this list, simply make a pull request to [`freent-project/freent31-docs`](https://github.com/freent-project/freent31-docs), and you'll appear here.

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img style="border-radius: 100%;" src="{{ contributor.avatar_url }}" width="32" height="32" title="{{ contributor.login }}"></a>
  </li>
{% endfor %}
</ul>

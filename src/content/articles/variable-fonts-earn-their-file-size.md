---
pubDate: 2026-10-12
author: ingrid-solberg
title: "Variable fonts finally earn their file size"
description: "Variable fonts used to be heavier than the static files they replaced. New tooling has changed that, and it is time to look again."
cover:
  url: "/src/images/covers/variable-fonts-earn-their-file-size.svg"
  alt: "Three stems getting heavier from left to right on a purple ground"
topics:
  - type
---

When variable fonts arrived, the pitch was simple: one file instead of six. The reality was a single file that weighed more than the three weights most sites actually used.

## What changed

Subsetting tools now handle variable fonts properly. You can keep only the axes you need, trim the weight range to the part you use, and drop the characters you will never set. A file that once weighed 300 kilobytes can come in under 60.

## When to switch

If your site uses three or more weights of the same family, a trimmed variable file is almost always smaller. If you use one weight, a static file is still the better choice.

## A quick checklist

- List the weights and styles your site really uses.
- Trim the weight axis to that range.
- Subset to the languages you publish in.
- Compare the result with your current static files before you ship.

The promise of variable fonts was always good. The files have finally caught up.

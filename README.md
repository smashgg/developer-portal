# smash.gg Developer Portal
A place for developers interested in smash.gg's API

## How do I contribute documentation?
Great question!

1. Fork/checkout this repo.
2. Add your .md file in the correct place in the `/docs` directory
3. Add the path to your doc file in website/sidebars.json
4. Open a pull request with these changes and wait for approval :)

## Super Quick Tips re: Docs

Here are some quick tips for your docs!

1. Make sure to use H2's as these are used for page nav. Especially for Request and Response in your examples
2. If you are linking to an external page (ie not on developer.smash.gg/*) please have these open in a new tab using
`<a href="https://external-site.example" target="_blank">Hyperlink text</a>`
3. If you are linking to a page within developer.smash.gg,
please link it as `[hyperlink text](/page)` instead of `[hyperlink text](https://developer.smash.gg/page)`
4. Try to keep your characters per line to around 80.
This helps prevent merge conflicts and is generally better for version control.

For those of you using Visual Studio Code, there are two recommended extensions:
- <a href="https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one" target="_blank">Markdown All In One:</a>
This extension allows for easy preview and editing.
- <a href="https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint" target="_blank">Markdownlint:</a>
For good quality Markdown files and warnings when breaking style rules.

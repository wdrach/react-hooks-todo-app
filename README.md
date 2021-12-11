# react-hooks-todo-app.... sorta

Hi friends, let's get into the important stuff first

## Build & Serve
You can run this locally by calling:
```
$ yarn
$ yarn start
```

If you're getting this via the zip, welcome! It's also [available on Github](https://github.com/wdrach/react-hooks-todo-app) with a full commit history, actions, PRs with nice diffs, etc.

*note - even local ui hits the real database, so don't put anything naughty in your todos!*

## Don't Build & Serve
Just go [here](https://wdrach-react-todo.web.app/) and play around with it!

## Context & Story
### Disclaimer - Excessiveness
This is a bit excessive. Mostly, I just wanted to push my limits since I've been working almost exclusively in Angular and Vue over the past year, and I needed to buff up on my React skills anyways.

### Additions
I really wanted to use a unified design system here, and I wasn't about to go building one myself. I also didn't want to just jump to Material either, no reason to be that basic. If you've looked at my [personal site](http://www.drach.co) you'll notice that it's a very simple site that incoporates our favorite early 2000s Microsoft Word aesthetic. I wanted to take this a step further, and found a library that would help! React95 combines our favorite Windows 95 designs with a modern design system, so it was an easy win.

The windows system came from that as well. I needed *some* real Redux store to be happy with my implementation there, and it made sense to make a little OS on top of my page. That window manager is simplistic, but the concepts are there, and it's a clean Redux implementation.

The Firebase piece was a bit weird. Super straightforward in that there's a Redux plugin for it, and super obscure in that I had to relearn a lot of the APIs. Stuff like sorting the todos by priority is done really easily though! Firebase also handles authentication without much trouble, and I love making apps that *feel* personal even though they're really not.

There's also a whole hidden deployment piece. Turns out Firebase has an option to set up automatic deployments with Github, so that's pretty cool!

### Room for improvement
Much like any fun, quick project like this, it's not perfect, so here's a few things I'd fix if I were pushing this out to real consumers:
 * My linting isn't perfect, in particular I think somehow VS Code marked this project as using tabs for indentation, so there's some inconsistency there. Also spacing in general, single quotes vs double quotes, etc. Easy thing to configure and fix if I had extra time
 * Speaking of inconsistency, there's some inconsistency in my React code as well. In particular, I'd like to avoid mixing and matching hooks vs HOCs when one or the other would have sufficed.
 * Styling was just a time crunch thing. I'd like to move those styles into proper css/sass files, but since I'm not actively "managing" those styles between a team, it was more convenient to keep them close to the component. Lots of work for the same result visually.
 * The responsiveness is *ok* for desktop devices, but not ideal for mobile devices. This is because of some limitations with the React95 buttons that make it difficult for the todos box to get small enough to fit. The windows system is also dependent a bit on a big screen area. If I were to make this responsive, I'd probably make sure everything is in a sass/css class instead of the current styles, and then I could use media queries to esssentially stack all of the "windows" on top of each other for best results.

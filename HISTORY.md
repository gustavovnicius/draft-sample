I couldn't work much on this challenge over the weekend. But since Thursday I was thinking about the problem and how an ideal solution would be. I soon realized that it isn't a trivial problem. I would have some problems handling the text selection and referring it on the comments. At Sunday I started by looking at Draft.js, I had never worked with it so I made a fully functional spike to solve the problem.
When I was happy with the solution I threw the spike away and started this repo.

Basically I put together two different things: This official example from draft-js: https://github.com/facebook/draft-js/blob/master/examples/draft-0-10-0/link/link.html and this plugin extension: https://github.com/draft-js-plugins/draft-js-plugins/tree/master/draft-js-buttons

The logic behind the solution is pretty simple: When the user selects the text and clicks on the tooltip button it creates an DraftEntityInstance and apply it on the Draft.js EditorState. Then, a decoration logic is applied on the content. The decorated content is composed of a span element with an id that wraps the content, because of that it is possible to identify the span's id and to `scrollIntoView` on it.

Pros:
- The Draft.js is impressive. It already has all the logic that you should implement if you are in need of a JS editor. Also, it is pretty extensible and customizable

- It is pretty easy to integrate it with React / Redux or any other library that implements the Flux Architecture.

- It (Draft.js) is compatible with mobile browsers and interactions.

Cons:
- You'll need to know at least a bit of functional programming. Basically everything is built upon the Immutable.js lib and all the functions that you have access to are stateless, it's nothing hard, but if you don't understand FP you'll experience some issues or difficulties.

- There are still some difficulties, the Entity system could be a bit more evolved and mature. I faced some difficulties trying to extract the commented text, so the solution I've found was to save the SelectionState inside the Entity data. But also, nothing that is impossible to do.

Things that I would do if I had more time:

- Increase the test coverage
- Refactor the `scrollIntoView`
- Improve the user experience (add more styles, refactor some behaviors, etc.)

# Final considerations
I tried to do a simple and clean code. Tried also to decouple things as much as possible and to concentrate all the logic into the editor reducer. It is somewhat responsive and mobile compatible.

To be honest, I've never worked with a JS text editor before, I really liked to do this coding challenge and learned a lot from it. I hope you guys enjoy it as much as I enjoyed doing it.

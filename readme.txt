1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
***********************************************************************************************

Ans:    getElementById- Returns the single element with the specified ID.
        getElementsByClassName- Returns a HTMLCollection of all elements with the class you provide.
        querySelector- Returns the first element that matches a CSS selector.
        querySelectorAll- Returns a static NodeList of all elements that match a CSS selector.

2. How do you create and insert a new element into the DOM?
***********************************************************************************************

Ans:    document.body.appendChild(document.createElement("p"));

3. What is Event Bubbling? And how does it work?
***********************************************************************************************
Ans:    Bubbling allows event delegation.It’s the opposite of capturing, where events travel
        from the root down to the target.Useful for performance optimization and cleaner code.

4. What is Event Delegation in JavaScript? Why is it useful?
***********************************************************************************************

Ans:    Event delegation in JavaScript is a technique where instead of attaching event listeners to
        multiple child elements.event delegation leverages bubbling to make event handling more efficient and scalable. 

5. What is the difference between preventDefault() and stopPropagation() methods?
***********************************************************************************************

Ans:    event.preventDefault()- Prevents the browser’s default action for an event
        event.stopPropagation()- Stops the event from bubbling up (or capturing down) the DOM tree, stopping parent handlers from being triggered.



GitHub Repository Link: https://github.com/khalidhasan-m/assignment4
Live Site Link: https://khalidhasan-m.github.io/assignment4/
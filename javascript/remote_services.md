# Remote services and integration

So far we've been writing HTML, CSS and JS with our own variables and data, in our computer. We open these files in our browser, and the browser shows the results on the screen. We're building websites, but right now we're the only ones able to see them!
The beauty of the internet is that we can see any public website. When type a URL (like `https://www.google.com`) in the search bar and we hit `Enter`, we're downloading the HTML, CSS and JS files that Google gives us and the browser prints the content on the screen.
If we open the browser's inspector and navigate to the 'Network' tab, we can see all the files that the browser is downloading behind the scenes.

INSERT IMAGE HERE

It's a little bit like going to a restaurant. You tell the waiter what you want, the waiter goes to the kitchen and gives the a message with the order, and when the food is ready, the waiter brings the food to your table.

In software development, we call this a _client/server architecture_. The browser is the **client**, which makes a request to a computer somewhere else in the world that has the files we're looking for. This is called the **server**, because it 'serves' the files when anyone requests them. And the **URL** tells the server what files do we want.

https://www.google.com/search?q=cute+cats

URL ANATOMY

In the past, the only way the web worked was

1. The user typed a URL on the search bar (www.website.com)
2. The website's home page HTML file was downloaded and rendered on screen.
3. The user clicked a link to another page (www.website.com/about-us)
4. Again, the corresponding page's HTML file was downloaded and rendered on screen.
   ...

But then, with Javascript people started dynamically changing the HTML, without the need to load a new HTML page each time the user interacts (as we've seen in the DOM manipulation section of the course). This eventually grew into what we call SPAs (Single Page Applications), where we only get one index.html page at the beginning and everything after that is done through Javascript (which we'll do when we start using React).
In this last scenario, we still need information from the server. If we log into Facebook, we see our own username, our profile picture, our friend's posts, etc. We can use Javascript to ask the server to send us this information in a file format called JSON.

In most applications, we're going to be using data that is not saved in the user's computer. Picture a website like Facebook. There's thousands of users, posts, messages, etc. but when we load the page, we see our own profile picture, our name, our friend's posts and the messages that have been sent to us. This happens in any computer we log in. Facebook is

This is the site for counting votes of audience in your election. 
This document will say you requirements and how to use it.


Security disclaimer
===================

The guest should not have access to the keyboard or any way how to manipulate the computer, he could for example delete 
your cookies and you will loose all your voting data!

About project
=============

The project was quickly developed for one of the events that i was helping with. I used cookies even that are not so 
secure, because i need to work it offline on any computer without any installation (for example web server). It was for 
me the best choose for that time.

Requirements
============

- a modern web browser (Chrome is recommended. Please, don't use Internet Explorer or similar shit)
- enabled JavaScript and Cookies
- a NFC card reader or another way to simulate keyboard input

How to use it
=============

First, you need to create list of candidates in your site. First edit the index.html file. Here you can find list of 
candidates, here in this example 5 of them (line 19-23). Put names of them here. After that, edit the 
`/inc/css/candidates.css` file. Here you can add photos and header colors of candidates. If you have a different number 
of candidates than 5, edit a `/inc/css/style.css` file, on line 15 you have `width: 20%;`. the number is calculated as 
100/*number of candidates* (100/5 = 20).

If you have more than 5 candidates, we recommend you a different layout, because the "strips" for candidates would be 
really thin.

Then you need to setup your card reader or another kind of user input, that it will type a unique code of every card 
(guest), ending with pressing enter (javascript key code 13). After that, you can visit the cards.html file (open it in 
web browser), where you can create whitelist of cards (that make prevents that you can vote only with approved cards, 
not any random card that visitor can have).

You can edit texts of the site in the `/inc/js/constants.js`

Finally, open index.html in web browser and the voting can start! (of course test if before event)

The final results are on `results.html` file (open it in web browser)

I hope this site will help with your events.


----

Found a mistake/typing error? Pull requests are appreciated.
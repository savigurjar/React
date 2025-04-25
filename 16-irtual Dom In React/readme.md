<!-- myth -->

1.Virtual DOM ab react me use nhi hota
2.js: code hota he, vo fir se re-render hota hai poore code ko,React sirf kisi particular ko krta h re-render

DOM- Document object model
reflow- unki(element)eg.button position and size kitna hoga
repaint: pixel:color ko attach krna

react- batch update , fragmention
react khud ka DOM create krta h virtual DOM -

react virtal old DOM - Diffing Algorithm - Virtal DOM -> = batch update -> realDOM (with update)

key = deal update : samose wale node ko add karo,starting main add kro baki node ko ek ek position piche khiska do , old node ko realse kr do

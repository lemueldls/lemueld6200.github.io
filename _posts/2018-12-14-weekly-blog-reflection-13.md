---
  layout: post
  title: "The American Flag - In Process"
  date: 2018-12-14
---

This week, I am making the American Flag in [WeScheme]("https://www.wescheme.org/").
My challenges were figuring out how to make this flag scalable, meaning I could change one value, and it would change the shape of the entire flag, as explained in the [previous blog](/blog/2018/12/07/weekly-blog-reflection-12).  
  
My process in thinking was trying to make the width and height of the flag right first. I then added the red and white stripes for the American Flag. The geometry of each stripe is the width times 1/13, by the length of the flag. I made the stripes red, but I found out the color for the flag is "Old Glory Red" and "Old Glory Blue". So, I used the "make-color" function to create these colors.
```scheme
(define old-glory-red (make-color 187 19 62))
(define old-glory-blue (make-color 0 38 100))
```
So, I made the stripes.
```scheme
(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w (/ 1 13)))
```


# Questions:
 - What funcitons do I use for certain positions of the shapes.
 
# Challenges:
 - I can't get the stars in the right place, or get the right shape.
 
# Opportunities:
 - 


```scheme
;; Width of flag:
(define w 250)
;; The length is 1.9 times more than the width:
(define l (* w 1.9))

;; Custom Colors for the US Flag:
(define old-glory-red (make-color 187 19 62))
(define old-glory-blue (make-color 0 38 100))

;; US Flag Union:
(define US-Union
	(rectangle (* w 0.76) (* w (/ 7 13)) "solid" old-glory-blue))

;; US Flag Base:
(overlay/align "left" "top"
	(underlay/align "left" "top"
		(overlay/xy
			(rectangle l (* w (/ 1 13)) "solid" old-glory-red) 0 (* 2 (* w 1/13))
			(overlay/xy
					(rectangle l (* w (/ 1 13)) "solid" old-glory-red) 0 (* 2 (* w 1/13))
					(overlay/xy
							(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w (/ 1 13)))
							(overlay/xy
									(rectangle l (* w (/ 1 13)) "solid" old-glory-red) 0 (* 2 (* w (/ 1 13)))
									(overlay/xy
											(rectangle l (* w (/ 1 13)) "solid" old-glory-red) 0 (* 2 (* w (/ 1 13)))
											(overlay/xy
													(rectangle l (* w (/ 1 13)) "solid" old-glory-red) 0 (* 2 (* w (/ 1 13)))
													(rectangle l (* w (/ 1 13)) "solid" old-glory-red)))))))
		US-Union)
	(rectangle l w "outline" "black"))
```

![American Flag WIP](/img/wescheme/AmericanFlagWIP.png)

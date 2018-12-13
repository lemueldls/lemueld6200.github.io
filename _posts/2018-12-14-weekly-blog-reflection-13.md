---
  layout: post
  title: "The American Flag"
  date: 2018-12-14
---

I am making the American Flag in WeScheme.
My challenges were figuring out how to make this flag scalable, meaning I could change one value, and it would change the shape of the entire flag, as explained in the [pervious blog](/blog/2018/12/07/weekly-blog-reflection-12).

# Questions:
 - What funcitons do I use for certain positions of the shapes.
 
# Challenges:
 - I can't get the stars in the right place, or get the right shape.
 
# Opportunities:
 - 


```scheme
;; Width of flag:
;; Width of flag:
(define w 500)
;; The length is 1.9 times more than the width:
(define l (* w 1.9))

;; Custom Colors for the US Flag:
(define old-glory-red (make-color 187 19 62))
(define old-glory-blue (make-color 0 38 100))

;; US Flag Union:
(define US-Union
	(underlay/xy
		(rectangle (* w 0.76) (* w 7/13) "solid" old-glory-blue) (* w 0.063) (* w 0.054)
	(overlay/xy
	(radial-star 5 (* w 0.0616) (* 2 (* w 0.0616)) "solid" "white") (* 1.63 (* w 0.063)) 0
	(radial-star 5 (* w 0.0616) (* 2 (* w 0.0616)) "solid" "white"))))

;; US Flag Base:
(overlay/align "left" "top"
	(underlay/align "left" "top"
		(overlay/xy
			(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
			(overlay/xy
				(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
				(overlay/xy
					(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
					(overlay/xy
						(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
						(overlay/xy
							(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
							(overlay/xy
								(rectangle l (* w 1/13) "solid" old-glory-red) 0 (* 2 (* w 1/13))
								(rectangle l (* w 1/13) "solid" old-glory-red)))))))
				US-Union)
	(rectangle l w "outline" "black"))

```
                                        

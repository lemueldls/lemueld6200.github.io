---
  layout: post
  title: "The American Flag"
  date: 2018-12-14
---

```scheme
;; Width of flag:
(define w 150)
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
		(star (* w 0.0616) "solid" "white") (* 1.63 (* w 0.063)) 0
		(overlay/xy
		(star (* w 0.0616) "solid" "white") (* 1.63 (* w 0.063)) 0
		(overlay/xy
		(star (* w 0.0616) "solid" "white") (* 1.63 (* w 0.063)) 0
		(overlay/xy
		(star (* w 0.0616) "solid" "white") (* 1.63 (* w 0.063)) 0
		(overlay/xy
		(star (* w 0.0616) "solid" "white") (* 1.63 (* w 0.063)) 0
		(star (* w 0.0616) "solid" "white"))))))))

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
                                        

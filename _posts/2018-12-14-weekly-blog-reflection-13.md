---
  layout: post
  title: ""
  date: 2018-12-14
---

```javascript
function x(att) {
    return x * y;
}
var y = {
    x: 3
};
x(y.x);
```

```wescheme
;; Width of flag:
(define w 150)
;; The length is 1.9 times more than the width:
(define l (* w 1.9))

(define (neg n)
    (- n (* n 2)))

(define old-glory-red (make-color 187 19 62))
(define old-glory-blue (make-color 0 38 100))

(define US-Union
    (put-image
        (star (* w 0.0616) "solid" "white") 9.45 80
    	(rectangle (* w 0.76) (* w 7/13) "solid" old-glory-blue)))

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
                                        

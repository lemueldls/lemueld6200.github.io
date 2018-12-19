---
  layout: post
  title: "The American Flag - Final Form"
  date: 2018-12-21
---

## My Program

-   I designed this flag for the United States of America.
-   I would expect my grade to be a 4(100%) because my flag is both scalable and geometrically accurate.

My challanges on the [previous blog](/blog/2018/12/14/weekly-blog-reflection-1.md) were creating the stars.

## Current Output

* * *
![American Flag Final](/img/wescheme/AmericanFlagFinal.png)  
* * *

## My Process

 - My challanges on the [previous](/blog/2018/12/14/weekly-blog-reflection-1.md) blog were creating the stars. In the geomerty of the American Flag
 ![American Flag Geomerty](/img/flag/AmericanFlagGeomerty.gif)  
 It shows the radius of the stars, (K) = 0.0616. Now I tried just using the funciton as
 ```scheme
 (star (* w 0.0616) "solid" "white")
 ```
 But, the star function takes in the side length, meaning I can't add it like the radius.
 But now, thanks to [Mr. Allatta](https://github.com/MrAllatta/), he gave me a function to turn the raduis into the side length of the star.
 ```scheme
 ; star-radius : Number String String -> Image
 ; converts radius to side length 
 ; looked up formula for converting between side-length and 
 ; radius of pentagon
 (define (star-radius radius mode color)
 	(local
 		[(define STAR-SIDE-LENGTH (* 2 radius (sin (/ pi 5))))]
 		(star STAR-SIDE-LENGTH mode color)))
 ```
 So, I can just change the "star" function for a "star-radius" function
 ```scheme
 (star-radius (* w 0.0616) "solid" "white")
 ```
## Explaining My Code.

-   Choose a significant part of your program (15 lines max) and paste it below. Do not insert your entire program here. _then delete this instruction_
-   Explain each argument in the code section. _then delete this instruction_
-   Tell us how it functions independently and within the whole program _then delete this instruction_

* * *

```
Insert 10-15 line code section here _then delete this instruction_
```

* * *

-   Explain the code you posted by telling us about each argument.
-   Then tell us how your code section fits into the whole.
 
<!--- Delete this comment and add your writing -->
```scheme
;; Width of flag:
(define w 500)
;; The length is 1.9 times more than the width:
(define l (* w 1.9))

; star-radius : Number String String -> Image
; converts radius to side length 
; looked up formula for converting between side-length and 
; radius of pentagon
(define (star-radius radius mode color)
	(local
		[(define STAR-SIDE-LENGTH (* 2 radius (sin (/ pi 5))))]
		(star STAR-SIDE-LENGTH mode color)))

;; Custom Colors for the US Flag:
(define old-glory-red (make-color 187 19 62))
(define old-glory-blue (make-color 0 38 100))

;; US Flag Union:
(define US-Union
	(put-image
		(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* w 0.063) (* w 0.054)
		(put-image
			(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* w 0.054)
			(put-image
				(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* w 0.054)
				(put-image
					(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* w 0.054)
					(put-image
						(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* w 0.054)
						(put-image
							(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* w 0.054)
							(put-image
								(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 2 (* w 0.054))
								(put-image
									(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 2 (* w 0.054))
									(put-image
										(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 2 (* w 0.054))
										(put-image
											(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 2 (* w 0.054))
											(put-image
												(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 2 (* w 0.054))
												(put-image
													(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* w 0.063) (* 3 (* w 0.054))
													(put-image
														(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 3 (* w 0.054))
														(put-image
															(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 3 (* w 0.054))
															(put-image
																(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 3 (* w 0.054))
																(put-image
																	(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 3 (* w 0.054))
																	(put-image
																		(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 3 (* w 0.054))
																		(put-image
																			(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* w 0.063) (* 5 (* w 0.054))
																			(put-image
																				(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 4 (* w 0.054))
																				(put-image
																					(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 4 (* w 0.054))
																					(put-image
																						(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 4 (* w 0.054))
																						(put-image
																							(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 4 (* w 0.054))
																							(put-image
																								(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 4 (* w 0.054))
																								(put-image
																									(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 5 (* w 0.054))
																									(put-image
																										(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 5 (* w 0.054))
																										(put-image
																											(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 5 (* w 0.054))
																											(put-image
																												(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 5 (* w 0.054))
																												(put-image
																													(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 5 (* w 0.054))
																													(put-image
																														(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 6 (* w 0.054))
																														(put-image
																															(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 6 (* w 0.054))
																															(put-image
																																(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 6 (* w 0.054))
																																(put-image
																																	(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 6 (* w 0.054))
																																	(put-image
																																		(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 6 (* w 0.054))
																																		(put-image
																																			(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* w 0.063) (* 7 (* w 0.054))
																																			(put-image
																																				(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 7 (* w 0.054))
																																				(put-image
																																					(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 7 (* w 0.054))
																																					(put-image
																																						(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 7 (* w 0.054))
																																						(put-image
																																							(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 7 (* w 0.054))
																																							(put-image
																																								(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 7 (* w 0.054))
																																								(put-image
																																									(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 8 (* w 0.054))
																																									(put-image
																																										(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 8 (* w 0.054))
																																										(put-image
																																											(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 8 (* w 0.054))
																																											(put-image
																																												(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 8 (* w 0.054))
																																												(put-image
																																													(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 8 (* w 0.054))
																																													(put-image
																																														(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* w 0.063) (* 9 (* w 0.054))
																																														(put-image
																																															(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 9 (* w 0.054))
																																															(put-image
																																																(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 9 (* w 0.054))
																																																(put-image
																																																	(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 9 (* w 0.054))
																																																	(put-image
																																																		(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 9 (* w 0.054))
																																																		(put-image
																																																			(star-radius (* 0.5 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 9 (* w 0.054))
																																																			(rectangle (* w 0.76) (* w (/ 7 13)) "solid" old-glory-blue))))))))))))))))))))))))))))))))))))))))))))))))))))

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
	(rectangle l w "solid" "white"))
	
```

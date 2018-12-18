---
  layout: post
  title: "The American Flag - Final Form"
  date: 2018-12-21
---

# I DID IT!  
I did it...  
I made the American Flag..  
My challanges on the [previous blog](/blog/2018/12/14/weekly-blog-reflection-13) were creating the stars, and, I did it.

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
	(put-image
		(star (* 0.75 (* w 0.0616)) "solid" "white") (* w 0.063) (* w 0.054)
		(put-image
			(star (* 0.75 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* w 0.054)
			(put-image
				(star (* 0.75 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* w 0.054)
				(put-image
					(star (* 0.75 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* w 0.054)
					(put-image
						(star (* 0.75 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* w 0.054)
						(put-image
							(star (* 0.75 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* w 0.054)
							(put-image
								(star (* 0.75 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 2 (* w 0.054))
								(put-image
									(star (* 0.75 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 2 (* w 0.054))
									(put-image
										(star (* 0.75 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 2 (* w 0.054))
										(put-image
											(star (* 0.75 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 2 (* w 0.054))
											(put-image
												(star (* 0.75 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 2 (* w 0.054))
												(put-image
													(star (* 0.75 (* w 0.0616)) "solid" "white") (* w 0.063) (* 3 (* w 0.054))
													(put-image
														(star (* 0.75 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 3 (* w 0.054))
														(put-image
															(star (* 0.75 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 3 (* w 0.054))
															(put-image
																(star (* 0.75 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 3 (* w 0.054))
																(put-image
																	(star (* 0.75 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 3 (* w 0.054))
																	(put-image
																		(star (* 0.75 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 3 (* w 0.054))
																		(put-image
																			(star (* 0.75 (* w 0.0616)) "solid" "white") (* w 0.063) (* 5 (* w 0.054))
																			(put-image
																				(star (* 0.75 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 4 (* w 0.054))
																				(put-image
																					(star (* 0.75 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 4 (* w 0.054))
																					(put-image
																						(star (* 0.75 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 4 (* w 0.054))
																						(put-image
																							(star (* 0.75 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 4 (* w 0.054))
																							(put-image
																								(star (* 0.75 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 4 (* w 0.054))
																								(put-image
																									(star (* 0.75 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 5 (* w 0.054))
																									(put-image
																										(star (* 0.75 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 5 (* w 0.054))
																										(put-image
																											(star (* 0.75 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 5 (* w 0.054))
																											(put-image
																												(star (* 0.75 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 5 (* w 0.054))
																												(put-image
																													(star (* 0.75 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 5 (* w 0.054))
																													(put-image
																														(star (* 0.75 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 6 (* w 0.054))
																														(put-image
																															(star (* 0.75 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 6 (* w 0.054))
																															(put-image
																																(star (* 0.75 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 6 (* w 0.054))
																																(put-image
																																	(star (* 0.75 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 6 (* w 0.054))
																																	(put-image
																																		(star (* 0.75 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 6 (* w 0.054))
																																		(put-image
																																			(star (* 0.75 (* w 0.0616)) "solid" "white") (* w 0.063) (* 7 (* w 0.054))
																																			(put-image
																																				(star (* 0.75 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 7 (* w 0.054))
																																				(put-image
																																					(star (* 0.75 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 7 (* w 0.054))
																																					(put-image
																																						(star (* 0.75 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 7 (* w 0.054))
																																						(put-image
																																							(star (* 0.75 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 7 (* w 0.054))
																																							(put-image
																																								(star (* 0.75 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 7 (* w 0.054))
																																								(put-image
																																									(star (* 0.75 (* w 0.0616)) "solid" "white") (* 2 (* w 0.063)) (* 8 (* w 0.054))
																																									(put-image
																																										(star (* 0.75 (* w 0.0616)) "solid" "white") (* 4 (* w 0.063)) (* 8 (* w 0.054))
																																										(put-image
																																											(star (* 0.75 (* w 0.0616)) "solid" "white") (* 6 (* w 0.063)) (* 8 (* w 0.054))
																																											(put-image
																																												(star (* 0.75 (* w 0.0616)) "solid" "white") (* 8 (* w 0.063)) (* 8 (* w 0.054))
																																												(put-image
																																													(star (* 0.75 (* w 0.0616)) "solid" "white") (* 10 (* w 0.063)) (* 8 (* w 0.054))
																																													(put-image
																																														(star (* 0.75 (* w 0.0616)) "solid" "white") (* w 0.063) (* 9 (* w 0.054))
																																														(put-image
																																															(star (* 0.75 (* w 0.0616)) "solid" "white") (* 3 (* w 0.063)) (* 9 (* w 0.054))
																																															(put-image
																																																(star (* 0.75 (* w 0.0616)) "solid" "white") (* 5 (* w 0.063)) (* 9 (* w 0.054))
																																																(put-image
																																																	(star (* 0.75 (* w 0.0616)) "solid" "white") (* 7 (* w 0.063)) (* 9 (* w 0.054))
																																																	(put-image
																																																		(star (* 0.75 (* w 0.0616)) "solid" "white") (* 9 (* w 0.063)) (* 9 (* w 0.054))
																																																		(put-image
																																																			(star (* 0.75 (* w 0.0616)) "solid" "white") (* 11 (* w 0.063)) (* 9 (* w 0.054))
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

![American Flag Final](/img/wescheme/AmericanFlagFinal.png)

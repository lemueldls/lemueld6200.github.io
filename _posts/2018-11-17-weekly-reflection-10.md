---
    layout: post
    title: "Weekly Reflection 10"
    date: 2018-11-17
---

Today we made a screenshot of our game.
![Wescheme Screenshot](/img/wescheme/Wescheme Screenshot.png)
I used the code,
```scheme
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; 0. Game title: Write the title of your game here
    (define TITLE "The Potato King")
    (define TITLE-COLOR "DarkGoldenrod")

    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; Graphics - danger, target, projectile and player images
    (define PLAYER
      (scale 0.5
             (bitmap/url "https://lemueld6200.github.io/Potato.png")))
    (define BACKGROUND
      (scale 0.25
             (bitmap/url "https://cdn.cnn.com/cnnnext/dam/assets/160111112610-hong-kong-mcdonalds-next.jpg")))
    (define TARGET
      (scale 0.025
             (bitmap/url "http://i.imgur.com/IK9NKkt.png")))
    (define DANGER
      (scale 0.5 
             (bitmap/url "https://mbtskoudsalg.com/images/mcdonalds-clown-png-1.png")))


    ;; here's a screenshot of the game, with the PLAYER at (320, 240),
    ;; the TARGET at (400 500) and the DANGER at (150, 200)
    (define SCREENSHOT (overlay/align "center" "top"

                                      (overlay/align "center" "top"
                                      (text TITLE 64 TITLE-COLOR)
                                                     (text TITLE 66 "black"))
                                      (put-image DANGER
                                    400 100
                                    (put-image TARGET
                                               250 175
                                               (put-image PLAYER
                                                          80 90
                                                          BACKGROUND)))))
```
to create the image.

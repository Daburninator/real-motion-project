/**
 * 8 Concepts Learned (Pick the 8 you used, delete the others):
 * 
 * -Sprites
 * 
 * -Sprite Position (coordinates: x and y)
 * 
 * -Controller (dx) and move mySprite with buttons
 * 
 * -overlap Events / sprite kind
 * 
 * -"Spawning" sprites: create and on created
 * 
 * -random
 * 
 * -Displaying numbers (1, 2, 3) as a string ("123")
 * 
 * -score and life
 * 
 * -countdown
 * 
 * -stay in screen and ghost
 * 
 * -set image
 * 
 * -sprite say
 * 
 * -splash
 * 
 * Key Features (List the Key Features You Will Need For Your Game, replace examples)
 * 
 * - ex. Playable Sprite
 * 
 * - ex. player can move up/down left/right
 * 
 * - ex. player can collide with enemy
 * 
 * - ex. enemy decreases player life
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let mySprite: Sprite = null
let mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 100, 100)
info.setLife(3)
mySprite2.setStayInScreen(true)
game.onUpdateInterval(200, function () {
    mySprite = sprites.create(img`
        . . . . 2 2 2 2 2 e . . . . . . 
        . . . 2 2 2 2 d 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 2 2 e . . . . . 
        . . e 2 2 2 2 2 e f f c c . . . 
        . . e e 2 2 e f f f f b c . . . 
        . e e e f e 2 b f f f d c . . . 
        e e 2 2 d f 2 1 1 1 1 b c . . . 
        e e 2 2 d f e e c c c . . . . . 
        b 1 1 d e 2 2 e e c . . . . . . 
        . f f e 2 2 2 2 e . . . . . . . 
        . . f f d d 2 2 f f d d . . . . 
        . . f f d d e e f f d d . . . . 
        . . . f f f f . . . . . . . . . 
        . . e e e f f f . . . . . . . . 
        . . e e e e f f f . . . . . . . 
        `, SpriteKind.Enemy)
    mySprite.setPosition(0, randint(0, 100))
    mySprite.setVelocity(50, 0)
})

namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Skud_retning = 3
})
function Change_level (Level_number: number) {
    if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level 1`)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`level 2`)
        mySprite.setPosition(25, 25)
    } else if (Level_number == 3) {
        tiles.setCurrentTilemap(tilemap`level 3`)
        mySprite.setPosition(25, 25)
    } else {
    	
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Skud_retning == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -100, 0)
    } else if (Skud_retning == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 100, 0)
    } else if (Skud_retning == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
    } else if (Skud_retning == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f . f f f f f . . 
            . . f f 3 3 3 f f f 3 3 3 f f . 
            . . f 3 3 3 3 3 f 3 3 3 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 1 1 3 3 f . 
            . . f 3 3 3 3 3 3 3 3 3 3 3 f . 
            . . f f 3 3 3 b b b 3 3 3 f f . 
            . . . f f 3 b b b b b 3 f f . . 
            . . . . f f b b b b b f f . . . 
            . . . . . f f b b b f f . . . . 
            . . . . . . f f b f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 100)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeLifeBy(-1)
    mySprite.setPosition(25, 25)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 100)
    info.changeScoreBy(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Skud_retning = 1
})
info.onScore(30, function () {
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLarge)
})
info.onScore(100, function () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy3)
    Enemy_Sprite_4 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy4)
    tiles.placeOnRandomTile(Enemy_Sprite_4, sprites.castle.rock1)
    scaling.scaleByPercent(Enemy_Sprite_4, 300, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    mySprite.setPosition(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Skud_retning = 2
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath5, function (sprite, location) {
    Current_level += 1
    Change_level(Current_level)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Skud_retning = 4
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.hearts, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeLifeBy(-1)
    mySprite.setPosition(25, 25)
})
info.onScore(70, function () {
    tiles.placeOnRandomTile(mySprite, sprites.castle.tilePath5)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    Current_level += 1
    Change_level(Current_level)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    info.changeLifeBy(-1)
    mySprite.setPosition(25, 25)
})
let Enemy_Sprite_3: Sprite = null
let Enemy_sprite2: Sprite = null
let Enemy_sprite: Sprite = null
let Enemy_Sprite_4: Sprite = null
let projectile: Sprite = null
let Skud_retning = 0
let Current_level = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level 1`)
mySprite = sprites.create(assets.image`myImage1`, SpriteKind.Player)
mySprite.setPosition(25, 25)
controller.moveSprite(mySprite, 65, 65)
scene.cameraFollowSprite(mySprite)
info.setLife(3)
info.setScore(0)
Current_level = 1
Change_level(1)
game.onUpdateInterval(500, function () {
    Enemy_sprite = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(Enemy_sprite, sprites.dungeon.collectibleInsignia)
    Enemy_sprite.follow(mySprite, 30)
    if (Current_level == 2) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        Enemy_sprite2 = sprites.create(assets.image`myImage3`, SpriteKind.Enemy2)
        tiles.placeOnRandomTile(Enemy_sprite2, sprites.dungeon.collectibleBlueCrystal)
        Enemy_sprite2.follow(mySprite, 30)
    } else if (Current_level == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy2)
        sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
        Enemy_Sprite_3 = sprites.create(assets.image`myImage2`, SpriteKind.Enemy3)
        tiles.placeOnRandomTile(Enemy_Sprite_3, sprites.dungeon.stairLadder)
        Enemy_Sprite_3.follow(mySprite, 30)
    } else {
    	
    }
})

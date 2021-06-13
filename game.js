kaboom({
    global:true,
    fullscreen:true,
    scale:2,
    debug:true,
    clearColor:[0,0,0,1]
})

loadSprite('coin','img/coin.png')
loadSprite('evil-shroom','img/evil-mashroom.png')
loadSprite('brick','img/brick2.png')
loadSprite('block','img/block.png')
loadSprite('mario','img/mario.png')
loadSprite('mashroom','img/mashroom.png')
loadSprite('surprize','img/ask.png')
loadSprite('unboxed','img/unboxed.png')
loadSprite('pipe-top','img/pipe-top.png')
loadSprite('pipe-bottom','img/pipe-bottom.png')
loadSprite('pipe-top-bottom','img/pipe-top-bottom.png')
loadSprite('pipe-left-right','img/pipe-left-rightt.png')


scene("game",()=>{
    layers(['bg','obj','ui'],'obj')

    const map = [
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '     %   =*=%=                       ',
        '                                     ',
        '                             t       ',
        '                    ^   ^    |       ',
        '==============================  =====',
    ]

    const levelCfg = {
        width:20,
        height:20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin')],
        '%': [sprite('surprize'),solid(),'coin-surprize'],
        '*': [sprite('surprize'),solid(),'mashroom-surprize'],
        '}': [sprite('unboxed'),solid()],
        't': [sprite('pipe-top'),solid()],
        '|': [sprite('pipe-top-bottom'),solid()],
        '^': [sprite('evil-shroom'),solid()],
        '#': [sprite('mashroom'),solid()],
    }

    const gameLevel = addLevel(map,levelCfg)

    const scoreLabel = add([
        text(score),
        pos(30,6),
        layer('ui'),
        {
            value:score,
        }
    ])

    add([text('level ' + 'test', pos(4,6))])

    const player = add([
        sprite('mario'), solid(),
        pos(30,0),
        body(),
        origin('bot')
    ])

})

start("game")
player.onChat("tetto", function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 8)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("^^error^^", function () {
    agent.move(UP, 2)
    agent.move(BACK, 2)
    agent.move(DOWN, 10)
    agent.move(RIGHT, 3)
    agent.move(FORWARD, 2)
    agent.interact(FORWARD)
    player.runChatCommand("cucciagatto")
})
player.onChat("balconazzi", function () {
    agent.setItem(COBBLESTONE_STAIRS, 1, 10)
    agent.setSlot(1)
    agent.move(UP, 2)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 2)
    agent.move(DOWN, 6)
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.place(FORWARD)
    }
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.setSlot(8)
    agent.move(UP, 1)
    agent.move(FORWARD, 2)
    agent.place(RIGHT)
    agent.move(BACK, 1)
    agent.place(RIGHT)
    agent.move(BACK, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 4; index++) {
        agent.place(LEFT)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.place(LEFT)
    agent.setSlot(10)
    agent.move(UP, 2)
    agent.move(LEFT, 3)
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(FORWARD, 4)
    agent.move(DOWN, 3)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    agent.place(FORWARD)
    player.runChatCommand("arredamento")
})
player.onChat("orto", function () {
    agent.setItem(WATER_BUCKET, 1, 6)
    agent.setItem(SEEDS, 1, 7)
    agent.setSlot(7)
    agent.move(UP, 1)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            agent.move(FORWARD, 1)
            agent.till(DOWN)
            agent.place(DOWN)
        }
        agent.move(BACK, 5)
        agent.move(RIGHT, 1)
    }
    agent.setSlot(6)
    agent.move(RIGHT, 1)
    agent.move(DOWN, 1)
    agent.move(FORWARD, 3)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.place(DOWN)
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(FORWARD, 1)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    player.runChatCommand("terrazzo")
})
player.onChat("casa", function () {
    agent.setItem(BRICKS, 1, 1)
    agent.setItem(IRON_BLOCK, 1, 2)
    agent.setItem(ORANGE_WOOL, 1, 3)
    agent.setItem(BLUE_STAINED_GLASS, 1, 4)
    agent.setItem(OAK_DOOR_ITEM, 1, 5)
    agent.setSlot(1)
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 8)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.setSlot(2)
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 8; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
    }
    agent.setSlot(3)
    agent.move(LEFT, 1)
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 7; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    agent.setSlot(4)
    agent.move(BACK, 1)
    for (let index = 0; index < 2; index++) {
        agent.move(DOWN, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.setSlot(5)
    agent.move(RIGHT, 2)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.place(FORWARD)
    agent.move(RIGHT, 7)
    agent.move(FORWARD, 1)
    player.runChatCommand("casa2")
})
player.onChat("**error**", function () {
    agent.move(LEFT, 1)
    agent.move(UP, 6)
    agent.move(LEFT, 9)
    agent.move(BACK, 9)
    player.runChatCommand("materazzi")
})
player.onChat("casa2", function () {
    agent.setItem(BRICKS, 1, 1)
    agent.setItem(IRON_BLOCK, 1, 2)
    agent.setItem(ORANGE_WOOL, 1, 3)
    agent.setItem(BLUE_STAINED_GLASS, 1, 4)
    agent.setItem(OAK_DOOR_ITEM, 1, 5)
    agent.setSlot(1)
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 8)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.setSlot(2)
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 8; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
    }
    agent.setSlot(3)
    agent.move(LEFT, 1)
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 7; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    agent.setSlot(4)
    agent.move(BACK, 1)
    agent.move(DOWN, 2)
    for (let index = 0; index < 2; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.move(RIGHT, 7)
    for (let index = 0; index < 2; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 2; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.setSlot(5)
    agent.move(DOWN, 2)
    agent.move(LEFT, 3)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.place(FORWARD)
    agent.move(RIGHT, 7)
    player.runChatCommand("orto")
})
player.onChat("cubo", function () {
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 9; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(RIGHT_TURN)
        }
    }
})
player.onChat("pavimento", function () {
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 8)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
})
player.onChat("terrazzo", function () {
    agent.setItem(JUNGLE_FENCE, 1, 8)
    agent.setItem(SCAFFOLDING, 1, 9)
    agent.setSlot(8)
    agent.move(RIGHT, 5)
    agent.move(UP, 5)
    agent.place(RIGHT)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 4; index++) {
        agent.move(FORWARD, 2)
        for (let index = 0; index < 8; index++) {
            agent.place(RIGHT)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 2)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 8)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.move(DOWN, 2)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.move(DOWN, 5)
    agent.collectAll()
    agent.setSlot(9)
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        agent.place(DOWN)
    }
    player.runChatCommand("balcone")
})
player.onChat("quadrato", function () {
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 9; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 1)
})
player.onChat("2a casa", function (dd) {
    agent.setItem(BRICKS, 1, 1)
    agent.setItem(IRON_BLOCK, 1, 2)
    agent.setItem(ORANGE_WOOL, 1, 3)
    agent.setItem(BLUE_STAINED_GLASS, 1, 4)
    agent.setSlot(1)
    for (let index = 0; index < 8; index++) {
        for (let index = 0; index < 8; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 8)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.setSlot(2)
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 8; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
    }
    agent.setSlot(3)
    agent.move(LEFT, 1)
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 7; index++) {
            agent.move(FORWARD, 1)
            agent.place(DOWN)
        }
        agent.move(BACK, 7)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    agent.setSlot(4)
    agent.move(BACK, 1)
    for (let index = 0; index < 2; index++) {
        agent.move(DOWN, 1)
    }
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
        agent.place(FORWARD)
    }
    agent.setSlot(5)
    agent.move(RIGHT, 2)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.place(FORWARD)
    agent.setSlot(9)
    for (let index = 0; index < 8; index++) {
        agent.place(FORWARD)
    }
    agent.move(RIGHT, 2)
    agent.move(DOWN, 1)
    agent.move(FORWARD, 1)
    agent.setSlot(1)
    for (let index = 0; index < 9; index++) {
        agent.place(LEFT)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 8; index++) {
        agent.place(LEFT)
        agent.move(FORWARD, 1)
    }
    player.runChatCommand("**error**")
})
player.onChat("cucciagatto", function () {
    agent.setItem(GLASS, 1, 18)
    agent.setItem(SPAWN_OCELOT, 1, 19)
    agent.setItem(SAND, 1, 20)
    agent.setItem(STONE_SLAB, 1, 21)
    agent.setItem(WATER_BUCKET, 1, 22)
    agent.setSlot(14)
    agent.move(FORWARD, 5)
    agent.move(LEFT, 1)
    agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.place(FORWARD)
    agent.move(BACK, 4)
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.move(DOWN, 1)
    agent.move(FORWARD, 1)
    agent.setSlot(18)
    for (let index = 0; index < 7; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 7; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 7; index++) {
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.move(LEFT, 1)
    for (let index = 0; index < 7; index++) {
        agent.place(RIGHT)
        agent.move(FORWARD, 1)
    }
    agent.move(DOWN, 2)
    agent.move(BACK, 6)
    agent.turn(RIGHT_TURN)
    agent.destroy(FORWARD)
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.setSlot(5)
    agent.place(FORWARD)
    agent.interact(FORWARD)
    agent.move(FORWARD, 4)
    agent.setSlot(20)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.place(DOWN)
    agent.move(FORWARD, 1)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.place(DOWN)
    agent.move(UP, 1)
    agent.turn(RIGHT_TURN)
    agent.move(BACK, 1)
    agent.setSlot(16)
    agent.place(DOWN)
    agent.interact(DOWN)
    agent.move(RIGHT, 1)
    agent.place(DOWN)
    agent.interact(DOWN)
    agent.setSlot(21)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
    agent.move(BACK, 3)
    agent.move(RIGHT, 1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.place(DOWN)
    agent.move(BACK, 1)
    agent.place(DOWN)
    agent.move(LEFT, 1)
    agent.move(DOWN, 1)
    agent.setSlot(22)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.place(BACK)
    agent.move(FORWARD, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.place(FORWARD)
    agent.setSlot(1)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.place(DOWN)
    agent.destroy(LEFT)
    agent.collectAll()
    agent.place(LEFT)
    agent.move(FORWARD, 1)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.place(DOWN)
    agent.destroy(LEFT)
    agent.collectAll()
    agent.place(LEFT)
    agent.move(UP, 1)
    agent.move(FORWARD, 4)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 3)
    agent.move(RIGHT, 1)
    agent.move(BACK, 1)
    agent.setSlot(19)
    agent.place(FORWARD)
    agent.move(BACK, 1)
    agent.interact(FORWARD)
    agent.move(BACK, 3)
    agent.interact(FORWARD)
    player.runChatCommand("strada")
})
player.onChat("pishina", function () {
    agent.setSlot(6)
    agent.move(FORWARD, 1)
    agent.move(LEFT, 1)
    agent.move(DOWN, 3)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 5)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    agent.move(RIGHT, 4)
    for (let index = 0; index < 5; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.move(BACK, 4)
    agent.move(UP, 1)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 5)
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    agent.move(UP, 1)
    agent.move(RIGHT, 10)
    agent.move(FORWARD, 10)
    agent.move(UP, 6)
    agent.move(FORWARD, 1)
    player.runChatCommand("2a casa")
})
player.onChat("piscina", function () {
    agent.setItem(BLOCK_OF_QUARTZ, 1, 11)
    agent.setItem(PILLAR_QUARTZ_BLOCK, 1, 12)
    agent.setSlot(11)
    agent.move(UP, 2)
    agent.move(BACK, 10)
    agent.move(DOWN, 5)
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 5; index++) {
            for (let index = 0; index < 5; index++) {
                agent.destroy(DOWN)
                agent.collectAll()
                agent.move(FORWARD, 1)
            }
            agent.move(BACK, 5)
            agent.turn(RIGHT_TURN)
            agent.move(FORWARD, 1)
            agent.turn(LEFT_TURN)
        }
        agent.move(LEFT, 5)
        agent.move(DOWN, 1)
    }
    agent.move(UP, 1)
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 5)
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
    agent.destroy(BACK)
    agent.collectAll()
    agent.move(BACK, 1)
    agent.destroy(RIGHT)
    agent.collectAll()
    agent.move(RIGHT, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 6; index++) {
                agent.destroy(FORWARD)
                agent.collectAll()
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    agent.setSlot(12)
    agent.move(DOWN, 2)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            for (let index = 0; index < 6; index++) {
                agent.place(DOWN)
                agent.move(FORWARD, 1)
            }
            agent.turn(LEFT_TURN)
        }
        agent.move(UP, 1)
    }
    player.runChatCommand("pishina")
})
player.onChat("materazzi", function () {
    agent.setItem(JUNGLE_FENCE, 1, 8)
    agent.setItem(SCAFFOLDING, 1, 9)
    agent.setSlot(8)
    agent.place(RIGHT)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 8; index++) {
            agent.place(RIGHT)
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 2)
    }
    for (let index = 0; index < 8; index++) {
        agent.destroy(RIGHT)
        agent.collectAll()
        agent.place(RIGHT)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    agent.move(UP, 2)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 8)
    agent.turn(LEFT_TURN)
    agent.move(DOWN, 2)
    agent.destroy(DOWN)
    agent.collectAll()
    agent.move(DOWN, 5)
    agent.collectAll()
    agent.setSlot(9)
    for (let index = 0; index < 5; index++) {
        agent.move(UP, 1)
        agent.place(DOWN)
    }
    player.runChatCommand("balconazzi")
})
player.onChat("strada", function () {
    agent.setItem(BLACK_CONCRETE, 1, 23)
    agent.setItem(WHITE_CONCRETE, 1, 24)
    agent.setSlot(24)
    agent.move(RIGHT, 2)
    agent.move(FORWARD, 2)
    agent.setSlot(1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.collectAll()
        agent.place(DOWN)
        agent.move(BACK, 1)
    }
    agent.setSlot(21)
    agent.move(UP, 1)
    for (let index = 0; index < 24; index++) {
        agent.place(DOWN)
        agent.move(RIGHT, 1)
    }
    agent.move(LEFT, 25)
    for (let index = 0; index < 10; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(RIGHT, 22)
    agent.setSlot(1)
    agent.move(FORWARD, 1)
    agent.move(DOWN, 1)
    for (let index = 0; index < 5; index++) {
        agent.destroy(DOWN)
        agent.collectAll()
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.setSlot(21)
    agent.move(UP, 1)
    agent.move(BACK, 12)
    agent.move(RIGHT, 12)
    for (let index = 0; index < 34; index++) {
        agent.place(DOWN)
        agent.move(LEFT, 1)
    }
    agent.setSlot(23)
    agent.move(DOWN, 1)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.move(LEFT, 1)
        agent.move(FORWARD, 1)
        for (let index = 0; index < 34; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 1)
        agent.move(BACK, 1)
        for (let index = 0; index < 34; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(BACK, 1)
        }
    }
    for (let index = 0; index < 4; index++) {
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(RIGHT, 1)
        for (let index = 0; index < 3; index++) {
            agent.move(BACK, 1)
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
        }
        agent.move(FORWARD, 4)
        for (let index = 0; index < 3; index++) {
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(LEFT, 1)
        for (let index = 0; index < 3; index++) {
            agent.move(BACK, 1)
            agent.destroy(DOWN)
            agent.collectAll()
            agent.place(DOWN)
        }
        agent.move(FORWARD, 4)
    }
})
player.onChat("arredamento", function () {
    agent.setItem(FURNACE, 1, 11)
    agent.setItem(CRAFTING_TABLE, 1, 12)
    agent.setItem(CHEST, 1, 13)
    agent.setItem(TORCH, 1, 14)
    agent.setItem(LIME_BED, 1, 15)
    agent.setItem(SPRUCE_TRAPDOOR, 1, 16)
    agent.setItem(LIGHT_BLUE_BED, 1, 17)
    agent.setSlot(13)
    agent.interact(FORWARD)
    agent.move(FORWARD, 4)
    agent.move(DOWN, 2)
    agent.move(RIGHT, 1)
    agent.move(BACK, 2)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.setSlot(11)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.setSlot(14)
    agent.move(UP, 2)
    agent.place(FORWARD)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 4)
    agent.place(FORWARD)
    agent.setSlot(15)
    agent.move(DOWN, 2)
    agent.move(BACK, 1)
    agent.place(FORWARD)
    agent.move(RIGHT, 1)
    agent.setSlot(17)
    agent.place(FORWARD)
    agent.setSlot(13)
    agent.move(BACK, 1)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
    agent.setSlot(16)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.move(BACK, 1)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        agent.interact(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 3)
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    for (let index = 0; index < 3; index++) {
        agent.place(DOWN)
        agent.interact(DOWN)
        agent.move(LEFT, 1)
    }
    agent.move(FORWARD, 1)
    agent.turn(RIGHT_TURN)
    agent.place(FORWARD)
    agent.move(LEFT, 1)
    agent.place(FORWARD)
    agent.move(DOWN, 1)
    agent.turn(RIGHT_TURN)
    agent.move(BACK, 1)
    agent.move(UP, 2)
    agent.move(BACK, 4)
    agent.interact(FORWARD)
    player.runChatCommand("^^error^^")
})
player.onChat("balcone", function () {
    agent.setItem(COBBLESTONE_STAIRS, 1, 10)
    agent.setSlot(1)
    agent.move(UP, 2)
    agent.turn(LEFT_TURN)
    agent.move(BACK, 2)
    agent.move(DOWN, 6)
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.move(RIGHT, 1)
        agent.place(FORWARD)
    }
    agent.move(BACK, 1)
    for (let index = 0; index < 5; index++) {
        agent.place(FORWARD)
        agent.move(LEFT, 1)
    }
    agent.setSlot(8)
    agent.move(UP, 1)
    agent.move(FORWARD, 2)
    agent.place(RIGHT)
    agent.move(BACK, 1)
    agent.place(RIGHT)
    agent.move(BACK, 1)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 2)
    for (let index = 0; index < 4; index++) {
        agent.place(LEFT)
        agent.move(FORWARD, 1)
    }
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 2)
    agent.place(LEFT)
    agent.setSlot(10)
    agent.move(UP, 2)
    agent.move(LEFT, 3)
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(DOWN, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.move(FORWARD, 4)
    agent.move(DOWN, 3)
    agent.turn(LEFT_TURN)
    agent.turn(LEFT_TURN)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.place(FORWARD)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.move(FORWARD, 2)
    agent.turn(RIGHT_TURN)
    agent.turn(RIGHT_TURN)
    agent.setSlot(5)
    agent.place(FORWARD)
    player.runChatCommand("piscina")
})

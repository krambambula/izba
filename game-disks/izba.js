// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const izbaDemo = {
  roomId: 'izba', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'izba', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Изба', // Displayed each time the player enters the room.
      desc: `Вы оказались в старой заброшенной избе. На полу разбросаны различные предметы. Введите ITEMS - чтобы осмотреть их.`, // Displayed when the player first enters the room.
      items: [
        {
          name: 'Дверь',
          desc: 'Выход на улицу.', // Displayed when the player looks at the item.
          onUse: () => println(`Type GO NORTH to try the door.`), // Called when the player uses the item.
        },
        {
          name: ['Пиво'], 
          desc: `Прорвались сквозьпол и опутали стол`,
          isTakeable: true, // Allows the player to take the item.
        },
        {
          name: 'Топор',
          desc: `Для использования топора введите - USE и разрубите заросли.`,
          isTakeable: true, // Allows the player to take the item.
          onUse: () => {
            // Remove the block on the room's only exit.
            const room = getRoom('izba');
            const exit = getExit('north', room.exits);

            if (exit.block) {
              delete exit.block;
              println(`You cut through the vines, unblocking the door to the NORTH.`);
            } else {
              println(`There is nothing to use the axe on.`);
            }
          },
        }
      ],
      exits: [
        {
          dir: 'north', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'clearing',
          block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
      ],
    },
    {
      id: 'clearing',
      name: 'A Forest Clearing',
      desc: `It's a forest clearing. To the SOUTH is The First Room.`,
      exits: [
        {
          dir: 'south',
          id: 'start',
        },
      ],
    }
  ],
};

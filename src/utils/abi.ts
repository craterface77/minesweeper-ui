export const contractABI = [
  {
    inputs: [],
    name: 'CellAlreadyRevealed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'GameInProgress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidCoordinates',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidDecryptionResponse',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoActiveGame',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'x',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'y',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'requestID',
        type: 'uint256',
      },
    ],
    name: 'CellRevealRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'x',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'y',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: 'value',
        type: 'uint8',
      },
    ],
    name: 'CellRevealed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    name: 'GameLost',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    name: 'GameStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    name: 'GameWon',
    type: 'event',
  },
  {
    inputs: [],
    name: 'GRID_SIZE',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'NUM_MINES',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'requestID',
        type: 'uint256',
      },
      {
        internalType: 'uint8',
        name: 'decryptedValue',
        type: 'uint8',
      },
    ],
    name: 'cellRevealCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'games',
    outputs: [
      {
        internalType: 'bool',
        name: 'gameActive',
        type: 'bool',
      },
      {
        internalType: 'uint8',
        name: 'remainingSafeCells',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'pendingDecryptionRequests',
    outputs: [
      {
        internalType: 'uint8',
        name: 'index',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'player',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'x',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: 'y',
        type: 'uint8',
      },
    ],
    name: 'requestCellReveal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'startGame',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

exports.KEYS = {
  // API: "http://77.68.127.235:5000",
  // API: "http://localhost:9999",
  // contractAddress: "0xD56547132Ebdf8f6fb8F120b1e5Abd57bfAc9baE",
  // // // contractAddress_: "0x271cf80a35B466679d3254e243a17e668A8385d8", old
  // // ownerWallet_: "0x37810f7da9e5C8218075BB1D14c6315a3C9b2D65",
  // ownerWallet: "0x20EC9f1aCfFa02a53a106e8987f3BccA17F0ECaB",
  // chainID: 338,
  // CronosNetwork: "https://evm-t3.cronos.org/",
  // Fee: "2",
  CONTRACT_ABI: [
    {
      inputs: [
        {
          internalType: "string",
          name: "_Name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_Symbol",
          type: "string",
        },
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_id",
          type: "uint256",
        },
      ],
      name: "buy",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "grantRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_tokenURI",
          type: "string",
        },
        {
          internalType: "address",
          name: "_toAddress",
          type: "address",
        },
        {
          internalType: "address payable",
          name: "_to",
          type: "address",
        },
      ],
      name: "mint",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "minter",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nftID",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      name: "Minted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nftID",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "isListed",
          type: "bool",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "newPrice",
          type: "uint256",
        },
      ],
      name: "NftListStatus",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "OwnershipTransferred",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "previousOwner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "nftID",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "uri",
          type: "string",
        },
      ],
      name: "Purchase",
      type: "event",
    },
    {
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "renounceRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "revokeRole",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "previousAdminRole",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "bytes32",
          name: "newAdminRole",
          type: "bytes32",
        },
      ],
      name: "RoleAdminChanged",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleGranted",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          indexed: true,
          internalType: "address",
          name: "account",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "sender",
          type: "address",
        },
      ],
      name: "RoleRevoked",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "_data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "_to",
          type: "address",
        },
      ],
      name: "sendViaCall",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address payable",
          name: "newContractOwner",
          type: "address",
        },
      ],
      name: "setnewContractOwner",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "newOwner",
          type: "address",
        },
      ],
      name: "transferOwnership",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_tokenId",
          type: "uint256",
        },
        {
          internalType: "bool",
          name: "shouldBeListed",
          type: "bool",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
      ],
      name: "updateListingStatus",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "_contractOwner",
      outputs: [
        {
          internalType: "address payable",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "DEFAULT_ADMIN_ROLE",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
      ],
      name: "getRoleAdmin",
      outputs: [
        {
          internalType: "bytes32",
          name: "",
          type: "bytes32",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes32",
          name: "role",
          type: "bytes32",
        },
        {
          internalType: "address",
          name: "account",
          type: "address",
        },
      ],
      name: "hasRole",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "listedMap",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "owner",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      name: "price",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  // CONTRACT_ABI_old: [
  //   {
  //     inputs: [
  //       {
  //         internalType: "string",
  //         name: "_Name",
  //         type: "string",
  //       },
  //       {
  //         internalType: "string",
  //         name: "_Symbol",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "nonpayable",
  //     type: "constructor",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "approved",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Approval",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "operator",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "bool",
  //         name: "approved",
  //         type: "bool",
  //       },
  //     ],
  //     name: "ApprovalForAll",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "approve",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "burn",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "grantRole",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "string",
  //         name: "_tokenURI",
  //         type: "string",
  //       },
  //       {
  //         internalType: "address",
  //         name: "_toAddress",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address payable",
  //         name: "_to",
  //         type: "address",
  //       },
  //     ],
  //     name: "mint",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "minter",
  //         type: "address",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "uint256",
  //         name: "nftID",
  //         type: "uint256",
  //       },
  //       {
  //         indexed: false,
  //         internalType: "string",
  //         name: "uri",
  //         type: "string",
  //       },
  //     ],
  //     name: "Minted",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "previousOwner",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "newOwner",
  //         type: "address",
  //       },
  //     ],
  //     name: "OwnershipTransferred",
  //     type: "event",
  //   },
  //   {
  //     inputs: [],
  //     name: "renounceOwnership",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "renounceRole",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "revokeRole",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "bytes32",
  //         name: "previousAdminRole",
  //         type: "bytes32",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "bytes32",
  //         name: "newAdminRole",
  //         type: "bytes32",
  //       },
  //     ],
  //     name: "RoleAdminChanged",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "sender",
  //         type: "address",
  //       },
  //     ],
  //     name: "RoleGranted",
  //     type: "event",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "sender",
  //         type: "address",
  //       },
  //     ],
  //     name: "RoleRevoked",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "safeTransferFrom",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //       {
  //         internalType: "bytes",
  //         name: "_data",
  //         type: "bytes",
  //       },
  //     ],
  //     name: "safeTransferFrom",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address payable",
  //         name: "_to",
  //         type: "address",
  //       },
  //     ],
  //     name: "sendViaCall",
  //     outputs: [],
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "operator",
  //         type: "address",
  //       },
  //       {
  //         internalType: "bool",
  //         name: "approved",
  //         type: "bool",
  //       },
  //     ],
  //     name: "setApprovalForAll",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address payable",
  //         name: "newContractOwner",
  //         type: "address",
  //       },
  //     ],
  //     name: "setnewContractOwner",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     anonymous: false,
  //     inputs: [
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         indexed: true,
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "Transfer",
  //     type: "event",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "from",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "to",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "transferFrom",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "newOwner",
  //         type: "address",
  //       },
  //     ],
  //     name: "transferOwnership",
  //     outputs: [],
  //     stateMutability: "nonpayable",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "_contractOwner",
  //     outputs: [
  //       {
  //         internalType: "address payable",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //     ],
  //     name: "balanceOf",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "DEFAULT_ADMIN_ROLE",
  //     outputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "",
  //         type: "bytes32",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "getApproved",
  //     outputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //     ],
  //     name: "getRoleAdmin",
  //     outputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "",
  //         type: "bytes32",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes32",
  //         name: "role",
  //         type: "bytes32",
  //       },
  //       {
  //         internalType: "address",
  //         name: "account",
  //         type: "address",
  //       },
  //     ],
  //     name: "hasRole",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         internalType: "address",
  //         name: "operator",
  //         type: "address",
  //       },
  //     ],
  //     name: "isApprovedForAll",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "listedMap",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "name",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "owner",
  //     outputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "ownerOf",
  //     outputs: [
  //       {
  //         internalType: "address",
  //         name: "",
  //         type: "address",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "price",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "bytes4",
  //         name: "interfaceId",
  //         type: "bytes4",
  //       },
  //     ],
  //     name: "supportsInterface",
  //     outputs: [
  //       {
  //         internalType: "bool",
  //         name: "",
  //         type: "bool",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "symbol",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "index",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "tokenByIndex",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "address",
  //         name: "owner",
  //         type: "address",
  //       },
  //       {
  //         internalType: "uint256",
  //         name: "index",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "tokenOfOwnerByIndex",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [
  //       {
  //         internalType: "uint256",
  //         name: "tokenId",
  //         type: "uint256",
  //       },
  //     ],
  //     name: "tokenURI",
  //     outputs: [
  //       {
  //         internalType: "string",
  //         name: "",
  //         type: "string",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  //   {
  //     inputs: [],
  //     name: "totalSupply",
  //     outputs: [
  //       {
  //         internalType: "uint256",
  //         name: "",
  //         type: "uint256",
  //       },
  //     ],
  //     stateMutability: "view",
  //     type: "function",
  //   },
  // ],
  PinataKeyAPI: "ac7fc4ca8da87837d1f2",
  PinataSecretAPI:
    "ad59931e717fa003d415719374da33add1df0334f47501154b203a8a7e981c7c",
  projectIdinfura: "2Njd7K8gRbSG7WEQQnJGKtDY0IT",
  projectSecret: "7084da5ab52bded00ca6ad2fff9baddf",

  chainID: 25,
  Fee: "75",
  CronosNetwork: "https://evm.cronos.org/",
  ownerWallet: "0x30DE157944De636D20E9d8BaF1E01dC19B72464d",
  contractAddress: "0x7E99dce3604a80A9F6e1c651A8c5B2D29C9559c8",
  API: "",

  // contractAddress: "0xea35EfC93588AD9A5cEa0c3AB4946aD0575A7E5A", old
};

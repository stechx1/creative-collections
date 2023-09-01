// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "hardhat/console.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.3.2/access/Ownable.sol";
import "@openzeppelin/contracts@4.3.2/utils/Counters.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.3.2/utils/math/SafeMath.sol";
import "@openzeppelin/contracts@4.3.2/access/AccessControl.sol";
import "@openzeppelin/contracts@4.3.2/token/ERC721/extensions/ERC721Burnable.sol";



 contract MintV2 is ERC721,ERC721Enumerable, ERC721URIStorage,AccessControl, Ownable,ERC721Burnable  {
    using Counters for Counters.Counter;
    using Address for address;
    using SafeMath for uint256;

    address payable  public _contractOwner;
    Counters.Counter private _tokenIdCounter;
    
    
    mapping (uint256 => uint256) public price;
    mapping (uint256 => bool) public listedMap;
   
    
    
    
 

    event Minted(address indexed minter,  uint256 nftID, string uri);
  event Purchase(address indexed previousOwner, address indexed newOwner, uint256 price, uint256 nftID, string uri);
    event NftListStatus(address indexed owner, uint256 nftID, bool isListed,uint256 newPrice);
    
 
    

    constructor(string memory _Name,string memory _Symbol) ERC721(_Name,_Symbol)  {
         _contractOwner = payable(0xeD8F960D1B0E664CBd2CbEB0e2648ABFdB90cE29); // Contrat Owner:0xeD8F960D1B0E664CBd2CbEB0e2648ABFdB90cE29
    } 

    
      function setnewContractOwner(address payable newContractOwner) onlyOwner external {
        _contractOwner = newContractOwner;
    }






    function mint(string memory _tokenURI, address _toAddress,address payable _to) public payable returns (uint256) {
        
        _tokenIdCounter.increment();
        uint256 _tokenId = _tokenIdCounter.current();
     
        listedMap[_tokenId] = true;
        _safeMint(_toAddress, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
       (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        emit Minted(_toAddress, _tokenId, _tokenURI);

        return _tokenId;
    }

    function updateListingStatus(uint256 _tokenId, bool shouldBeListed, uint256 _price) public returns (bool) {
        require(msg.sender == ownerOf(_tokenId), "Error, you are not the owner");

        listedMap[_tokenId] = shouldBeListed;
        price[_tokenId] = _price;
        emit NftListStatus(msg.sender, _tokenId, shouldBeListed,_price);

        return true;
    }
    
  function sendViaCall(address payable _to) public payable {
        // Call returns a boolean value indicating success or failure.
        // This is the current recommended method to use.
        (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        require(sent, "Failed to send Ether");
    }
 

   

    function _validate(uint256 _id) internal {
        bool isItemListed = listedMap[_id];
        require(_exists(_id), "Error, wrong tokenId");
        require(isItemListed, "Item not listed currently");
        require(msg.sender != ownerOf(_id), "Can not buy what you own");
        require(msg.value >= price[_id],"Sorry the value is lower please enter correct amount");
    }
    
     function buy(uint256 _id) external payable {
        _validate(_id);

        address _previousOwner = ownerOf(_id);
        address _newOwner = msg.sender;

        _trade(_id);

        emit Purchase(_previousOwner, _newOwner, price[_id], _id, tokenURI(_id));
    }
    
   
   function _trade(uint256 _id) internal {
        address payable _buyer = payable(msg.sender);
        address payable _owner = payable(ownerOf(_id));
       

        _transfer(_owner, _buyer, _id);

        // Transfer the value of Cronose to Seller
        
        uint256 _sellerValue = price[_id];
        _owner.transfer(_sellerValue);
       
        

        // If buyer sent more than price, we send them back their rest of funds
        if (msg.value > price[_id]) {
            _buyer.transfer(msg.value - price[_id]);
        }

        listedMap[_id] = false;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
    
    function _beforeTokenTransfer(address from, address to, uint256 tokenId)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
    
     function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl,ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}

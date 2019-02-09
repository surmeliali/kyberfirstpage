

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



$(document).ready(function() {



    var numItems = $('li.tablink').length;


			  if (numItems == 12){
					$("li.tablink").width('8.3%');
				}
			  if (numItems == 11){
					$("li.tablink").width('9%');
				}
			  if (numItems == 10){
					$("li.tablink").width('10%');
				}
			  if (numItems == 9){
					$("li.tablink").width('11.1%');
				}
			  if (numItems == 8){
					$("li.tablink").width('12.5%');
				}
			  if (numItems == 7){
					$("li.tablink").width('14.2%');
				}
			  if (numItems == 6){
					$("li.tablink").width('16.666666666666667%');
				}
			  if (numItems == 5){
					$("li.tablink").width('20%');
				}
			  if (numItems == 4){
					$("li.tablink").width('25%');
				}
			  if (numItems == 3){
					$("tablink").width('33.3%');
				}
			  if (numItems == 2){
					$("li.tablink").width('50%');
				}




		});

$(window).load(function() {

  $('.tablinks').each(function() {

    var highestBox = 0;
    $('.tablink a', this).each(function() {

      if ($(this).height() > highestBox)
        highestBox = $(this).height();
    });

    $('.tablink a', this).height(highestBox);

  });
});

// FROM 90 TO 121 ARE FOR PERCENTAGE ON TRANSFERPAGE

var el, newPoint, newPlace, offset;

// Select all range inputs, watch for change
$("input[type='range']").change(function() {

 // Cache this for efficiency
 el = $(this);

 // Measure width of range input
 width = el.width();

 // Figure out placement percentage between left and right of input
 newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));

  offset = -1;

 // Prevent bubble from going beyond left or right (unsupported browsers)
 if (newPoint < 0) { newPlace = 0; }
 else if (newPoint > 1) { newPlace = width; }
 else { newPlace = width * newPoint + offset; offset -= newPoint; }

 // Move bubble
 el
   .next("output")
   .css({
     left: newPlace,
     marginLeft: offset + "%"
   })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');



 if (typeof web3 !== 'undefined') {
     // Define web3
     web3 = new Web3(web3.currentProvider);
   } else {// set the provider you want from Web3.providers
     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
   }

 //var account = "0x97Fc6A4fF837D31EfD049Bb2F831f79Aed8D4061"; //How to grap the metamask wallet//Check here no default account?
 /*var account = web3.eth.getAccounts((err, res) => {
               return String(res);
 });*/



 async function main() {
   let token = $("tokens").val()
   let request = await fetch('https://tracker.kyber.network/api/tokens/supported?chain=ropsten')
   let tokensInformation = await request.json()
   console.log(tokensInformation[token].contractAddress)
 }




 function  account() {
    return new Promise((resolve, reject) => {
   let currentAccount;
    web3.eth.getAccounts((err,res) => {
      if (!err) {
     currentAccount = String(res);
   } else {
     console.log(err);
     reject(err.message)
   }
   var account = currentAccount;
   resolve(account);
   });
 });
 }

 const tokensAbi = [{"constant": true,"inputs": [{"name": "_owner","type": "address"}],"name": "balanceOf","outputs": [{"name": "balance","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "_owner","type": "address"},{"name": "_spender","type": "address"}],"name": "allowance","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name":"_spender","type": "address"},{"name": "_value","type": "uint256"}],"name": "approve", "outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "nonpayable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "_owner","type": "address"},{"indexed": true,"name": "_spender","type": "address"},{"indexed": false,"name": "_value","type": "uint256"}],"name": "Approval","type": "event"}];

 const kyberMainABI = [{"constant": true,"inputs": [],"name": "enabled","outputs": [{"name": "","type": "bool"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [{"name": "src","type": "address"},{"name": "dest","type": "address"},{"name": "srcQty","type": "uint256"}],"name": "getExpectedRate","outputs": [{"name": "expectedRate","type": "uint256"},{"name": "slippageRate","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": true,"inputs": [],"name": "maxGasPrice","outputs": [{"name": "","type": "uint256"}],"payable": false,"stateMutability": "view","type": "function"},{"constant": false,"inputs": [{"name": "src","type": "address"},{"name": "mount","type": "uint256"},{"name": "dest","type": "address"},{"name": "destAddress","type": "address"},{"name": "maxDestAmount","type": "uint256"},{"name": "minConversionRate","type": "uint256"},{"name": "walletId","type": "address"}],"name": "trade","outputs": [{"name": "","type": "uint256"}],"payable": true,"stateMutability": "payable","type": "function"},{"anonymous": false,"inputs": [{"indexed": true,"name": "trader","type": "address"},{"indexed": false,"name": "src","type": "address"},{"indexed": false,"name": "dest","type": "address"},{"indexed": false,"name": "actualmount","type": "uint256"},{"indexed": false,"name": "actualDestAmount","type": "uint256"}],"name": "ExecuteTrade","type": "event"}];

 //Kyber Main
 var mainKyberAdd = "0x818E6FECD516Ecc3849DAf6845e3EC868087B755";
 var kyberContract =  new web3.eth.Contract(kyberMainABI,mainKyberAdd);

 //Kyber Ropsten
 const coinAddress = "0x4E470dc7321E84CA96FcAEDD0C8aBCebbAEB68C6"
 var coinContract = new web3.eth.Contract(tokensAbi,coinAddress);


 function getBalance(account) {

 web3.eth.getBalance(account, function (err, res) {
   let ethQtyInWei;
     if (!err) {
       ethQtyInWei = String(res);
     } else {
         console.log(err);
     };
     const balance = web3.utils.fromWei(ethQtyInWei,'ether');
     $("#balance").html(balance.slice(0,6));

 });
 }


 function tokenBalance() {

 coinContract.methods.balanceOf(account).call({from:account},function (err, res) {
   let coinQty;
       if (!err) {
         coinQty = String(res); //String(res);
     } else {
         console.log(err);// error getting balance
     };
     const balanceToken = web3.utils.fromWei(coinQty,'ether') ;
     $("#tokenBalance").html(balanceToken.slice(0,6));
 });
 }

 //const tokenSrc = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"; //ETH
 //const tokenDest = "0x4E470dc7321E84CA96FcAEDD0C8aBCebbAEB68C6"; //Kyber
 //const tokenQty = Math.pow(10,Math.floor(18));
 //const tokenQty = web3.utils.toWei('2');

      //to pass a string value to tokenQty

 function expectedRateBuy() {
     return new Promise((resolve, reject) => {
         let tokenSrc = $('#tokenSource').val();
         let qty = $('#amountEntryBuy').val();
         let tokenQty = web3.utils.toWei(qty);
         let tokenDest = $('#tokenAddress').val();
         let maxRateInWei;
         let slippageRateInWei;
     kyberContract.methods.getExpectedRate(tokenSrc, tokenDest, tokenQty) .call((err, res) => {
             if (!err) {
                 maxRateInWei = String(res[0]);//String(res[0]);
                 max = String(maxRateInWei * tokenQty);
                 slippageRateInWei = String(res[1]);
                 min = slippageRateInWei* tokenQty;
                 const maxRateBuy = max / Math.pow(10, Math.floor(36));
                 $("#maxRateBuy").html(maxRateBuy.toFixed(4));
                 const minRateBuy = min / Math.pow(10, Math.floor(36));
                 $("#minRateBuy").html(minRateBuy.toFixed(4));
             } else {
                 console.log("wtf");
                 console.log(err);
             }
           var rates = slippageRateInWei;
             resolve(rates);
         });
     });
 }

 //Need to do for Sell function
 function expectedRateSell() {
     return new Promise((resolve, reject) => {
         let tokenSrc = $('#tokenSourceSell').val();
         let qty = $('#amountEntrySell').val();
         let tokenQty = web3.utils.toWei(qty);
         let tokenDest = $('#tokenAddressSell').val(); //ETH token address
         let maxRateInWei;
         let slippageRateInWei;
     kyberContract.methods.getExpectedRate(tokenSrc, tokenDest, tokenQty) .call((err, res) => {
             if (!err) {
                 maxRateInWei = String(res[0]);//String(res[0]);
                 max = String(maxRateInWei * tokenQty);
                 slippageRateInWei = String(res[1]);
                 min = slippageRateInWei* tokenQty;
                 const maxRateSell = max / Math.pow(10, Math.floor(36));
                 $("#maxRateSell").html(maxRateSell.toFixed(4));
                 const minRateSell = min / Math.pow(10, Math.floor(36));
                 $("#minRateSell").html(minRateSell.toFixed(4));
             } else {
                 console.log("wtfSell");
                 console.log(err);
             }
           var rates = slippageRateInWei;
             resolve(rates);
         });
     });
 }



 function buy(min,account) {
 let tokenSrc = $('#tokenSource').val();
 let tokenDest = $('#tokenAddress').val();
 let qty = $("#amountEntryBuy").val();
 let walletId = "0x0000000000000000000000000000000000000000";
 //let maxDestAmount = Math.pow(2, 255).toString();
 let maxDestAmount = "5789604500000000000000000000000000000000000000000000000000000000000000000000000000000";
 let value_tx = web3.utils.toWei(qty);
 console.log(value_tx);

   return  new Promise((resolve,reject) => {
      kyberContract.methods.trade(tokenSrc, value_tx, tokenDest,account,maxDestAmount,min, walletId).send({from:account,gasPrice:'200000000',gas:300000,value:value_tx}, (err,res) => {
        console.log(res,err);
       if(!err){
         resolve(res)
       } else {
         console.log(err)
         reject(err.message)
       }
     });
 });
 }

 //Need to do for Sell function qty should be problematic
 function sell(min,account) {
 let tokenSrc = $('#tokenSourceSell').val();
 let tokenDest = $('#tokenAddressSell').val();
 let qty = 0.1083;
 console.log(qty);
 let walletId = "0x0000000000000000000000000000000000000000";
 //console.log(tokenSrc);
 //let maxDestAmount = Math.pow(2, 255).toString();
 let maxDestAmount = "5789604500000000000000000000000000000000000000000000000000000000000000000000000000000";
 let value_tx=web3.utils.toWei(qty);
 console.log(value_tx);

   return  new Promise((resolve,reject) => {
      kyberContract.methods.trade(tokenSrc, value_tx, tokenDest,account,maxDestAmount,min, walletId).send({from:account,gasPrice:'200000000',gas:300000,value:value_tx}, (err,res) => {
        console.log(res,err);
       if(!err){
         resolve(res)
       } else {
         console.log(err)
         reject(err.message)
       }
     });
 });
 }


  $(document).ready(function () {
    account().then(function(account) {
       return getBalance(account);
       });

  $("#buy").click(function() {
   var accountPromise=account().then(function(account){
     return account;
   }); //Why would I need this? what the fuck you were thinking about
   Promise.all([expectedRateBuy(),accountPromise]).then(function(values){
     buy(values[0],values[1]).catch(error => console.log(error));
     });
   });

   $("#sell").click(function() {
    var accountPromise=account().then(function(account){
      return account;
    }); //Why would I need this? what the fuck you were thinking about
    Promise.all([expectedRateSell(),accountPromise]).then(function(values){
      sell(values[0],values[1]).catch(error => console.log(error));
      });
    });
 });

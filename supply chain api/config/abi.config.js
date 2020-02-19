module.exports.ABI = {
    OwnableABI :  [{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"changeStatusDapp","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_oldOwner","type":"address"},{"indexed":true,"name":"_newOwner","type":"address"}],"name":"LogSetOwner","type":"event"}];

    AdminABI : [{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"removeAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"addAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address[]"}],"name":"addListAdmin","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogAdminAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_remove","type":"uint256"}],"name":"LogAdminRemoved","type":"event"}];

    FarmerABI : [{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceFarmer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getFammer","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isFarmer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addFarmer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogFarmerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogFarmerRemoved","type":"event"}],

    ManufactorABI : [{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isManufacturer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getManufacturer","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addManufacturer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceManufacturer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogManufacturerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogManufacturerRemoved","type":"event"}],

    DistributerABI : [{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isDistributor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getDistributor","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addDistributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceDistributor","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogDistributorAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogDistributorRemoved","type":"event"}],

    ThirdPLABI : [{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getThirdPL","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceThirdPL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isThirdPL","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addThirdPL","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"LogThirdPLAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"timeAdd","type":"uint256"}],"name":"LogThirdPLRemoved","type":"event"}],

    RetailerABI : [{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceRetailer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getRetailer","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isRetailer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addRetailer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"RetailerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"RetailerRemoved","type":"event"}],

    ConsumerABI : [{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"OwnableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[2]"}],"name":"joinNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"AdminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isConsumer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"checkIsAdmin","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"getConsumer","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"},{"name":"_name","type":"string"},{"name":"_company","type":"string"},{"name":"_identify","type":"string"},{"name":"_lati","type":"string"},{"name":"_longt","type":"string"}],"name":"addConsumer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_account","type":"address"}],"name":"renounceConsumer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_contract","type":"address[2]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_account","type":"address"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_company","type":"string"},{"indexed":false,"name":"_identify","type":"string"},{"indexed":false,"name":"_lat","type":"string"},{"indexed":false,"name":"_longt","type":"string"},{"indexed":false,"name":"_timeAdd","type":"uint256"}],"name":"ConsumerAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"account","type":"address"},{"indexed":false,"name":"timeRemove","type":"uint256"}],"name":"ConsumerRemoved","type":"event"}],

    MainABI : [{"constant":false,"inputs":[{"name":"_upc","type":"string"},{"name":"_consumerID","type":"address"}],"name":"purchaseProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"ownableContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isManufacturer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinFarmerNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinAdminNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"distributorContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"consumerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upc","type":"string"},{"name":"_price","type":"uint256"},{"name":"_distributorID","type":"address"}],"name":"packProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinDistributorNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address[8]"}],"name":"joinMainNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_upc","type":"string"}],"name":"shipproduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"retailerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"kill","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinRetailerNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_upc","type":"string"},{"name":"_thirdPLID","type":"address"}],"name":"retailerProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_upc","type":"string"}],"name":"getProductInfo","outputs":[{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isRetailer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_upc","type":"string"}],"name":"getProductAddress","outputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinOwnerNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isConsumer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isDistributor","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinConsumerNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isThirdPL","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"farmerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manufacturerContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upc","type":"string"}],"name":"processProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_account","type":"address"}],"name":"isFarmer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_productID","type":"string"},{"name":"_upc","type":"string"},{"name":"_originFarmerID","type":"address"},{"name":"_productNotes","type":"string"}],"name":"harvestProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"adminContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upc","type":"string"},{"name":"_retailerID","type":"address"}],"name":"distributorProduct","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinThirdPLNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_contract","type":"address"}],"name":"joinManufacturerNetwork","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"thirdPLContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"retreiveAllContract","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_contract","type":"address[8]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogHarvested","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogProcessed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogPacked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogDistributor","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogRetailer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogShipped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_id","type":"string"},{"indexed":true,"name":"_upc","type":"string"},{"indexed":false,"name":"_name","type":"string"},{"indexed":false,"name":"_owner","type":"address"},{"indexed":false,"name":"_actor","type":"string"},{"indexed":false,"name":"_state","type":"uint8"}],"name":"LogPurchased","type":"event"}]

}



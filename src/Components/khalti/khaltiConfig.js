let khaltiConfig = {
    // replace this key with yours
    "publicKey": "test_public_key_5118bd8f922e49ef98df55df138dd2a7",
    "productIdentity": "1234567890",
    "productName": "The Portion",
    "productUrl": "http://gameofthrones.com/buy/Dragons",
    "eventHandler": {
        onSuccess (payload) {
            // hit merchant api for initiating verfication
            console.log(payload);
        },
        // onError handler is optional
        onError (error) {
            // handle errors
            console.log(error);
        },
        onClose () {
            console.log('widget is closing');
        }
    },
    "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};

export default khaltiConfig;
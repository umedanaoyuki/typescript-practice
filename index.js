//內部モジュール
var UserModule;
(function (UserModule) {
    UserModule.name = "taguchi";
    var AddressModule;
    (function (AddressModule) {
        AddressModule.zip = "111-1111";
    })(AddressModule = UserModule.AddressModule || (UserModule.AddressModule = {}));
})(UserModule || (UserModule = {}));
console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);
var addr = UserModule.AddressModule;
console.log(addr.zip);

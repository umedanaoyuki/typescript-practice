//內部モジュール

module UserModule {
    export let name = "taguchi";
    export module AddressModule {
        export let zip = "111-1111";
    }
}

console.log(UserModule.name);
// console.log(UserModule.AddressModule.zip);

import addr = UserModule.AddressModule;
console.log(addr.zip);
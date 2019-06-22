
/* eslint-disable @lwc/lwc/no-async-operation */
/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
const callbacks = {};

const register = (eventName, callback) => {
    console.log("register eventName", eventName)
    if (!callbacks[eventName]) {
        callbacks[eventName] = new Set();
    }
    callbacks[eventName].add(callback);
};

const unregister = (eventName, callback) => {
    console.log("unregister eventName", eventName)
    if (callbacks[eventName]) {
        callbacks[eventName].delete(callback);
    }
};

const fire = (eventName, payload, timeout) => {
    console.log("fire eventName", eventName)
    if( timeout !== 0 ){
        setTimeout(function(){ 
            if (callbacks[eventName]) {
                callbacks[eventName].forEach(callback => {
                    try {
                        callback(payload);
                    } catch (error) {
                        // fail silently
                    }
                });
            }

        }, timeout);
    }
    else{
        if (callbacks[eventName]) {
            callbacks[eventName].forEach(callback => {
                try {
                    callback(payload);
                } catch (error) {
                    // fail silently
                }
            });
        }
    }

    
};

export default {
    register,
    unregister,
    fire
};
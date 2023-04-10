import { v5 as uuidv5 } from 'uuid';
import { Platform } from 'react-native';

const Device = {
  id: uuidv5(Platform.constants.Manufacturer, '1b671a64-40d5-491e-99b0-da01ff1f3341'),
  name: `${Platform.constants.Manufacture} ${Platform.constants.Model}`,
};
/**
 * 
 * Viewsiting API call function
 *   => Communications go here
 * 
 *  @param {string} route - The target route
 *  @param {function} cb - The return function
 *  @param {object} message - The message sent
 */
async function api (route, cb, message) {

    const FormData = {};
    FormData.message = message || {};

    const url = "https://alice.hugochilemme.com" + route
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.stringify(accounts?.active?.authorization()),
            'Device': JSON.stringify(Device)
        },
        body: JSON.stringify(FormData)
    }

    const response = await fetch(url, options);

    if ( response.ok === false )
    {

        return cb ( { ok: false } )

    }

    await response.json().then( function async (json) {
        
        console.debug(json)

        if ( accounts.active && json.authority )
        {

            accounts.active.setAuthorization( json.authority );

        }

        return cb( json )

    });



}

/**
 * Viewsiting API call function
 * @deprecated Use api
 */
const apicall = api;

global.api = api;
global.apicall = apicall;

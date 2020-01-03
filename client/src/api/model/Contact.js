/**
 * Family Context
 * This is the API definition for Family Context
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
* The Contact model module.
* @module model/Contact
* @version 0.0.1
*/
export default class Contact {
    /**
    * Constructs a new <code>Contact</code>.
    * @alias module:model/Contact
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Contact} obj Optional instance to populate.
    * @return {module:model/Contact} The populated <code>Contact</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Contact();
                        
            
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {String} role
    */
    role = undefined;




}

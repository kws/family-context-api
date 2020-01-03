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
import Contact from './Contact';
import SourceData from './SourceData';

/**
* The Housing model module.
* @module model/Housing
* @version 0.0.1
*/
export default class Housing {
    /**
    * Constructs a new <code>Housing</code>.
    * @alias module:model/Housing
    * @class
    * @extends module:model/SourceData
    */

    constructor() {
        SourceData.call(this);
        
        
    }

    /**
    * Constructs a <code>Housing</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Housing} obj Optional instance to populate.
    * @return {module:model/Housing} The populated <code>Housing</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Housing();
            
            SourceData.constructFromObject(data, obj);
            
            if (data.hasOwnProperty('serviceInvolvement')) {
                obj['serviceInvolvement'] = ApiClient.convertToType(data['serviceInvolvement'], 'String');
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = Contact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('antiSocialBehaviour')) {
                obj['antiSocialBehaviour'] = ApiClient.convertToType(data['antiSocialBehaviour'], 'String');
            }
            if (data.hasOwnProperty('rentArrears')) {
                obj['rentArrears'] = ApiClient.convertToType(data['rentArrears'], 'String');
            }
            if (data.hasOwnProperty('noticeSeekingPossession')) {
                obj['noticeSeekingPossession'] = ApiClient.convertToType(data['noticeSeekingPossession'], 'String');
            }
            if (data.hasOwnProperty('eviction')) {
                obj['eviction'] = ApiClient.convertToType(data['eviction'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} serviceInvolvement
    */
    serviceInvolvement = undefined;
    /**
    * @member {module:model/Contact} contact
    */
    contact = undefined;
    /**
    * @member {String} antiSocialBehaviour
    */
    antiSocialBehaviour = undefined;
    /**
    * @member {String} rentArrears
    */
    rentArrears = undefined;
    /**
    * @member {String} noticeSeekingPossession
    */
    noticeSeekingPossession = undefined;
    /**
    * @member {String} eviction
    */
    eviction = undefined;




}

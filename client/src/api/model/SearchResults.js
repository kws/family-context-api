/**
 * Family Context
 * This is the *DRAFT / WORK IN PROGRESS* API definition for Family Context. This document is currently undergoing rapid change and should not be used as basis for implementation without discussing with the project team. 
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
import PaginationInfo from './PaginationInfo';
import Person from './Person';

/**
* The SearchResults model module.
* @module model/SearchResults
* @version 0.0.1
*/
export default class SearchResults {
    /**
    * Constructs a new <code>SearchResults</code>.
    * Results from querying a person.
    * @alias module:model/SearchResults
    * @class
    */

    constructor() {
                
    }

    /**
    * Constructs a <code>SearchResults</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SearchResults} obj Optional instance to populate.
    * @return {module:model/SearchResults} The populated <code>SearchResults</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchResults();
                                    if (data.hasOwnProperty('paginationInfo')) {
                obj['paginationInfo'] = PaginationInfo.constructFromObject(data['paginationInfo']);
            }
            if (data.hasOwnProperty('results')) {
                obj['results'] = ApiClient.convertToType(data['results'], [Person]);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/PaginationInfo} paginationInfo
    */
    paginationInfo = undefined;
    /**
    * @member {Array.<module:model/Person>} results
    */
    results = undefined;




}

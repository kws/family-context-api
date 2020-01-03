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

import ApiClient from "../ApiClient";
import Person from '../model/Person';

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.1
*/
export default class DefaultApi {

    /**
    * Constructs a new DefaultApi. 
    * @alias module:api/DefaultApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getPersonById operation.
     * @callback module:api/DefaultApi~getPersonByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Person} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find person by ID
     * Returns a single person
     * @param {Object} opts Optional parameters
     * @param {module:api/DefaultApi~getPersonByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Person}
     */
    getPersonById(personId, opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
        'personId': personId
      };
      let queryParams = {
        'sources': this.apiClient.buildCollectionParam(opts['sources'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Person;

      return this.apiClient.callApi(
        '/person/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}

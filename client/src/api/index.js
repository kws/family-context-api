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

import ApiClient from './ApiClient';
import AdultSocialCare from './model/AdultSocialCare';
import Contact from './model/Contact';
import Housing from './model/Housing';
import Person from './model/Person';
import Police from './model/Police';
import PoliceOffences from './model/PoliceOffences';
import School from './model/School';
import ServiceMap from './model/ServiceMap';
import SourceData from './model/SourceData';
import DefaultApi from './api/DefaultApi';

/**
* This_is_the_API_definition_for_Family_Context.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FamilyContext = require('index'); // See note below*.
* var xxxSvc = new FamilyContext.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FamilyContext.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FamilyContext.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FamilyContext.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AdultSocialCare model constructor.
     * @property {module:model/AdultSocialCare}
     */
    AdultSocialCare,

    /**
     * The Contact model constructor.
     * @property {module:model/Contact}
     */
    Contact,

    /**
     * The Housing model constructor.
     * @property {module:model/Housing}
     */
    Housing,

    /**
     * The Person model constructor.
     * @property {module:model/Person}
     */
    Person,

    /**
     * The Police model constructor.
     * @property {module:model/Police}
     */
    Police,

    /**
     * The PoliceOffences model constructor.
     * @property {module:model/PoliceOffences}
     */
    PoliceOffences,

    /**
     * The School model constructor.
     * @property {module:model/School}
     */
    School,

    /**
     * The ServiceMap model constructor.
     * @property {module:model/ServiceMap}
     */
    ServiceMap,

    /**
     * The SourceData model constructor.
     * @property {module:model/SourceData}
     */
    SourceData,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};

# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server.models.contact import Contact  # noqa: F401,E501
import re  # noqa: F401,E501
from swagger_server import util


class AdultSocialCare(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, service_involvement: str=None, local_authority_organisation: str=None, contact: Contact=None, start_date_of_last_involvement: date=None, date_of_most_recent_interaction: date=None):  # noqa: E501
        """AdultSocialCare - a model defined in Swagger

        :param service_involvement: The service_involvement of this AdultSocialCare.  # noqa: E501
        :type service_involvement: str
        :param local_authority_organisation: The local_authority_organisation of this AdultSocialCare.  # noqa: E501
        :type local_authority_organisation: str
        :param contact: The contact of this AdultSocialCare.  # noqa: E501
        :type contact: Contact
        :param start_date_of_last_involvement: The start_date_of_last_involvement of this AdultSocialCare.  # noqa: E501
        :type start_date_of_last_involvement: date
        :param date_of_most_recent_interaction: The date_of_most_recent_interaction of this AdultSocialCare.  # noqa: E501
        :type date_of_most_recent_interaction: date
        """
        self.swagger_types = {
            'service_involvement': str,
            'local_authority_organisation': str,
            'contact': Contact,
            'start_date_of_last_involvement': date,
            'date_of_most_recent_interaction': date
        }

        self.attribute_map = {
            'service_involvement': 'serviceInvolvement',
            'local_authority_organisation': 'localAuthorityOrganisation',
            'contact': 'contact',
            'start_date_of_last_involvement': 'startDateOfLastInvolvement',
            'date_of_most_recent_interaction': 'dateOfMostRecentInteraction'
        }
        self._service_involvement = service_involvement
        self._local_authority_organisation = local_authority_organisation
        self._contact = contact
        self._start_date_of_last_involvement = start_date_of_last_involvement
        self._date_of_most_recent_interaction = date_of_most_recent_interaction

    @classmethod
    def from_dict(cls, dikt) -> 'AdultSocialCare':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The AdultSocialCare of this AdultSocialCare.  # noqa: E501
        :rtype: AdultSocialCare
        """
        return util.deserialize_model(dikt, cls)

    @property
    def service_involvement(self) -> str:
        """Gets the service_involvement of this AdultSocialCare.


        :return: The service_involvement of this AdultSocialCare.
        :rtype: str
        """
        return self._service_involvement

    @service_involvement.setter
    def service_involvement(self, service_involvement: str):
        """Sets the service_involvement of this AdultSocialCare.


        :param service_involvement: The service_involvement of this AdultSocialCare.
        :type service_involvement: str
        """

        self._service_involvement = service_involvement

    @property
    def local_authority_organisation(self) -> str:
        """Gets the local_authority_organisation of this AdultSocialCare.


        :return: The local_authority_organisation of this AdultSocialCare.
        :rtype: str
        """
        return self._local_authority_organisation

    @local_authority_organisation.setter
    def local_authority_organisation(self, local_authority_organisation: str):
        """Sets the local_authority_organisation of this AdultSocialCare.


        :param local_authority_organisation: The local_authority_organisation of this AdultSocialCare.
        :type local_authority_organisation: str
        """

        self._local_authority_organisation = local_authority_organisation

    @property
    def contact(self) -> Contact:
        """Gets the contact of this AdultSocialCare.


        :return: The contact of this AdultSocialCare.
        :rtype: Contact
        """
        return self._contact

    @contact.setter
    def contact(self, contact: Contact):
        """Sets the contact of this AdultSocialCare.


        :param contact: The contact of this AdultSocialCare.
        :type contact: Contact
        """

        self._contact = contact

    @property
    def start_date_of_last_involvement(self) -> date:
        """Gets the start_date_of_last_involvement of this AdultSocialCare.


        :return: The start_date_of_last_involvement of this AdultSocialCare.
        :rtype: date
        """
        return self._start_date_of_last_involvement

    @start_date_of_last_involvement.setter
    def start_date_of_last_involvement(self, start_date_of_last_involvement: date):
        """Sets the start_date_of_last_involvement of this AdultSocialCare.


        :param start_date_of_last_involvement: The start_date_of_last_involvement of this AdultSocialCare.
        :type start_date_of_last_involvement: date
        """

        self._start_date_of_last_involvement = start_date_of_last_involvement

    @property
    def date_of_most_recent_interaction(self) -> date:
        """Gets the date_of_most_recent_interaction of this AdultSocialCare.


        :return: The date_of_most_recent_interaction of this AdultSocialCare.
        :rtype: date
        """
        return self._date_of_most_recent_interaction

    @date_of_most_recent_interaction.setter
    def date_of_most_recent_interaction(self, date_of_most_recent_interaction: date):
        """Sets the date_of_most_recent_interaction of this AdultSocialCare.


        :param date_of_most_recent_interaction: The date_of_most_recent_interaction of this AdultSocialCare.
        :type date_of_most_recent_interaction: date
        """

        self._date_of_most_recent_interaction = date_of_most_recent_interaction

import csv
import connexion
import inflection
import os
import six

from swagger_server.models.person import Person  
from swagger_server.models.police import Police  
from swagger_server.models.police_offences import PoliceOffences  
from swagger_server.models.housing import Housing  
from swagger_server.models.school import School  
from swagger_server.models.contact import Contact  
from swagger_server.models.adult_social_care import AdultSocialCare  

from swagger_server import util

def parse_csv(filename):
    dirname = os.path.dirname(__file__)
    filename = os.path.join(dirname, filename)

    rows = []
    with open(filename) as csvfile:
        reader = list(csv.reader(csvfile))

        header = reader[0]

        for row in reader[1:]:
            row_obj = dict()
            for ix, name in enumerate(header):
                name = inflection.underscore(name.strip())
                value = row[ix] if ix < len(row) else None
                row_obj[name] = value
            rows.append(row_obj)

    return rows

def parse_contact(row):
    mapping = dict(name="contact_name", email="contact_email", phone="contact_phone", role="contact_role")
    newObj = dict()
    for newKey, oldKey in mapping.items():
        if oldKey in row:
            newObj[newKey] = row[oldKey]
            del row[oldKey]
    row["contact"] = Contact(**newObj)

def read_data():

    data = parse_csv('../data/person.csv')

    persons = dict();
    for person in data:
        persons[person['id']] = Person(**person)
        persons[person['id']].service_data = dict()

    data = parse_csv('../data/police.csv')
    for policedata in data:
        person_id = policedata["person_id"]
        del policedata["person_id"]
        parse_contact(policedata)
        police = Police(**policedata, offences=[])
        persons[person_id].service_data["POLICE"] = police

    data = parse_csv('../data/police_offence.csv')
    for policedata in data:
        person_id = policedata["person_id"]
        del policedata["person_id"]
        police = PoliceOffences(**policedata)
        persons[person_id].service_data["POLICE"].offences.append(police)

    data = parse_csv('../data/school.csv')
    for sectiondata in data:
        person_id = sectiondata["person_id"]
        del sectiondata["person_id"]
        parse_contact(sectiondata)
        section = School(**sectiondata)
        persons[person_id].service_data["SCHOOL"] = section

    data = parse_csv('../data/adult_social_care.csv')
    for sectiondata in data:
        person_id = sectiondata["person_id"]
        del sectiondata["person_id"]
        parse_contact(sectiondata)
        section = AdultSocialCare(**sectiondata)
        persons[person_id].service_data["ASC"] = section

    data = parse_csv('../data/housing.csv')
    for sectiondata in data:
        person_id = sectiondata["person_id"]
        del sectiondata["person_id"]
        parse_contact(sectiondata)

        section = Housing(**sectiondata)
        persons[person_id].service_data["HOUSING"] = section

    return persons

read_data()

def get_person_by_id(person_id, sources=None):  # noqa: E501
    """Find person by ID

    Returns a single person # noqa: E501

    :param person_id: ID of person to return
    :type person_id: str
    :param sources: The data source IDs to query
    :type sources: List[str]

    :rtype: Person
    """
    persons = read_data()
    return persons[person_id]

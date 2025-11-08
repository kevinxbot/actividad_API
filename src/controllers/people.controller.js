const { people } = require('../data/data');

const getAllPeople = (req, res) => res.json(people);

const getPersonById = (req, res) => {
    const person = people.find(p => p.id == req.params.id);
    person ? res.json(person) : res.status(404).json({ message: "Persona no encontrada" });
};

const createPerson = (req, res) => {
    const newPerson = { id: people.length + 1, ...req.body };
    people.push(newPerson);
    res.status(201).json({ message: "Persona creada", newPerson });
};

const updatePerson = (req, res) => {
    const person = people.find(p => p.id == req.params.id);
    if (person) {
        Object.assign(person, req.body);
        res.json({ message: "Persona actualizada", person });
    } else {
        res.status(404).json({ message: "Persona no encontrada" });
    }
};

const deletePerson = (req, res) => {
    const index = people.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        people.splice(index, 1);
        res.json({ message: "Persona eliminada" });
    } else {
        res.status(404).json({ message: "Persona no encontrada" });
    }
};

module.exports = { getAllPeople, getPersonById, createPerson, updatePerson, deletePerson };

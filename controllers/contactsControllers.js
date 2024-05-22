import contactsService from "../services/contactsServices.js";
import { HttpError, ctrlWrapper } from "../helpers/index.js";

export const getAllContacts = (req, res) => {};
import * as contactsService from "../services/contactsServices.js";

export const getOneContact = (req, res) => {};
const getAllContacts = async (_, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

export const deleteContact = (req, res) => {};
const getOneContact = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.getContactById(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
};

export const createContact = (req, res) => {};
const deleteContact = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.removeContact(id);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
};

export const updateContact = (req, res) => {};
const createContact = async (req, res) => {
    const result = await contactsService.addContact(req.body);
    res.status(201).json(result);
};

const updateContact = async (req, res) => {
    const { id } = req.params;
    const result = await contactsService.updateContactById(id, req.body);
    if (!result) {
      throw HttpError(404, `Contact with id=${id} not found`);
    }
    res.json(result);
};

export default {
  getAllContacts: ctrlWrapper(getAllContacts),
  getOneContact: ctrlWrapper(getOneContact),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateContact: ctrlWrapper(updateContact),
}
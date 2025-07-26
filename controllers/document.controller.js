import express from "express";
import Document from "../models/document.model.js";

export const createDocument = async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ message: "Title and Content is required." });
  }

  try {
    const newDocument = new Document({ title, content });
    await newDocument.save();
    return res.status(200).json({
      document: newDocument,
      message: "Document created successfully",
    });
  } catch (error) {
    console.log(`Error in Create document controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllDocuments = async (req, res) => {
  try {
    const documents = await Document.find({});
    res.status(200).json({ documents, message: "All documents are fetched." });
  } catch (error) {
    console.log(`Error in getAllDocuments controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getDocumentById = async (req, res) => {
  const docId = req.params.id;
  try {
    const document = await Document.findById(docId);

    if (!document) {
      return res.status(400).json({ message: "Document not found." });
    }

    res.status(200).json({ document, message: "Document is fetched." });
  } catch (error) {
    console.log(`Error in getDocumentById controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateDocument = async (req, res) => {
  const newDocument = req.body;
  const docId = req.params.id;

  try {
    const updatedDocument = await Document.findByIdAndUpdate(
      docId,
      newDocument,
      { new: true },
    );

    res.status(200).json({
      document: updatedDocument,
      message: "Document has been updated",
    });
  } catch (error) {
    console.log(`Error in updateDocument controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteDocument = async (req, res) => {
  const docId = req.params.id;

  try {
    await Document.deleteOne({ _id: docId });
    res.status(200).json({ message: "Document has been deleted" });
  } catch (error) {
    console.log(`Error in updateDocument controller ${error}`);
    res.status(500).json({ message: "Internal server error" });
  }
};

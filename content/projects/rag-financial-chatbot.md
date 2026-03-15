---
title: "RAG Financial Report Chatbot"
description: "Ask questions over annual reports using RAG, LangChain, and Pinecone. Semantic search over financial documents with grounded answers."
year: "2024"
tags: ["Python", "FastAPI", "LangChain", "Pinecone"]
githubUrl: "https://github.com/virend3rp/rag-financial-report-chatbot"
thumbnail: "/raf-chat.png"
---

## Overview

A Retrieval-Augmented Generation (RAG) system built specifically for financial document QA. Point it at an annual report and ask it anything — revenue breakdown, risk factors, segment performance.

## Architecture

Two main flows: document ingestion and question answering. Ingestion handles parsing, chunking, embedding, and storing vectors. QA handles retrieval and generation.

## Stack

Python, FastAPI, LangChain, Pinecone, OpenAI, sentence-transformers.

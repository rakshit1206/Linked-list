# Linked List Visualization in React

## Overview

This project provides a visualization of a Linked List data structure implemented in JavaScript. The project is built with React and allows users to interact with the Linked List through a simple web interface. Users can perform operations like prepending a node, inserting a node at a specific position, removing a node, and popping the last node from the list. The current state of the Linked List is displayed in real-time on the page.

## Features

- **Prepend**: Adds a new node at the beginning of the linked list.
- **Insert At**: Inserts a new node at a specified position in the linked list.
- **Remove At**: Removes a node from a specified position in the linked list.
- **Pop**: Removes the last node in the linked list.
- **Real-time Visualization**: The linked list updates visually in real-time as operations are performed.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rakshit1206/Linked-list
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open the project in your browser:**

   Once the server is running, you can view the project at `http://localhost:5173`.

## Usage

### User Interface

- **Node Value Input**: Enter the value for the new node.
- **Position Input**: (Optional) Specify the position at which to insert or remove a node. If left blank for `Insert At`, the node will be inserted at the start.
- **Prepend**: Click this button to add a new node to the beginning of the list.
- **Insert At**: Click this button to insert a node at the specified position.
- **Remove At**: Click this button to remove a node at the specified position.
- **Pop**: Click this button to remove the last node in the list.

### Linked List Visualization

The linked list is displayed in a horizontal row of nodes, each with its value. Arrows between nodes indicate the links. The list always ends with a `null` node, indicating the end of the linked list.

## Linked List Implementation

The linked list logic is implemented in the `LinkedList.js` file. It contains methods to manipulate the list, such as `prepend`, `insertAt`, `removeAt`, and `pop`.

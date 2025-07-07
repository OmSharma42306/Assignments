# 🧠 VectorShift Frontend Technical Assignment

This is my completed submission for the **VectorShift Frontend Technical Assessment**. The project features a React + React Flow-based node editor integrated with a FastAPI backend.

---

## 🚀 Getting Started

### 🖥️ Frontend (React)

```bash
cd frontend
npm install
npm run dev
````

Runs on: `http://localhost:5173`

### ⚙️ Backend (FastAPI)

```bash
cd backend
uvicorn main:app --reload
```

Runs on: `http://localhost:8000`

---

## ✅ Features Implemented

### 1. **Node Abstraction**

* Created a **reusable `NodeContainer`** component for all nodes (Input, Output, LLM, Text, Knowledge Base, etc.)
* Each node passes:

  * `title`, `description`
  * `inputs` and `outputs` (Handle configuration)
  * Custom children for body content
* **Easy to extend**: Just import `NodeContainer` and customize content per new node

### 2. **Themed UI (Matching VectorShift Style)**

* **Light purple/lavender palette**: Unified across toolbar, node cards, dropdowns, modals
* Styled with **Tailwind CSS**
* Responsive layout and subtle transitions for better UX

### 3. **Text Node Enhancements**

* Auto-resizing `<textarea>` as user types (dynamic height)
* Supports `{{variable}}` syntax parsing (hook available)
* Dynamic **input handles** generated from detected variables inside text

### 4. **Delete Node Functionality**

* Added ❌ icon on all nodes
* Triggers a **custom modal confirmation**
* Prevents accidental deletions and provides cleaner UX

### 5. **Toolbar (Draggable Nodes)**

* Nodes:

  * 📥 Input
  * 🧠 LLM
  * 📝 Text
  * 📤 Output
  * 📚 Knowledge Base (Custom Node)
* All styled consistently with the theme

### 6. **Backend Integration**

* Pipeline submission via `Submit` button
* Sends `nodes` and `edges` to backend endpoint: `POST /pipelines/parse`
* Backend parses structure and checks for:

  * Number of nodes & edges
  * Whether the graph forms a **DAG** (Directed Acyclic Graph)

### 7. **Submit Feedback Modal**

* Clean alert/modal that displays:

  * ✅ Number of nodes
  * ✅ Number of edges
  * ✅ Whether it forms a DAG

---

## 📁 Folder Structure

```
/frontend
  ├── src
  │   ├── components/
  │   ├── nodes/
  │   ├── ui.js
  │   ├── submit.js
  │   └── store.js
/backend
  └── main.py
```

---

## 🛠️ Technologies Used

* **Frontend**: React, React Flow, Zustand, Tailwind CSS
* **Backend**: FastAPI (Python)
* **Other**: Lucide Icons for toolbar and header icons

---

## ✨ Bonus Touches

* Dynamic handle generation (Text Node)
* Confirmation modal for deletion
* Animated buttons + smooth UI consistency
* Responsive layout & clear component structure
* Matching UI to **VectorShift’s live editor design**

---

## 🙌 Author Notes

Thanks for reviewing my submission! I had a great time building this and learned a lot in the process. Looking forward to hearing your feedback.

Feel free to reach out for any clarifications or walkthroughs!

> ✨ Submitted by: **\[Om Sharma]**
about me : cv.omsharma.info

```

---

